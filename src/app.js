/**
 * PictoLoco - Aplicacion Principal
 * Sistema aumentativo: buscar, agregar, editar, ocultar pictogramas
 * Scroll horizontal (basicos) + Scroll vertical (categorias)
 */

class PictoLocoApp {
    constructor() {
        this.state = {
            sentence: [],
            currentCategory: 'pronombres',
            currentPictos: [],
            isLoading: false
        };

        this.elements = {};
        this.editingPicto = null; // Pictograma siendo editado
    }

    /**
     * Obtener label de display (customLabel o label original)
     */
    getDisplayLabel(picto) {
        return (picto && picto.customLabel) ? picto.customLabel : (picto ? picto.label : '');
    }

    /**
     * Inicializar la aplicacion
     */
    async init() {
        console.log('🚀 Iniciando PictoLoco...');

        try {
            this.initElements();
            await db.init();
            await this.initializeDatabase();
            this.initEventListeners();
            this.initAudio();
            this.initOrientationListener();

            await Promise.all([
                this.loadBasicPictograms(),
                this.loadCategory('pronombres')
            ]);

            console.log('✅ PictoLoco listo');
        } catch (error) {
            console.error('❌ Error iniciando:', error);
            this.showError('Error al iniciar la aplicacion');
        }
    }

    /**
     * Inicializar elementos del DOM
     */
    initElements() {
        this.elements = {
            sentencePictos: document.getElementById('sentencePictos'),
            sentenceText: document.getElementById('sentenceText'),
            btnSpeak: document.getElementById('btnSpeak'),
            btnCorrect: document.getElementById('btnCorrect'),
            btnClear: document.getElementById('btnClear'),
            categoryTabs: document.getElementById('categoryTabs'),
            basicScroll: document.getElementById('basicScroll'),
            pictoScroll: document.getElementById('pictoScroll'),
            scrollIndicator: document.getElementById('scrollIndicator'),
            searchOverlay: document.getElementById('searchOverlay'),
            searchInput: document.getElementById('searchInput'),
            searchResults: document.getElementById('searchResults'),
            searchClose: document.getElementById('searchClose'),
            btnSearch: document.getElementById('btnSearch'),
            // Edit modal elements
            editModalOverlay: document.getElementById('editModalOverlay'),
            editModalImage: document.getElementById('editModalImage'),
            editModalOriginal: document.getElementById('editModalOriginal'),
            editModalInput: document.getElementById('editModalInput'),
            editModalSave: document.getElementById('editModalSave'),
            editModalHide: document.getElementById('editModalHide'),
            editModalCancel: document.getElementById('editModalCancel')
        };
        this.searchDebounceTimer = null;
    }

    /**
     * Inicializar base de datos con pictogramas
     */
    async initializeDatabase() {
        const stats = await db.getStats();

        if (stats.total === 0) {
            console.log('📦 DB vacia, cargando pictogramas...');
            const allPictos = getAllPictogramsWithImages();
            console.log('📊 Total pictogramas a guardar:', allPictos.length);
            await db.savePictograms(allPictos);
            console.log(`✅ ${allPictos.length} pictogramas cargados`);
        } else {
            console.log(`✅ DB con ${stats.total} pictogramas`);
            // Verificar que los pictos tienen los nuevos campos
            const sample = await db.getPictogramsByCategory('basic', 1);
            if (sample.length > 0 && sample[0].visible === undefined) {
                console.log('🔄 Actualizando pictogramas con campos nuevos...');
                const allPictos = await db.getAllPictograms();
                const updated = allPictos.map(p => ({
                    ...p,
                    visible: p.visible !== undefined ? p.visible : true,
                    hidden: p.hidden !== undefined ? p.hidden : false,
                    customLabel: p.customLabel !== undefined ? p.customLabel : null,
                    source: p.source || 'default'
                }));
                await db.savePictograms(updated);
                console.log('✅ Campos actualizados');
            }
        }
    }

    /**
     * Inicializar sistema de audio
     */
    initAudio() {
        window.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        document.addEventListener('click', () => {
            if (window.audioContext && window.audioContext.state === 'suspended') {
                window.audioContext.resume();
            }
        }, { once: true });
    }

    /**
     * Inicializar event listeners
     */
    initEventListeners() {
        // Botones de accion
        this.elements.btnSpeak.addEventListener('click', () => this.speakSentence());
        this.elements.btnCorrect.addEventListener('click', () => this.removeFromSentence());
        this.elements.btnClear.addEventListener('click', () => this.clearSentence());

        // Tabs de categorias
        this.elements.categoryTabs.addEventListener('click', (e) => {
            const tab = e.target.closest('.category-tab');
            if (tab) {
                this.switchCategory(tab.dataset.category);
                tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });

        // Rueda del mouse en categorias
        this.elements.categoryTabs.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.elements.categoryTabs.scrollLeft += e.deltaY;
        }, { passive: false });

        // Scroll para ocultar/mostrar indicador
        this.elements.pictoScroll.addEventListener('scroll', () => {
            this.updateScrollIndicator();
        });

        // Busqueda
        this.elements.btnSearch.addEventListener('click', () => this.openSearch());
        this.elements.searchClose.addEventListener('click', () => this.closeSearch());
        this.elements.searchOverlay.addEventListener('click', (e) => {
            if (e.target === this.elements.searchOverlay) this.closeSearch();
        });
        this.elements.searchInput.addEventListener('input', () => this.onSearchInput());

        // Edit modal
        this.elements.editModalCancel.addEventListener('click', () => this.closeEditModal());
        this.elements.editModalSave.addEventListener('click', () => this.saveEditLabel());
        this.elements.editModalHide.addEventListener('click', () => this.hideEditPicto());
        this.elements.editModalOverlay.addEventListener('click', (e) => {
            if (e.target === this.elements.editModalOverlay) this.closeEditModal();
        });

        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'Backspace') {
                this.removeFromSentence();
            } else if (e.key === 'Enter' && e.ctrlKey) {
                this.speakSentence();
            } else if (e.key === 'Escape') {
                if (this.elements.editModalOverlay.classList.contains('active')) {
                    this.closeEditModal();
                } else if (this.elements.searchOverlay.classList.contains('active')) {
                    this.closeSearch();
                }
            }
        });
    }

    /**
     * Cargar pictogramas basicos (scroll horizontal)
     */
    async loadBasicPictograms() {
        this.elements.basicScroll.innerHTML = '<div style="padding: 20px; text-align: center;"><div class="spinner" style="width: 30px; height: 30px; margin: 0 auto 10px;"></div></div>';

        try {
            let pictos = await db.getVisiblePictogramsByCategory('basic', 20);

            if (pictos.length === 0) {
                pictos = getPictogramsByCategory('basic');
            }

            this.renderBasicScroll(pictos);
        } catch (error) {
            console.error('❌ Error cargando basicos:', error);
            const fallback = getPictogramsByCategory('basic');
            this.renderBasicScroll(fallback);
        }
    }

    /**
     * Renderizar scroll horizontal de basicos
     */
    renderBasicScroll(pictos) {
        const self = this;
        const html = pictos.map(picto => `
            <div class="basic-picto-card"
                 data-id="${picto.id}"
                 data-keyword="${picto.keyword}"
                 tabindex="0"
                 role="button"
                 aria-label="${this.getDisplayLabel(picto)}">
                <img src="${picto.image}"
                     alt="${this.getDisplayLabel(picto)}"
                     class="basic-picto-image"
                     loading="lazy">
                <div class="basic-picto-label">${this.getDisplayLabel(picto)}</div>
            </div>
        `).join('');

        this.elements.basicScroll.innerHTML = html;

        // Agregar listeners con long-press
        this.elements.basicScroll.querySelectorAll('.basic-picto-card').forEach((card, idx) => {
            const picto = pictos[idx];
            this._attachLongPress(card, picto, () => {
                this.addPictoToSentence(picto);
            });

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.addPictoToSentence(picto);
                }
            });
        });
    }

    /**
     * Cargar pictogramas de una categoria (scroll vertical)
     */
    async loadCategory(category) {
        if (this.state.isLoading) return;
        this.state.isLoading = true;
        this.state.currentCategory = category;

        try {
            const pictos = await db.getVisiblePictogramsByCategory(category, 50);

            if (pictos.length === 0) {
                this.showEmptyState();
                return;
            }

            this.state.currentPictos = pictos;
            this.renderPictoScroll(pictos);
            this.updateCategoryTabs();

        } catch (error) {
            console.error('❌ Error cargando categoria:', error);
            this.showError('Error al cargar pictogramas');
        } finally {
            this.state.isLoading = false;
        }
    }

    /**
     * Cambiar categoria
     */
    switchCategory(category) {
        if (this.state.currentCategory === category) return;
        this.playSound('pop');
        this.loadCategory(category);
    }

    /**
     * Renderizar scroll vertical de pictogramas
     */
    renderPictoScroll(pictos) {
        const html = pictos.map((picto, index) => `
            <div class="picto-card"
                 data-id="${picto.id}"
                 data-index="${index}"
                 tabindex="0"
                 role="button"
                 aria-label="Toca para agregar ${this.getDisplayLabel(picto)}">
                <div class="picto-card-priority">
                    <div class="priority-dot ${this.getPriorityClass(picto.priority)}"></div>
                    <div class="priority-dot"></div>
                    <div class="priority-dot"></div>
                    <div class="priority-dot"></div>
                </div>
                <img src="${picto.image}"
                     alt="${this.getDisplayLabel(picto)}"
                     class="picto-card-image"
                     loading="${index === 0 ? 'eager' : 'lazy'}">
                <div class="picto-card-label">${this.getDisplayLabel(picto)}</div>
            </div>
        `).join('');

        this.elements.pictoScroll.innerHTML = html;
        this.attachPictoListeners();
        this.elements.pictoScroll.scrollTop = 0;
    }

    /**
     * Adjuntar listeners a pictogramas con long-press
     */
    attachPictoListeners() {
        const cards = this.elements.pictoScroll.querySelectorAll('.picto-card');

        cards.forEach(card => {
            const index = parseInt(card.dataset.index);
            const picto = this.state.currentPictos[index];

            this._attachLongPress(card, picto, () => {
                this.addPictoToSentence(picto, card);
            });

            // Hover
            card.addEventListener('mouseenter', () => {
                card.classList.add('color-effect');
                setTimeout(() => card.classList.remove('color-effect'), 500);
            });

            // Teclado
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.addPictoToSentence(picto, card);
                }
            });
        });
    }

    /**
     * Attach long-press handler (600ms) to an element
     * Short click/tap = onClick callback
     * Long press = openEditModal
     */
    _attachLongPress(element, picto, onClick) {
        let pressTimer = null;
        let isLongPress = false;
        let startX = 0, startY = 0;

        const startPress = (e) => {
            isLongPress = false;
            const touch = e.touches ? e.touches[0] : e;
            startX = touch.clientX;
            startY = touch.clientY;

            pressTimer = setTimeout(() => {
                isLongPress = true;
                element.classList.remove('long-pressing');
                this.openEditModal(picto);
            }, 600);

            // Visual feedback
            setTimeout(() => {
                if (pressTimer) element.classList.add('long-pressing');
            }, 200);
        };

        const endPress = (e) => {
            clearTimeout(pressTimer);
            pressTimer = null;
            element.classList.remove('long-pressing');

            if (!isLongPress) {
                onClick();
            }
        };

        const cancelPress = (e) => {
            if (!pressTimer) return;
            const touch = e.touches ? e.touches[0] : e;
            const dx = Math.abs(touch.clientX - startX);
            const dy = Math.abs(touch.clientY - startY);
            if (dx > 10 || dy > 10) {
                clearTimeout(pressTimer);
                pressTimer = null;
                element.classList.remove('long-pressing');
            }
        };

        // Touch events
        element.addEventListener('touchstart', startPress, { passive: true });
        element.addEventListener('touchend', (e) => {
            if (isLongPress) e.preventDefault();
            endPress(e);
        });
        element.addEventListener('touchmove', cancelPress, { passive: true });
        element.addEventListener('touchcancel', () => {
            clearTimeout(pressTimer);
            pressTimer = null;
            element.classList.remove('long-pressing');
        });

        // Mouse events (for desktop)
        element.addEventListener('mousedown', (e) => {
            if (e.button === 0) startPress(e);
        });
        element.addEventListener('mouseup', endPress);
        element.addEventListener('mouseleave', () => {
            clearTimeout(pressTimer);
            pressTimer = null;
            element.classList.remove('long-pressing');
        });

        // Prevent default click (we handle it in endPress)
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }

    // =============================================
    // EDIT MODAL
    // =============================================

    /**
     * Abrir modal de edicion
     */
    openEditModal(picto) {
        this.editingPicto = picto;
        this.playSound('pop');

        this.elements.editModalImage.src = picto.image;
        this.elements.editModalOriginal.textContent = `Original: ${picto.label}`;
        this.elements.editModalInput.value = this.getDisplayLabel(picto);
        this.elements.editModalOverlay.classList.add('active');

        setTimeout(() => this.elements.editModalInput.focus(), 100);
    }

    /**
     * Cerrar modal de edicion
     */
    closeEditModal() {
        this.elements.editModalOverlay.classList.remove('active');
        this.editingPicto = null;
    }

    /**
     * Guardar label personalizado desde modal
     */
    async saveEditLabel() {
        if (!this.editingPicto) return;

        const newLabel = this.elements.editModalInput.value.trim();
        if (!newLabel) return;

        try {
            // Si el label es igual al original, borrar customLabel
            const labelToSave = (newLabel === this.editingPicto.label) ? null : newLabel;
            await db.setCustomLabel(this.editingPicto.id, labelToSave);

            this.playSound('select');
            this.closeEditModal();

            // Recargar la vista actual
            await this.refreshCurrentView();
        } catch (error) {
            console.error('Error guardando label:', error);
        }
    }

    /**
     * Ocultar pictograma desde modal
     */
    async hideEditPicto() {
        if (!this.editingPicto) return;

        try {
            await db.hidePictogram(this.editingPicto.id);
            this.playSound('pop');
            this.closeEditModal();

            // Recargar la vista actual
            await this.refreshCurrentView();
        } catch (error) {
            console.error('Error ocultando pictograma:', error);
        }
    }

    /**
     * Refrescar la vista actual (categoria + basicos)
     */
    async refreshCurrentView() {
        // Reset loading state to allow reload
        this.state.isLoading = false;
        await Promise.all([
            this.loadBasicPictograms(),
            this.loadCategory(this.state.currentCategory)
        ]);
    }

    // =============================================
    // SENTENCE
    // =============================================

    /**
     * Agregar pictograma a la oracion
     */
    addPictoToSentence(picto, card = null) {
        this.state.sentence.push(picto);
        this.updateSentenceDisplay();
        this.playSound('select');

        db.incrementUsage(picto.id).catch(console.error);

        if (card) {
            card.classList.add('added');
            setTimeout(() => card.classList.remove('added'), 500);
        }

        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    /**
     * Actualizar visualizacion de la oracion
     */
    updateSentenceDisplay() {
        const { sentence } = this.state;

        if (sentence.length === 0) {
            this.elements.sentencePictos.innerHTML = '<span class="sentence-placeholder">Toca pictogramas para agregar</span>';
            this.elements.sentenceText.textContent = '';
            return;
        }

        this.elements.sentencePictos.innerHTML = sentence.map((picto, index) =>
            `<img src="${picto.image}"
                  alt="${this.getDisplayLabel(picto)}"
                  class="sentence-picto-item"
                  title="${this.getDisplayLabel(picto)} (clic para eliminar)"
                  onclick="app.removeFromSentenceByIndex(${index})">`
        ).join('');

        this.elements.sentenceText.textContent = sentence.map(p => this.getDisplayLabel(p)).join(' ');
    }

    removeFromSentenceByIndex(index) {
        this.state.sentence.splice(index, 1);
        this.updateSentenceDisplay();
        this.playSound('pop');
    }

    removeFromSentence() {
        this.state.sentence.pop();
        this.updateSentenceDisplay();
        this.playSound('pop');
    }

    clearSentence() {
        this.state.sentence = [];
        this.updateSentenceDisplay();
        this.playSound('pop');
    }

    async resetDatabase() {
        if (confirm('¿Reiniciar la aplicacion? Esto borrara la base de datos y recargara los pictogramas.')) {
            await db.clear();
            location.reload();
        }
    }

    /**
     * Reproducir oracion con TTS
     */
    speakSentence() {
        const { sentence } = this.state;

        if (sentence.length === 0) {
            this.shakeElement(document.getElementById('sentenceInput'));
            return;
        }

        const text = sentence.map(p => this.getDisplayLabel(p)).join(' ');

        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-ES';
            utterance.rate = 0.85;
            utterance.pitch = 1;

            const voices = window.speechSynthesis.getVoices();
            const spanishVoice = voices.find(v => v.lang.includes('es'));
            if (spanishVoice) utterance.voice = spanishVoice;

            this.elements.btnSpeak.disabled = true;

            utterance.onend = () => {
                this.elements.btnSpeak.disabled = false;
            };

            utterance.onerror = () => {
                this.elements.btnSpeak.disabled = false;
            };

            window.speechSynthesis.speak(utterance);
        }
    }

    // =============================================
    // SEARCH (DB + Library)
    // =============================================

    openSearch() {
        this.elements.searchOverlay.classList.add('active');
        this.elements.searchInput.value = '';
        this.elements.searchResults.innerHTML = '';
        setTimeout(() => this.elements.searchInput.focus(), 100);
    }

    closeSearch() {
        this.elements.searchOverlay.classList.remove('active');
        this.elements.searchInput.value = '';
        this.elements.searchResults.innerHTML = '';
    }

    /**
     * Manejar input de busqueda con debounce
     * Busca en DB + libreria expandida, deduplica
     */
    onSearchInput() {
        clearTimeout(this.searchDebounceTimer);
        const query = this.elements.searchInput.value.trim();
        if (query.length === 0) {
            this.elements.searchResults.innerHTML = '';
            return;
        }
        this.searchDebounceTimer = setTimeout(async () => {
            try {
                // Buscar en DB (pictogramas del usuario)
                const dbResults = await db.searchPictograms(query);

                // Buscar en libreria expandida
                const libraryResults = typeof searchLibrary === 'function'
                    ? searchLibrary(query, 30)
                    : [];

                // Obtener estados de DB para badges
                const pictoStates = await db.getPictogramStates();

                // Deduplicar: DB tiene prioridad
                const seenIds = new Set(dbResults.map(p => p.id));
                const uniqueLibrary = libraryResults.filter(p => !seenIds.has(p.id));

                // Combinar: primero DB, luego libreria
                const combined = [...dbResults, ...uniqueLibrary].slice(0, 25);

                this.renderSearchResults(combined, pictoStates);
            } catch (err) {
                console.error('Error en busqueda:', err);
                // Fallback
                if (typeof searchLibrary === 'function') {
                    const results = searchLibrary(query, 20);
                    this.renderSearchResults(results, {});
                }
            }
        }, 200);
    }

    /**
     * Renderizar resultados de busqueda con botones +/check/restore
     */
    renderSearchResults(results, pictoStates) {
        if (results.length === 0) {
            this.elements.searchResults.innerHTML = '<div class="search-no-results">No se encontraron pictogramas</div>';
            return;
        }

        this.elements.searchResults.innerHTML = results.map((picto, i) => {
            const state = pictoStates[picto.id];
            const isInDB = !!state;
            const isHidden = state && state.hidden;
            const isVisible = isInDB && !isHidden;
            const displayLabel = (state && state.customLabel) ? state.customLabel : picto.label;

            let actionHtml = '';
            if (isHidden) {
                // Oculto: mostrar badge + boton restaurar
                actionHtml = `
                    <span class="search-hidden-badge">Oculto</span>
                    <button class="search-action-btn search-restore-btn" data-action="restore" data-search-index="${i}" title="Restaurar">↩️</button>
                `;
            } else if (isVisible) {
                // Ya visible: checkmark
                actionHtml = `<span class="search-action-btn search-check-badge" title="Ya agregado">✅</span>`;
            } else {
                // No en DB: boton agregar
                actionHtml = `<button class="search-action-btn search-add-btn" data-action="add" data-search-index="${i}" title="Agregar">➕</button>`;
            }

            return `
                <div class="search-result-item" data-search-index="${i}">
                    <img src="${picto.image}" alt="${displayLabel}">
                    <div class="search-result-info">
                        <div class="search-result-label-row">
                            <span class="search-result-label">${displayLabel}</span>
                        </div>
                    </div>
                    <span class="search-result-category">${picto.category}</span>
                    ${actionHtml}
                </div>
            `;
        }).join('');

        // Attach listeners
        this.elements.searchResults.querySelectorAll('.search-result-item').forEach((item, i) => {
            const picto = results[i];

            // Click on add button
            const addBtn = item.querySelector('[data-action="add"]');
            if (addBtn) {
                addBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    await this._addFromSearch(picto, addBtn);
                });
            }

            // Click on restore button
            const restoreBtn = item.querySelector('[data-action="restore"]');
            if (restoreBtn) {
                restoreBtn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    await this._restoreFromSearch(picto, item);
                });
            }

            // Click on row = navigate to category
            item.addEventListener('click', (e) => {
                // Don't navigate if clicking a button
                if (e.target.closest('.search-action-btn')) return;
                this.selectSearchResult(picto);
            });
        });
    }

    /**
     * Agregar pictograma de libreria a visible desde busqueda
     */
    async _addFromSearch(picto, btn) {
        try {
            await db.addToVisible(picto);
            this.playSound('select');

            // Cambiar boton a check
            btn.outerHTML = `<span class="search-action-btn search-check-badge" title="Ya agregado">✅</span>`;

            // Si la categoria actual coincide, recargar
            if (picto.category === this.state.currentCategory) {
                this.state.isLoading = false;
                this.loadCategory(this.state.currentCategory);
            }
            // Si es basic, recargar basicos
            if (picto.category === 'basic') {
                this.loadBasicPictograms();
            }
        } catch (error) {
            console.error('Error agregando pictograma:', error);
        }
    }

    /**
     * Restaurar pictograma oculto desde busqueda
     */
    async _restoreFromSearch(picto, item) {
        try {
            await db.restorePictogram(picto.id);
            this.playSound('select');

            // Actualizar el item en la UI
            const badge = item.querySelector('.search-hidden-badge');
            const restoreBtn = item.querySelector('.search-restore-btn');
            if (badge) badge.remove();
            if (restoreBtn) {
                restoreBtn.outerHTML = `<span class="search-action-btn search-check-badge" title="Ya agregado">✅</span>`;
            }

            // Recargar si es la categoria actual
            if (picto.category === this.state.currentCategory) {
                this.state.isLoading = false;
                this.loadCategory(this.state.currentCategory);
            }
            if (picto.category === 'basic') {
                this.loadBasicPictograms();
            }
        } catch (error) {
            console.error('Error restaurando pictograma:', error);
        }
    }

    /**
     * Seleccionar un resultado de busqueda - navegar a su categoria
     */
    selectSearchResult(picto) {
        this.closeSearch();

        const scrollToPicto = () => {
            setTimeout(() => {
                const cards = this.elements.pictoScroll.querySelectorAll('.picto-card');
                for (const card of cards) {
                    if (parseInt(card.dataset.id) === picto.id) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.classList.add('added');
                        setTimeout(() => card.classList.remove('added'), 1000);
                        break;
                    }
                }
            }, 100);
            this.updateCategoryTabs();
            const activeTab = this.elements.categoryTabs.querySelector(`[data-category="${picto.category}"]`);
            if (activeTab) activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        };

        if (this.state.currentCategory === picto.category && !this.state.isLoading) {
            scrollToPicto();
        } else {
            this.state.isLoading = false;
            this.state.currentCategory = null;
            this.loadCategory(picto.category).then(scrollToPicto);
        }
    }

    // =============================================
    // CATEGORY TABS & NAVIGATION
    // =============================================

    updateCategoryTabs() {
        const tabs = this.elements.categoryTabs.querySelectorAll('.category-tab');
        tabs.forEach(tab => {
            if (tab.dataset.category === this.state.currentCategory) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    initOrientationListener() {
        this.landscapeQuery = window.matchMedia('(orientation: landscape)');
        this.landscapeQuery.addEventListener('change', () => {
            this.updateScrollIndicator();
            this.elements.pictoScroll.scrollTop = 0;
            this.elements.pictoScroll.scrollLeft = 0;
        });
    }

    isLandscape() {
        return this.landscapeQuery && this.landscapeQuery.matches;
    }

    updateScrollIndicator() {
        const { pictoScroll } = this.elements;
        let hasMore;

        if (this.isLandscape()) {
            const maxScroll = pictoScroll.scrollWidth - pictoScroll.clientWidth;
            hasMore = pictoScroll.scrollLeft < maxScroll * 0.8;
            this.elements.scrollIndicator.querySelector('.scroll-arrow').textContent = '→';
        } else {
            const maxScroll = pictoScroll.scrollHeight - pictoScroll.clientHeight;
            hasMore = pictoScroll.scrollTop < maxScroll * 0.8;
            this.elements.scrollIndicator.querySelector('.scroll-arrow').textContent = '↓';
        }

        if (hasMore && this.state.currentPictos.length > 1) {
            this.elements.scrollIndicator.style.opacity = '0.7';
        } else {
            this.elements.scrollIndicator.style.opacity = '0';
        }
    }

    // =============================================
    // UTILITIES
    // =============================================

    getPriorityClass(priority) {
        return `priority-${priority}`;
    }

    playSound(type) {
        if (!window.audioContext) return;

        const oscillator = window.audioContext.createOscillator();
        const gainNode = window.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(window.audioContext.destination);

        if (type === 'pop') {
            oscillator.frequency.value = 600;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.2, window.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, window.audioContext.currentTime + 0.1);
            oscillator.start(window.audioContext.currentTime);
            oscillator.stop(window.audioContext.currentTime + 0.1);
        } else if (type === 'select') {
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.25, window.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, window.audioContext.currentTime + 0.15);
            oscillator.start(window.audioContext.currentTime);
            oscillator.stop(window.audioContext.currentTime + 0.15);
        }
    }

    showEmptyState() {
        this.elements.pictoScroll.innerHTML = `
            <div class="loading-state">
                <div style="font-size: 4rem; margin-bottom: 16px;">📭</div>
                <p>No hay pictogramas en esta categoria</p>
                <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 8px;">Usa 🔍 para buscar y agregar pictogramas</p>
            </div>
        `;
    }

    showError(message) {
        this.elements.pictoScroll.innerHTML = `
            <div class="loading-state">
                <div style="font-size: 4rem; margin-bottom: 16px;">❌</div>
                <p>${message}</p>
            </div>
        `;
    }

    shakeElement(element) {
        if (!element) return;
        element.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
}

// Inicializar aplicacion
const app = new PictoLocoApp();
document.addEventListener('DOMContentLoaded', () => app.init());
