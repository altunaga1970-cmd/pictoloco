/**
 * PictoLoco Database - IndexedDB para almacenamiento local
 * Almacena pictogramas para uso offline
 */

const DB_NAME = 'PictoLocoDB';
const DB_VERSION = 4;  // v4: sistema aumentativo con visible/hidden/customLabel

class PictoDatabase {
    constructor() {
        this.db = null;
        this.dbName = DB_NAME;
        this.version = DB_VERSION;
    }

    /**
     * Inicializar la base de datos
     */
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => {
                console.error('❌ Error abriendo DB:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('✅ DB inicializada correctamente');
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                const oldVersion = event.oldVersion;

                // Si hay upgrade desde v1-v3, borrar stores para recargar con nuevos campos
                if (oldVersion >= 1 && db.objectStoreNames.contains('pictograms')) {
                    db.deleteObjectStore('pictograms');
                    console.log('🔄 Store pictograms eliminado para recarga con campos nuevos');
                }
                if (oldVersion >= 1 && db.objectStoreNames.contains('usage')) {
                    db.deleteObjectStore('usage');
                }

                // Crear stores frescos con nuevos indices
                const pictoStore = db.createObjectStore('pictograms', { keyPath: 'id' });
                pictoStore.createIndex('keyword', 'keyword', { unique: false });
                pictoStore.createIndex('category', 'category', { unique: false });
                pictoStore.createIndex('priority', 'priority', { unique: false });
                pictoStore.createIndex('usageCount', 'usageCount', { unique: false });
                pictoStore.createIndex('visible', 'visible', { unique: false });

                db.createObjectStore('usage', { keyPath: 'pictoId' });

                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'key' });
                }

                console.log('📦 Stores creados (v4 - sistema aumentativo)');
            };
        });
    }

    /**
     * Guardar múltiples pictogramas
     */
    async savePictograms(pictograms) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['pictograms'], 'readwrite');
            const store = transaction.objectStore('pictograms');

            let count = 0;
            pictograms.forEach(picto => {
                const request = store.put(picto);
                request.onsuccess = () => count++;
            });

            transaction.oncomplete = () => {
                console.log(`✅ ${count} pictogramas guardados`);
                resolve(count);
            };

            transaction.onerror = () => {
                console.error('❌ Error guardando pictogramas');
                reject(transaction.error);
            };
        });
    }

    /**
     * Obtener pictograma por ID
     */
    async getPictogram(id) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['pictograms'], 'readonly');
            const store = transaction.objectStore('pictograms');
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Obtener todos los pictogramas de una categoría ordenados por prioridad
     */
    async getPictogramsByCategory(category, limit = 50) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['pictograms'], 'readonly');
            const store = transaction.objectStore('pictograms');
            const index = store.index('category');
            const request = index.getAll(category);

            request.onsuccess = () => {
                let results = request.result || [];
                // Ordenar por prioridad (menor número = mayor prioridad) y uso
                results.sort((a, b) => {
                    if (a.priority !== b.priority) {
                        return a.priority - b.priority;
                    }
                    return (b.usageCount || 0) - (a.usageCount || 0);
                });
                resolve(results.slice(0, limit));
            };

            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Obtener pictogramas básicos (prioridad 1)
     */
    async getBasicPictograms() {
        return this.getPictogramsByPriority(1);
    }

    /**
     * Obtener pictogramas por prioridad
     */
    async getPictogramsByPriority(priority) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['pictograms'], 'readonly');
            const store = transaction.objectStore('pictograms');
            const index = store.index('priority');
            const request = index.getAll(priority);

            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Obtener todos los pictogramas
     */
    async getAllPictograms() {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['pictograms'], 'readonly');
            const store = transaction.objectStore('pictograms');
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Incrementar contador de uso de un pictograma
     */
    async incrementUsage(pictoId) {
        return new Promise(async (resolve, reject) => {
            try {
                const picto = await this.getPictogram(pictoId);
                if (!picto) {
                    reject(new Error('Pictograma no encontrado'));
                    return;
                }

                picto.usageCount = (picto.usageCount || 0) + 1;
                await this.savePictograms([picto]);
                resolve(picto.usageCount);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Guardar configuración
     */
    async saveSetting(key, value) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['settings'], 'readwrite');
            const store = transaction.objectStore('settings');
            const request = store.put({ key, value });

            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Obtener configuración
     */
    async getSetting(key) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['settings'], 'readonly');
            const store = transaction.objectStore('settings');
            const request = store.get(key);

            request.onsuccess = () => resolve(request.result?.value);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Limpiar toda la base de datos
     */
    async clear() {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['pictograms'], 'readwrite');
            const store = transaction.objectStore('pictograms');
            const request = store.clear();

            request.onsuccess = () => {
                console.log('🗑️ DB limpiada');
                resolve(true);
            };
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Buscar pictogramas por nombre/keyword
     */
    async searchPictograms(query) {
        if (!query || query.trim().length === 0) return [];

        const normalize = (str) =>
            str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        const normalizedQuery = normalize(query.trim());
        const allPictos = await this.getAllPictograms();

        const matches = allPictos.filter(p => {
            const label = normalize(p.label || '');
            const keyword = normalize(p.keyword || '');
            const customLabel = normalize(p.customLabel || '');
            return label.includes(normalizedQuery) || keyword.includes(normalizedQuery) || customLabel.includes(normalizedQuery);
        });

        matches.sort((a, b) => {
            const aLabel = normalize(a.customLabel || a.label || '');
            const bLabel = normalize(b.customLabel || b.label || '');
            const aExact = aLabel === normalizedQuery ? 0 : 1;
            const bExact = bLabel === normalizedQuery ? 0 : 1;
            if (aExact !== bExact) return aExact - bExact;
            if (a.priority !== b.priority) return a.priority - b.priority;
            return (b.usageCount || 0) - (a.usageCount || 0);
        });

        return matches.slice(0, 20);
    }

    /**
     * Obtener pictogramas visibles de una categoria (filtra hidden)
     */
    async getVisiblePictogramsByCategory(category, limit = 50) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('DB no inicializada'));
                return;
            }

            const transaction = this.db.transaction(['pictograms'], 'readonly');
            const store = transaction.objectStore('pictograms');
            const index = store.index('category');
            const request = index.getAll(category);

            request.onsuccess = () => {
                let results = (request.result || []).filter(p =>
                    p.visible !== false && p.hidden !== true
                );
                results.sort((a, b) => {
                    if (a.priority !== b.priority) {
                        return a.priority - b.priority;
                    }
                    return (b.usageCount || 0) - (a.usageCount || 0);
                });
                resolve(results.slice(0, limit));
            };

            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Agregar pictograma de libreria a IndexedDB como visible
     */
    async addToVisible(picto) {
        const existing = await this.getPictogram(picto.id);
        if (existing) {
            // Si ya existe, marcarlo como visible y no oculto
            existing.visible = true;
            existing.hidden = false;
            await this.savePictograms([existing]);
            return existing;
        }
        // Nuevo pictograma de libreria
        const newPicto = {
            ...picto,
            visible: true,
            hidden: false,
            customLabel: null,
            source: picto.source || 'library',
            usageCount: 0
        };
        // Limpiar campos internos de busqueda
        delete newPicto._normalizedLabel;
        delete newPicto._normalizedKeyword;
        await this.savePictograms([newPicto]);
        return newPicto;
    }

    /**
     * Ocultar pictograma (soft delete)
     */
    async hidePictogram(id) {
        const picto = await this.getPictogram(id);
        if (!picto) return false;
        picto.hidden = true;
        await this.savePictograms([picto]);
        return true;
    }

    /**
     * Restaurar pictograma oculto
     */
    async restorePictogram(id) {
        const picto = await this.getPictogram(id);
        if (!picto) return false;
        picto.hidden = false;
        picto.visible = true;
        await this.savePictograms([picto]);
        return true;
    }

    /**
     * Guardar label personalizado
     */
    async setCustomLabel(id, label) {
        const picto = await this.getPictogram(id);
        if (!picto) return false;
        picto.customLabel = label && label.trim() ? label.trim() : null;
        await this.savePictograms([picto]);
        return true;
    }

    /**
     * Obtener Set de IDs visibles (para badges en busqueda)
     */
    async getVisibleIds() {
        const allPictos = await this.getAllPictograms();
        return new Set(allPictos.map(p => p.id));
    }

    /**
     * Obtener mapa de estado de pictogramas en DB {id: {visible, hidden}}
     */
    async getPictogramStates() {
        const allPictos = await this.getAllPictograms();
        const map = {};
        for (const p of allPictos) {
            map[p.id] = { visible: p.visible !== false, hidden: p.hidden === true, customLabel: p.customLabel };
        }
        return map;
    }

    /**
     * Obtener estadísticas
     */
    async getStats() {
        const allPictos = await this.getAllPictograms();
        const total = allPictos.length;
        const byCategory = {};
        const mostUsed = [...allPictos].sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0)).slice(0, 10);

        allPictos.forEach(picto => {
            const cat = picto.category || 'sin-categoria';
            byCategory[cat] = (byCategory[cat] || 0) + 1;
        });

        return {
            total,
            byCategory,
            mostUsed
        };
    }
}

// Instancia global
const db = new PictoDatabase();
