/**
 * PictoLoco - Base de datos de pictogramas ARASAAC
 * TODOS los IDs verificados en api.arasaac.org/v1/pictograms/es/search/
 * Vocabulario núcleo estilo Proloquo2Go + categorías temáticas
 * Auditoría: 23-02-2026
 *
 * Total: ~200 pictogramas en 15 categorías
 */

const PICTOGRAMS_DATA = {

    // =============================================
    // VOCABULARIO NÚCLEO (Core Vocabulary)
    // =============================================

    basic: [
        // Prioridad 1 - Palabras esenciales de alta frecuencia
        { id: 5441, keyword: 'quiero', label: 'Quiero', category: 'basic', priority: 1 },
        { id: 32753, keyword: 'dame', label: 'Dame', category: 'basic', priority: 1 },
        { id: 5584, keyword: 'sí', label: 'Sí', category: 'basic', priority: 1 },
        { id: 5526, keyword: 'no', label: 'No', category: 'basic', priority: 1 },
        { id: 5508, keyword: 'más', label: 'Más', category: 'basic', priority: 1 },
        { id: 7171, keyword: 'ayuda', label: 'Ayuda', category: 'basic', priority: 1 },
        { id: 8195, keyword: 'por favor', label: 'Por favor', category: 'basic', priority: 1 },
        { id: 32954, keyword: 'vamos', label: 'Vamos', category: 'basic', priority: 1 },
        { id: 37826, keyword: 'gustar', label: 'Me gusta', category: 'basic', priority: 1 },
        { id: 5596, keyword: 'todo', label: 'Todo', category: 'basic', priority: 1 },
        { id: 29839, keyword: 'nada', label: 'Nada', category: 'basic', priority: 1 }
    ],

    pronombres: [
        // Prioridad 1 - Pronombres personales (core vocabulary)
        { id: 6632, keyword: 'yo', label: 'Yo', category: 'pronombres', priority: 1 },
        { id: 6625, keyword: 'tú', label: 'Tú', category: 'pronombres', priority: 1 },
        { id: 6480, keyword: 'él', label: 'Él', category: 'pronombres', priority: 1 },
        { id: 7029, keyword: 'ella', label: 'Ella', category: 'pronombres', priority: 1 },
        { id: 7185, keyword: 'nosotros', label: 'Nosotros', category: 'pronombres', priority: 1 },
        { id: 7032, keyword: 'ellos', label: 'Ellos', category: 'pronombres', priority: 1 },
        { id: 12264, keyword: 'mío', label: 'Mío', category: 'pronombres', priority: 1 },
        { id: 12281, keyword: 'tuyo', label: 'Tuyo', category: 'pronombres', priority: 1 }
    ],

    verbos: [
        // Prioridad 1 - Verbos núcleo de alta frecuencia
        { id: 36480, keyword: 'ser', label: 'Ser', category: 'verbos', priority: 1 },
        { id: 36392, keyword: 'estar', label: 'Estar', category: 'verbos', priority: 1 },
        { id: 32761, keyword: 'tener', label: 'Tener', category: 'verbos', priority: 1 },
        { id: 32751, keyword: 'hacer', label: 'Hacer', category: 'verbos', priority: 1 },
        { id: 8142, keyword: 'ir', label: 'Ir', category: 'verbos', priority: 1 },
        { id: 35949, keyword: 'poder', label: 'Poder', category: 'verbos', priority: 1 },
        { id: 28431, keyword: 'dar', label: 'Dar', category: 'verbos', priority: 1 },
        { id: 32757, keyword: 'poner', label: 'Poner', category: 'verbos', priority: 1 },
        { id: 16885, keyword: 'saber', label: 'Saber', category: 'verbos', priority: 1 },
        { id: 9693, keyword: 'decir', label: 'Decir', category: 'verbos', priority: 1 },
        { id: 32669, keyword: 'venir', label: 'Venir', category: 'verbos', priority: 1 },
        { id: 6553, keyword: 'llevar', label: 'Llevar', category: 'verbos', priority: 1 },
        { id: 38796, keyword: 'pensar', label: 'Pensar', category: 'verbos', priority: 1 },
        { id: 24825, keyword: 'abrir', label: 'Abrir', category: 'verbos', priority: 1 },
        { id: 24976, keyword: 'cerrar', label: 'Cerrar', category: 'verbos', priority: 1 },
        { id: 36914, keyword: 'esperar', label: 'Esperar', category: 'verbos', priority: 1 },
        { id: 24773, keyword: 'encontrar', label: 'Encontrar', category: 'verbos', priority: 1 },
        { id: 30196, keyword: 'sentir', label: 'Sentir', category: 'verbos', priority: 1 }
    ],

    preguntas: [
        // Prioridad 1 - Palabras interrogativas
        { id: 22620, keyword: 'qué', label: 'Qué', category: 'preguntas', priority: 1 },
        { id: 9853, keyword: 'quién', label: 'Quién', category: 'preguntas', priority: 1 },
        { id: 7764, keyword: 'dónde', label: 'Dónde', category: 'preguntas', priority: 1 },
        { id: 32874, keyword: 'cuándo', label: 'Cuándo', category: 'preguntas', priority: 1 },
        { id: 22619, keyword: 'cómo', label: 'Cómo', category: 'preguntas', priority: 1 },
        { id: 36719, keyword: 'por qué', label: 'Por qué', category: 'preguntas', priority: 1 },
        { id: 24731, keyword: 'cuánto', label: 'Cuánto', category: 'preguntas', priority: 1 }
    ],

    social: [
        // Prioridad 1 - Saludos y cortesía
        { id: 6522, keyword: 'hola', label: 'Hola', category: 'social', priority: 1 },
        { id: 6028, keyword: 'adiós', label: 'Adiós', category: 'social', priority: 1 },
        { id: 8129, keyword: 'gracias', label: 'Gracias', category: 'social', priority: 1 },
        { id: 11625, keyword: 'perdón', label: 'Perdón', category: 'social', priority: 1 },
        { id: 5397, keyword: 'bien', label: 'Bien', category: 'social', priority: 1 },
        { id: 5504, keyword: 'mal', label: 'Mal', category: 'social', priority: 1 }
    ],

    // =============================================
    // CATEGORÍAS DESCRIPTIVAS
    // =============================================

    adjetivos: [
        // Prioridad 2 - Descriptores
        { id: 4658, keyword: 'grande', label: 'Grande', category: 'adjetivos', priority: 2 },
        { id: 4716, keyword: 'pequeño', label: 'Pequeño', category: 'adjetivos', priority: 2 },
        { id: 13630, keyword: 'bueno', label: 'Bueno', category: 'adjetivos', priority: 2 },
        { id: 37182, keyword: 'malo', label: 'Malo', category: 'adjetivos', priority: 2 },
        { id: 11194, keyword: 'bonito', label: 'Bonito', category: 'adjetivos', priority: 2 },
        { id: 26090, keyword: 'feo', label: 'Feo', category: 'adjetivos', priority: 2 },
        { id: 11316, keyword: 'nuevo', label: 'Nuevo', category: 'adjetivos', priority: 2 },
        { id: 11394, keyword: 'viejo', label: 'Viejo', category: 'adjetivos', priority: 2 },
        { id: 4583, keyword: 'caliente', label: 'Caliente', category: 'adjetivos', priority: 2 },
        { id: 35583, keyword: 'frío', label: 'Frío', category: 'adjetivos', priority: 2 },
        { id: 26172, keyword: 'limpio', label: 'Limpio', category: 'adjetivos', priority: 2 },
        { id: 4750, keyword: 'sucio', label: 'Sucio', category: 'adjetivos', priority: 2 },
        { id: 4676, keyword: 'lento', label: 'Lento', category: 'adjetivos', priority: 2 },
        { id: 26176, keyword: 'lleno', label: 'Lleno', category: 'adjetivos', priority: 2 },
        { id: 26527, keyword: 'vacío', label: 'Vacío', category: 'adjetivos', priority: 2 },
        { id: 7168, keyword: 'mucho', label: 'Mucho', category: 'adjetivos', priority: 2 },
        { id: 7209, keyword: 'poco', label: 'Poco', category: 'adjetivos', priority: 2 }
    ],

    tiempo: [
        // Prioridad 2 - Conceptos temporales
        { id: 32747, keyword: 'ahora', label: 'Ahora', category: 'tiempo', priority: 2 },
        { id: 32749, keyword: 'después', label: 'Después', category: 'tiempo', priority: 2 },
        { id: 32745, keyword: 'antes', label: 'Antes', category: 'tiempo', priority: 2 },
        { id: 7131, keyword: 'hoy', label: 'Hoy', category: 'tiempo', priority: 2 },
        { id: 7152, keyword: 'mañana', label: 'Mañana', category: 'tiempo', priority: 2 },
        { id: 38279, keyword: 'ayer', label: 'Ayer', category: 'tiempo', priority: 2 },
        { id: 37753, keyword: 'primero', label: 'Primero', category: 'tiempo', priority: 2 }
    ],

    ubicacion: [
        // Prioridad 2 - Conceptos espaciales
        { id: 5382, keyword: 'aquí', label: 'Aquí', category: 'ubicacion', priority: 2 },
        { id: 5375, keyword: 'allí', label: 'Allí', category: 'ubicacion', priority: 2 },
        { id: 5388, keyword: 'arriba', label: 'Arriba', category: 'ubicacion', priority: 2 },
        { id: 5355, keyword: 'abajo', label: 'Abajo', category: 'ubicacion', priority: 2 },
        { id: 5439, keyword: 'dentro', label: 'Dentro', category: 'ubicacion', priority: 2 },
        { id: 5475, keyword: 'fuera', label: 'Fuera', category: 'ubicacion', priority: 2 },
        { id: 30383, keyword: 'cerca', label: 'Cerca', category: 'ubicacion', priority: 2 },
        { id: 30385, keyword: 'lejos', label: 'Lejos', category: 'ubicacion', priority: 2 }
    ],

    // =============================================
    // CATEGORÍAS TEMÁTICAS
    // =============================================

    necesidades: [
        // Prioridad 2 - Necesidades básicas
        { id: 6456, keyword: 'comer', label: 'Comer', category: 'necesidades', priority: 2 },
        { id: 6061, keyword: 'beber', label: 'Beber', category: 'necesidades', priority: 2 },
        { id: 5921, keyword: 'baño', label: 'Baño', category: 'necesidades', priority: 2 },
        { id: 6479, keyword: 'dormir', label: 'Dormir', category: 'necesidades', priority: 2 },
        { id: 32464, keyword: 'agua', label: 'Agua', category: 'necesidades', priority: 2 },
        { id: 2445, keyword: 'leche', label: 'Leche', category: 'necesidades', priority: 2 },
        { id: 2494, keyword: 'pan', label: 'Pan', category: 'necesidades', priority: 2 },
        { id: 2367, keyword: 'dolor', label: 'Dolor', category: 'necesidades', priority: 2 },
        { id: 35537, keyword: 'cansado', label: 'Cansado', category: 'necesidades', priority: 2 }
    ],

    acciones: [
        // Prioridad 3 - Acciones diarias
        { id: 23392, keyword: 'jugar', label: 'Jugar', category: 'acciones', priority: 3 },
        { id: 29951, keyword: 'pasear', label: 'Pasear', category: 'acciones', priority: 3 },
        { id: 6465, keyword: 'correr', label: 'Correr', category: 'acciones', priority: 3 },
        { id: 39052, keyword: 'saltar', label: 'Saltar', category: 'acciones', priority: 3 },
        { id: 7141, keyword: 'leer', label: 'Leer', category: 'acciones', priority: 3 },
        { id: 2380, keyword: 'escribir', label: 'Escribir', category: 'acciones', priority: 3 },
        { id: 6564, keyword: 'ver', label: 'Ver', category: 'acciones', priority: 3 },
        { id: 6572, keyword: 'escuchar', label: 'Escuchar', category: 'acciones', priority: 3 },
        { id: 6517, keyword: 'hablar', label: 'Hablar', category: 'acciones', priority: 3 },
        { id: 6960, keyword: 'cantar', label: 'Cantar', category: 'acciones', priority: 3 },
        { id: 6052, keyword: 'bailar', label: 'Bailar', category: 'acciones', priority: 3 }
    ],

    emociones: [
        // Prioridad 2 - Emociones
        { id: 35547, keyword: 'contento', label: 'Contento', category: 'emociones', priority: 2 },
        { id: 35545, keyword: 'triste', label: 'Triste', category: 'emociones', priority: 2 },
        { id: 35539, keyword: 'enfadado', label: 'Enfadado', category: 'emociones', priority: 2 },
        { id: 35535, keyword: 'asustado', label: 'Asustado', category: 'emociones', priority: 2 },
        { id: 35529, keyword: 'sorprendido', label: 'Sorprendido', category: 'emociones', priority: 2 },
        { id: 7040, keyword: 'enfermo', label: 'Enfermo', category: 'emociones', priority: 2 },
        { id: 39090, keyword: 'emocionado', label: 'Emocionado', category: 'emociones', priority: 2 },
        { id: 38050, keyword: 'tranquilo', label: 'Tranquilo', category: 'emociones', priority: 2 }
    ],

    personas: [
        // Prioridad 2 - Personas importantes
        { id: 2458, keyword: 'mamá', label: 'Mamá', category: 'personas', priority: 2 },
        { id: 31146, keyword: 'papá', label: 'Papá', category: 'personas', priority: 2 },
        { id: 7176, keyword: 'niño', label: 'Niño', category: 'personas', priority: 2 },
        { id: 27509, keyword: 'niña', label: 'Niña', category: 'personas', priority: 2 },
        { id: 25790, keyword: 'amigo', label: 'Amigo', category: 'personas', priority: 2 },
        { id: 6556, keyword: 'maestro', label: 'Maestro', category: 'personas', priority: 2 },
        { id: 6561, keyword: 'doctor', label: 'Doctor', category: 'personas', priority: 2 },
        { id: 2392, keyword: 'familia', label: 'Familia', category: 'personas', priority: 2 }
    ],

    lugares: [
        // Prioridad 3 - Lugares
        { id: 6964, keyword: 'casa', label: 'Casa', category: 'lugares', priority: 3 },
        { id: 32446, keyword: 'escuela', label: 'Escuela', category: 'lugares', priority: 3 },
        { id: 2859, keyword: 'parque', label: 'Parque', category: 'lugares', priority: 3 },
        { id: 35695, keyword: 'tienda', label: 'Tienda', category: 'lugares', priority: 3 },
        { id: 6523, keyword: 'hospital', label: 'Hospital', category: 'lugares', priority: 3 },
        { id: 30518, keyword: 'playa', label: 'Playa', category: 'lugares', priority: 3 },
        { id: 30387, keyword: 'cine', label: 'Cine', category: 'lugares', priority: 3 },
        { id: 25900, keyword: 'cama', label: 'Cama', category: 'lugares', priority: 3 }
    ],

    objetos: [
        // Prioridad 3 - Objetos
        { id: 3241, keyword: 'pelota', label: 'Pelota', category: 'objetos', priority: 3 },
        { id: 25191, keyword: 'libro', label: 'Libro', category: 'objetos', priority: 3 },
        { id: 26238, keyword: 'muñeca', label: 'Muñeca', category: 'objetos', priority: 3 },
        { id: 2339, keyword: 'coche', label: 'Coche', category: 'objetos', priority: 3 },
        { id: 21399, keyword: 'tren', label: 'Tren', category: 'objetos', priority: 3 },
        { id: 2264, keyword: 'avión', label: 'Avión', category: 'objetos', priority: 3 },
        { id: 6935, keyword: 'bicicleta', label: 'Bicicleta', category: 'objetos', priority: 3 },
        { id: 7190, keyword: 'ordenador', label: 'Ordenador', category: 'objetos', priority: 3 },
        { id: 26479, keyword: 'teléfono', label: 'Teléfono', category: 'objetos', priority: 3 },
        { id: 25498, keyword: 'televisión', label: 'Televisión', category: 'objetos', priority: 3 }
    ],

    comida: [
        // Prioridad 3 - Comida
        { id: 2462, keyword: 'manzana', label: 'Manzana', category: 'comida', priority: 3 },
        { id: 28339, keyword: 'fruta', label: 'Fruta', category: 'comida', priority: 3 },
        { id: 2316, keyword: 'carne', label: 'Carne', category: 'comida', priority: 3 },
        { id: 2519, keyword: 'pescado', label: 'Pescado', category: 'comida', priority: 3 },
        { id: 6911, keyword: 'arroz', label: 'Arroz', category: 'comida', priority: 3 },
        { id: 2455, keyword: 'pasta', label: 'Pasta', category: 'comida', priority: 3 },
        { id: 2377, keyword: 'ensalada', label: 'Ensalada', category: 'comida', priority: 3 },
        { id: 2541, keyword: 'queso', label: 'Queso', category: 'comida', priority: 3 },
        { id: 2427, keyword: 'huevo', label: 'Huevo', category: 'comida', priority: 3 },
        { id: 8312, keyword: 'galleta', label: 'Galleta', category: 'comida', priority: 3 }
    ],

    cuerpo: [
        // Prioridad 3 - Partes del cuerpo
        { id: 2928, keyword: 'mano', label: 'Mano', category: 'cuerpo', priority: 3 },
        { id: 2673, keyword: 'cabeza', label: 'Cabeza', category: 'cuerpo', priority: 3 },
        { id: 2663, keyword: 'boca', label: 'Boca', category: 'cuerpo', priority: 3 },
        { id: 6573, keyword: 'ojo', label: 'Ojo', category: 'cuerpo', priority: 3 },
        { id: 2871, keyword: 'oreja', label: 'Oreja', category: 'cuerpo', priority: 3 },
        { id: 25327, keyword: 'pie', label: 'Pie', category: 'cuerpo', priority: 3 },
        { id: 10267, keyword: 'diente', label: 'Diente', category: 'cuerpo', priority: 3 },
        { id: 2851, keyword: 'pelo', label: 'Pelo', category: 'cuerpo', priority: 3 }
    ],

    ropa: [
        // Prioridad 3 - Ropa
        { id: 32923, keyword: 'zapato', label: 'Zapato', category: 'ropa', priority: 3 },
        { id: 2565, keyword: 'pantalón', label: 'Pantalón', category: 'ropa', priority: 3 },
        { id: 2309, keyword: 'camiseta', label: 'Camiseta', category: 'ropa', priority: 3 },
        { id: 8122, keyword: 'abrigo', label: 'Abrigo', category: 'ropa', priority: 3 }
    ]
};

// Función para obtener todos los pictogramas con URLs de imágenes
function getAllPictogramsWithImages() {
    const IMAGE_BASE = 'https://static.arasaac.org/pictograms';
    const IMAGE_SIZE = 300;

    const allPictos = [];

    for (const category in PICTOGRAMS_DATA) {
        const pictos = PICTOGRAMS_DATA[category].map(picto => ({
            ...picto,
            image: `${IMAGE_BASE}/${picto.id}/${picto.id}_${IMAGE_SIZE}.png`,
            usageCount: 0,
            visible: true,
            hidden: false,
            customLabel: null,
            source: 'default'
        }));
        allPictos.push(...pictos);
    }

    return allPictos;
}

// Función para obtener pictogramas por categoría
function getPictogramsByCategory(categoryName) {
    const IMAGE_BASE = 'https://static.arasaac.org/pictograms';
    const IMAGE_SIZE = 300;

    const pictos = PICTOGRAMS_DATA[categoryName] || [];
    return pictos.map(picto => ({
        ...picto,
        image: `${IMAGE_BASE}/${picto.id}/${picto.id}_${IMAGE_SIZE}.png`,
        usageCount: 0
    }));
}

// Función para obtener pictogramas por prioridad
function getPictogramsByPriority(priority) {
    const allPictos = getAllPictogramsWithImages();
    return allPictos.filter(picto => picto.priority === priority);
}

// Exportar para usar en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PICTOGRAMS_DATA,
        getAllPictogramsWithImages,
        getPictogramsByCategory,
        getPictogramsByPriority
    };
}
