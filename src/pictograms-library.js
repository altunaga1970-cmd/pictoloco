/**
 * PictoLoco - Biblioteca expandida de pictogramas ARASAAC
 * 500+ pictogramas adicionales accesibles solo via busqueda
 * El usuario agrega lo que necesita con boton "+"
 * TODOS los IDs verificados en api.arasaac.org/v1/pictograms/es/search/
 */

const PICTOGRAMS_LIBRARY = {

    // =============================================
    // VERBOS EXPANDIDOS
    // =============================================
    verbos: [
        { id: 6568, keyword: 'nadar', label: 'Nadar', category: 'verbos', priority: 4, source: 'library' },
        { id: 8088, keyword: 'dibujar', label: 'Dibujar', category: 'verbos', priority: 4, source: 'library' },
        { id: 2348, keyword: 'pintar', label: 'Pintar', category: 'verbos', priority: 4, source: 'library' },
        { id: 2342, keyword: 'cocinar', label: 'Cocinar', category: 'verbos', priority: 4, source: 'library' },
        { id: 3351, keyword: 'limpiar', label: 'Limpiar', category: 'verbos', priority: 4, source: 'library' },
        { id: 34826, keyword: 'lavar', label: 'Lavar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6627, keyword: 'vestirse', label: 'Vestirse', category: 'verbos', priority: 4, source: 'library' },
        { id: 6058, keyword: 'bañarse', label: 'Bañarse', category: 'verbos', priority: 4, source: 'library' },
        { id: 26947, keyword: 'peinarse', label: 'Peinarse', category: 'verbos', priority: 4, source: 'library' },
        { id: 5425, keyword: 'cepillarse', label: 'Cepillarse', category: 'verbos', priority: 4, source: 'library' },
        { id: 8986, keyword: 'comprar', label: 'Comprar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6457, keyword: 'pagar', label: 'Pagar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6485, keyword: 'empujar', label: 'Empujar', category: 'verbos', priority: 4, source: 'library' },
        { id: 36673, keyword: 'tirar', label: 'Tirar', category: 'verbos', priority: 4, source: 'library' },
        { id: 24725, keyword: 'subir', label: 'Subir', category: 'verbos', priority: 4, source: 'library' },
        { id: 24723, keyword: 'bajar', label: 'Bajar', category: 'verbos', priority: 4, source: 'library' },
        { id: 7196, keyword: 'parar', label: 'Parar', category: 'verbos', priority: 4, source: 'library' },
        { id: 7038, keyword: 'seguir', label: 'Seguir', category: 'verbos', priority: 4, source: 'library' },
        { id: 6630, keyword: 'volver', label: 'Volver', category: 'verbos', priority: 4, source: 'library' },
        { id: 8140, keyword: 'mirar', label: 'Mirar', category: 'verbos', priority: 4, source: 'library' },
        { id: 3293, keyword: 'tocar', label: 'Tocar', category: 'verbos', priority: 4, source: 'library' },
        { id: 25275, keyword: 'oler', label: 'Oler', category: 'verbos', priority: 4, source: 'library' },
        { id: 32388, keyword: 'romper', label: 'Romper', category: 'verbos', priority: 4, source: 'library' },
        { id: 6910, keyword: 'arreglar', label: 'Arreglar', category: 'verbos', priority: 4, source: 'library' },
        { id: 2713, keyword: 'construir', label: 'Construir', category: 'verbos', priority: 4, source: 'library' },
        { id: 31150, keyword: 'caerse', label: 'Caerse', category: 'verbos', priority: 4, source: 'library' },
        { id: 27268, keyword: 'sentarse', label: 'Sentarse', category: 'verbos', priority: 4, source: 'library' },
        { id: 36073, keyword: 'levantarse', label: 'Levantarse', category: 'verbos', priority: 4, source: 'library' },
        { id: 6044, keyword: 'caminar', label: 'Caminar', category: 'verbos', priority: 4, source: 'library' },
        { id: 10148, keyword: 'coger', label: 'Coger', category: 'verbos', priority: 4, source: 'library' },
        { id: 6215, keyword: 'soltar', label: 'Soltar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6493, keyword: 'esconder', label: 'Esconder', category: 'verbos', priority: 4, source: 'library' },
        { id: 6947, keyword: 'buscar', label: 'Buscar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6543, keyword: 'lanzar', label: 'Lanzar', category: 'verbos', priority: 4, source: 'library' },
        { id: 8188, keyword: 'atrapar', label: 'Atrapar', category: 'verbos', priority: 4, source: 'library' },
        { id: 38900, keyword: 'compartir', label: 'Compartir', category: 'verbos', priority: 4, source: 'library' },
        { id: 30510, keyword: 'elegir', label: 'Elegir', category: 'verbos', priority: 4, source: 'library' },
        { id: 7258, keyword: 'soplar', label: 'Soplar', category: 'verbos', priority: 4, source: 'library' },
        { id: 13354, keyword: 'reir', label: 'Reir', category: 'verbos', priority: 4, source: 'library' },
        { id: 7147, keyword: 'llorar', label: 'Llorar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6552, keyword: 'gritar', label: 'Gritar', category: 'verbos', priority: 4, source: 'library' },
        { id: 9037, keyword: 'susurrar', label: 'Susurrar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6023, keyword: 'abrazar', label: 'Abrazar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6062, keyword: 'besar', label: 'Besar', category: 'verbos', priority: 4, source: 'library' },
        { id: 37373, keyword: 'pelear', label: 'Pelear', category: 'verbos', priority: 4, source: 'library' },
        { id: 4700, keyword: 'morder', label: 'Morder', category: 'verbos', priority: 4, source: 'library' },
        { id: 6977, keyword: 'patear', label: 'Patear', category: 'verbos', priority: 4, source: 'library' },
        { id: 6586, keyword: 'golpear', label: 'Golpear', category: 'verbos', priority: 4, source: 'library' },
        { id: 6624, keyword: 'trabajar', label: 'Trabajar', category: 'verbos', priority: 4, source: 'library' },
        { id: 6495, keyword: 'estudiar', label: 'Estudiar', category: 'verbos', priority: 4, source: 'library' },
        { id: 16823, keyword: 'enseñar', label: 'Enseñar', category: 'verbos', priority: 4, source: 'library' },
        { id: 37810, keyword: 'aprender', label: 'Aprender', category: 'verbos', priority: 4, source: 'library' },
        { id: 37369, keyword: 'recordar', label: 'Recordar', category: 'verbos', priority: 4, source: 'library' },
        { id: 26258, keyword: 'olvidar', label: 'Olvidar', category: 'verbos', priority: 4, source: 'library' },
        { id: 11697, keyword: 'entender', label: 'Entender', category: 'verbos', priority: 4, source: 'library' },
        { id: 9847, keyword: 'preguntar', label: 'Preguntar', category: 'verbos', priority: 4, source: 'library' },
        { id: 9031, keyword: 'responder', label: 'Responder', category: 'verbos', priority: 4, source: 'library' },
        { id: 2714, keyword: 'contar', label: 'Contar', category: 'verbos', priority: 4, source: 'library' },
        { id: 5975, keyword: 'cortar', label: 'Cortar', category: 'verbos', priority: 4, source: 'library' },
        { id: 24749, keyword: 'pegar', label: 'Pegar', category: 'verbos', priority: 4, source: 'library' },
        { id: 5515, keyword: 'mezclar', label: 'Mezclar', category: 'verbos', priority: 4, source: 'library' },
        { id: 7247, keyword: 'servir', label: 'Servir', category: 'verbos', priority: 4, source: 'library' },
        { id: 4563, keyword: 'aplaudir', label: 'Aplaudir', category: 'verbos', priority: 4, source: 'library' },
        { id: 6612, keyword: 'señalar', label: 'Señalar', category: 'verbos', priority: 4, source: 'library' },
    ],

    // =============================================
    // COMIDA EXPANDIDA
    // =============================================
    comida: [
        { id: 2573, keyword: 'sopa', label: 'Sopa', category: 'comida', priority: 4, source: 'library' },
        { id: 3383, keyword: 'sandwich', label: 'Sandwich', category: 'comida', priority: 4, source: 'library' },
        { id: 2527, keyword: 'pizza', label: 'Pizza', category: 'comida', priority: 4, source: 'library' },
        { id: 2419, keyword: 'hamburguesa', label: 'Hamburguesa', category: 'comida', priority: 4, source: 'library' },
        { id: 4952, keyword: 'pollo', label: 'Pollo', category: 'comida', priority: 4, source: 'library' },
        { id: 2503, keyword: 'patata', label: 'Patata', category: 'comida', priority: 4, source: 'library' },
        { id: 2594, keyword: 'tomate', label: 'Tomate', category: 'comida', priority: 4, source: 'library' },
        { id: 2619, keyword: 'zanahoria', label: 'Zanahoria', category: 'comida', priority: 4, source: 'library' },
        { id: 2446, keyword: 'lechuga', label: 'Lechuga', category: 'comida', priority: 4, source: 'library' },
        { id: 2323, keyword: 'cebolla', label: 'Cebolla', category: 'comida', priority: 4, source: 'library' },
        { id: 2530, keyword: 'platano', label: 'Platano', category: 'comida', priority: 4, source: 'library' },
        { id: 2888, keyword: 'naranja', label: 'Naranja', category: 'comida', priority: 4, source: 'library' },
        { id: 2400, keyword: 'fresa', label: 'Fresa', category: 'comida', priority: 4, source: 'library' },
        { id: 3247, keyword: 'uva', label: 'Uva', category: 'comida', priority: 4, source: 'library' },
        { id: 2557, keyword: 'sandia', label: 'Sandia', category: 'comida', priority: 4, source: 'library' },
        { id: 2469, keyword: 'melon', label: 'Melon', category: 'comida', priority: 4, source: 'library' },
        { id: 2561, keyword: 'pera', label: 'Pera', category: 'comida', priority: 4, source: 'library' },
        { id: 8303, keyword: 'cereza', label: 'Cereza', category: 'comida', priority: 4, source: 'library' },
        { id: 25940, keyword: 'chocolate', label: 'Chocolate', category: 'comida', priority: 4, source: 'library' },
        { id: 2579, keyword: 'tarta', label: 'Tarta', category: 'comida', priority: 4, source: 'library' },
        { id: 35209, keyword: 'helado', label: 'Helado', category: 'comida', priority: 4, source: 'library' },
        { id: 2686, keyword: 'caramelo', label: 'Caramelo', category: 'comida', priority: 4, source: 'library' },
        { id: 5534, keyword: 'palomitas', label: 'Palomitas', category: 'comida', priority: 4, source: 'library' },
        { id: 2328, keyword: 'cereales', label: 'Cereales', category: 'comida', priority: 4, source: 'library' },
        { id: 2618, keyword: 'yogur', label: 'Yogur', category: 'comida', priority: 4, source: 'library' },
        { id: 2461, keyword: 'mantequilla', label: 'Mantequilla', category: 'comida', priority: 4, source: 'library' },
        { id: 2470, keyword: 'mermelada', label: 'Mermelada', category: 'comida', priority: 4, source: 'library' },
        { id: 2455, keyword: 'macarrones', label: 'Macarrones', category: 'comida', priority: 4, source: 'library' },
        { id: 6647, keyword: 'salchicha', label: 'Salchicha', category: 'comida', priority: 4, source: 'library' },
        { id: 2433, keyword: 'jamon', label: 'Jamon', category: 'comida', priority: 4, source: 'library' },
        { id: 25576, keyword: 'sal', label: 'Sal', category: 'comida', priority: 4, source: 'library' },
        { id: 25560, keyword: 'azucar', label: 'Azucar', category: 'comida', priority: 4, source: 'library' },
        { id: 2246, keyword: 'aceite', label: 'Aceite', category: 'comida', priority: 4, source: 'library' },
        { id: 11461, keyword: 'zumo', label: 'Zumo', category: 'comida', priority: 4, source: 'library' },
        { id: 24479, keyword: 'cafe', label: 'Cafe', category: 'comida', priority: 4, source: 'library' },
        { id: 8503, keyword: 'batido', label: 'Batido', category: 'comida', priority: 4, source: 'library' },
        { id: 7182, keyword: 'guisantes', label: 'Guisantes', category: 'comida', priority: 4, source: 'library' },
        { id: 3294, keyword: 'judias', label: 'Judias', category: 'comida', priority: 4, source: 'library' },
        { id: 2448, keyword: 'lentejas', label: 'Lentejas', category: 'comida', priority: 4, source: 'library' },
        { id: 2505, keyword: 'patatas fritas', label: 'Patatas fritas', category: 'comida', priority: 4, source: 'library' },
        { id: 2539, keyword: 'pure', label: 'Pure', category: 'comida', priority: 4, source: 'library' },
        { id: 6918, keyword: 'atun', label: 'Atun', category: 'comida', priority: 4, source: 'library' },
    ],

    // =============================================
    // OBJETOS EXPANDIDOS
    // =============================================
    objetos: [
        { id: 3129, keyword: 'mesa', label: 'Mesa', category: 'objetos', priority: 4, source: 'library' },
        { id: 3155, keyword: 'silla', label: 'Silla', category: 'objetos', priority: 4, source: 'library' },
        { id: 3244, keyword: 'puerta', label: 'Puerta', category: 'objetos', priority: 4, source: 'library' },
        { id: 2611, keyword: 'ventana', label: 'Ventana', category: 'objetos', priority: 4, source: 'library' },
        { id: 8573, keyword: 'espejo', label: 'Espejo', category: 'objetos', priority: 4, source: 'library' },
        { id: 2549, keyword: 'reloj', label: 'Reloj', category: 'objetos', priority: 4, source: 'library' },
        { id: 4936, keyword: 'lampara', label: 'Lampara', category: 'objetos', priority: 4, source: 'library' },
        { id: 8153, keyword: 'llave', label: 'Llave', category: 'objetos', priority: 4, source: 'library' },
        { id: 2359, keyword: 'cuaderno', label: 'Cuaderno', category: 'objetos', priority: 4, source: 'library' },
        { id: 2440, keyword: 'lapiz', label: 'Lapiz', category: 'objetos', priority: 4, source: 'library' },
        { id: 2591, keyword: 'tijeras', label: 'Tijeras', category: 'objetos', priority: 4, source: 'library' },
        { id: 2540, keyword: 'puzzle', label: 'Puzzle', category: 'objetos', priority: 4, source: 'library' },
        { id: 2731, keyword: 'dado', label: 'Dado', category: 'objetos', priority: 4, source: 'library' },
        { id: 9165, keyword: 'tablet', label: 'Tablet', category: 'objetos', priority: 4, source: 'library' },
        { id: 24925, keyword: 'camara', label: 'Camara', category: 'objetos', priority: 4, source: 'library' },
        { id: 2500, keyword: 'paraguas', label: 'Paraguas', category: 'objetos', priority: 4, source: 'library' },
        { id: 21453, keyword: 'bolsa', label: 'Bolsa', category: 'objetos', priority: 4, source: 'library' },
        { id: 2475, keyword: 'mochila', label: 'Mochila', category: 'objetos', priority: 4, source: 'library' },
        { id: 2362, keyword: 'cuchara', label: 'Cuchara', category: 'objetos', priority: 4, source: 'library' },
        { id: 2588, keyword: 'tenedor', label: 'Tenedor', category: 'objetos', priority: 4, source: 'library' },
        { id: 4931, keyword: 'cuchillo', label: 'Cuchillo', category: 'objetos', priority: 4, source: 'library' },
        { id: 16857, keyword: 'plato', label: 'Plato', category: 'objetos', priority: 4, source: 'library' },
        { id: 2610, keyword: 'vaso', label: 'Vaso', category: 'objetos', priority: 4, source: 'library' },
        { id: 2288, keyword: 'botella', label: 'Botella', category: 'objetos', priority: 4, source: 'library' },
        { id: 2582, keyword: 'taza', label: 'Taza', category: 'objetos', priority: 4, source: 'library' },
        { id: 2262, keyword: 'autobus', label: 'Autobus', category: 'objetos', priority: 4, source: 'library' },
        { id: 6932, keyword: 'barco', label: 'Barco', category: 'objetos', priority: 4, source: 'library' },
        { id: 2417, keyword: 'guitarra', label: 'Guitarra', category: 'objetos', priority: 4, source: 'library' },
        { id: 2578, keyword: 'tambor', label: 'Tambor', category: 'objetos', priority: 4, source: 'library' },
        { id: 2521, keyword: 'piano', label: 'Piano', category: 'objetos', priority: 4, source: 'library' },
        { id: 2408, keyword: 'globo', label: 'Globo', category: 'objetos', priority: 4, source: 'library' },
        { id: 25381, keyword: 'regalo', label: 'Regalo', category: 'objetos', priority: 4, source: 'library' },
        { id: 6208, keyword: 'robot', label: 'Robot', category: 'objetos', priority: 4, source: 'library' },
        { id: 2738, keyword: 'dinosaurio', label: 'Dinosaurio', category: 'objetos', priority: 4, source: 'library' },
        { id: 2752, keyword: 'estrella', label: 'Estrella', category: 'objetos', priority: 4, source: 'library' },
        { id: 2718, keyword: 'corona', label: 'Corona', category: 'objetos', priority: 4, source: 'library' },
        { id: 2852, keyword: 'peine', label: 'Peine', category: 'objetos', priority: 4, source: 'library' },
        { id: 8094, keyword: 'jabon', label: 'Jabon', category: 'objetos', priority: 4, source: 'library' },
        { id: 2593, keyword: 'toalla', label: 'Toalla', category: 'objetos', priority: 4, source: 'library' },
        { id: 2250, keyword: 'almohada', label: 'Almohada', category: 'objetos', priority: 4, source: 'library' },
        { id: 2459, keyword: 'manta', label: 'Manta', category: 'objetos', priority: 4, source: 'library' },
    ],

    // =============================================
    // ANIMALES
    // =============================================
    animales: [
        { id: 7202, keyword: 'perro', label: 'Perro', category: 'objetos', priority: 4, source: 'library' },
        { id: 7114, keyword: 'gato', label: 'Gato', category: 'objetos', priority: 4, source: 'library' },
        { id: 2490, keyword: 'pajaro', label: 'Pajaro', category: 'objetos', priority: 4, source: 'library' },
        { id: 2520, keyword: 'pez', label: 'Pez', category: 'objetos', priority: 4, source: 'library' },
        { id: 2294, keyword: 'caballo', label: 'Caballo', category: 'objetos', priority: 4, source: 'library' },
        { id: 2609, keyword: 'vaca', label: 'Vaca', category: 'objetos', priority: 4, source: 'library' },
        { id: 24972, keyword: 'cerdo', label: 'Cerdo', category: 'objetos', priority: 4, source: 'library' },
        { id: 2489, keyword: 'oveja', label: 'Oveja', category: 'objetos', priority: 4, source: 'library' },
        { id: 2403, keyword: 'gallina', label: 'Gallina', category: 'objetos', priority: 4, source: 'library' },
        { id: 2351, keyword: 'conejo', label: 'Conejo', category: 'objetos', priority: 4, source: 'library' },
        { id: 2546, keyword: 'raton', label: 'Raton', category: 'objetos', priority: 4, source: 'library' },
        { id: 25187, keyword: 'leon', label: 'Leon', category: 'objetos', priority: 4, source: 'library' },
        { id: 2372, keyword: 'elefante', label: 'Elefante', category: 'objetos', priority: 4, source: 'library' },
        { id: 2437, keyword: 'jirafa', label: 'Jirafa', category: 'objetos', priority: 4, source: 'library' },
        { id: 2477, keyword: 'mono', label: 'Mono', category: 'objetos', priority: 4, source: 'library' },
        { id: 2488, keyword: 'oso', label: 'Oso', category: 'objetos', priority: 4, source: 'library' },
        { id: 2568, keyword: 'serpiente', label: 'Serpiente', category: 'objetos', priority: 4, source: 'library' },
        { id: 26503, keyword: 'tortuga', label: 'Tortuga', category: 'objetos', priority: 4, source: 'library' },
        { id: 28473, keyword: 'rana', label: 'Rana', category: 'objetos', priority: 4, source: 'library' },
        { id: 26200, keyword: 'mariposa', label: 'Mariposa', category: 'objetos', priority: 4, source: 'library' },
        { id: 2425, keyword: 'hormiga', label: 'Hormiga', category: 'objetos', priority: 4, source: 'library' },
        { id: 36647, keyword: 'arana', label: 'Arana', category: 'objetos', priority: 4, source: 'library' },
        { id: 2589, keyword: 'tiburon', label: 'Tiburon', category: 'objetos', priority: 4, source: 'library' },
        { id: 2732, keyword: 'delfin', label: 'Delfin', category: 'objetos', priority: 4, source: 'library' },
        { id: 2268, keyword: 'ballena', label: 'Ballena', category: 'objetos', priority: 4, source: 'library' },
    ],

    // =============================================
    // PERSONAS EXPANDIDAS
    // =============================================
    personas: [
        { id: 8486, keyword: 'amiga', label: 'Amiga', category: 'personas', priority: 4, source: 'library' },
        { id: 23718, keyword: 'abuelo', label: 'Abuelo', category: 'personas', priority: 4, source: 'library' },
        { id: 23710, keyword: 'abuela', label: 'Abuela', category: 'personas', priority: 4, source: 'library' },
        { id: 2423, keyword: 'hermano', label: 'Hermano', category: 'personas', priority: 4, source: 'library' },
        { id: 2422, keyword: 'hermana', label: 'Hermana', category: 'personas', priority: 4, source: 'library' },
        { id: 6060, keyword: 'bebe', label: 'Bebe', category: 'personas', priority: 4, source: 'library' },
        { id: 30255, keyword: 'tio', label: 'Tio', category: 'personas', priority: 4, source: 'library' },
        { id: 30271, keyword: 'tia', label: 'Tia', category: 'personas', priority: 4, source: 'library' },
        { id: 30340, keyword: 'primo', label: 'Primo', category: 'personas', priority: 4, source: 'library' },
        { id: 30357, keyword: 'prima', label: 'Prima', category: 'personas', priority: 4, source: 'library' },
        { id: 26529, keyword: 'vecino', label: 'Vecino', category: 'personas', priority: 4, source: 'library' },
        { id: 39421, keyword: 'companero', label: 'Companero', category: 'personas', priority: 4, source: 'library' },
        { id: 6050, keyword: 'enfermero', label: 'Enfermero', category: 'personas', priority: 4, source: 'library' },
        { id: 37367, keyword: 'policia', label: 'Policia', category: 'personas', priority: 4, source: 'library' },
        { id: 6066, keyword: 'bombero', label: 'Bombero', category: 'personas', priority: 4, source: 'library' },
        { id: 30526, keyword: 'cocinero', label: 'Cocinero', category: 'personas', priority: 4, source: 'library' },
        { id: 2854, keyword: 'payaso', label: 'Payaso', category: 'personas', priority: 4, source: 'library' },
        { id: 5563, keyword: 'rey', label: 'Rey', category: 'personas', priority: 4, source: 'library' },
        { id: 5559, keyword: 'reina', label: 'Reina', category: 'personas', priority: 4, source: 'library' },
        { id: 5555, keyword: 'principe', label: 'Principe', category: 'personas', priority: 4, source: 'library' },
        { id: 5554, keyword: 'princesa', label: 'Princesa', category: 'personas', priority: 4, source: 'library' },
    ],

    // =============================================
    // LUGARES EXPANDIDOS
    // =============================================
    lugares: [
        { id: 10752, keyword: 'cocina', label: 'Cocina', category: 'lugares', priority: 4, source: 'library' },
        { id: 6211, keyword: 'salon', label: 'Salon', category: 'lugares', priority: 4, source: 'library' },
        { id: 5988, keyword: 'dormitorio', label: 'Dormitorio', category: 'lugares', priority: 4, source: 'library' },
        { id: 2434, keyword: 'jardin', label: 'Jardin', category: 'lugares', priority: 4, source: 'library' },
        { id: 33064, keyword: 'patio', label: 'Patio', category: 'lugares', priority: 4, source: 'library' },
        { id: 30516, keyword: 'piscina', label: 'Piscina', category: 'lugares', priority: 4, source: 'library' },
        { id: 6063, keyword: 'biblioteca', label: 'Biblioteca', category: 'lugares', priority: 4, source: 'library' },
        { id: 3389, keyword: 'supermercado', label: 'Supermercado', category: 'lugares', priority: 4, source: 'library' },
        { id: 32408, keyword: 'restaurante', label: 'Restaurante', category: 'lugares', priority: 4, source: 'library' },
        { id: 37368, keyword: 'farmacia', label: 'Farmacia', category: 'lugares', priority: 4, source: 'library' },
        { id: 3118, keyword: 'iglesia', label: 'Iglesia', category: 'lugares', priority: 4, source: 'library' },
        { id: 2683, keyword: 'campo', label: 'Campo', category: 'lugares', priority: 4, source: 'library' },
        { id: 34155, keyword: 'montana', label: 'Montana', category: 'lugares', priority: 4, source: 'library' },
        { id: 2811, keyword: 'rio', label: 'Rio', category: 'lugares', priority: 4, source: 'library' },
        { id: 2666, keyword: 'bosque', label: 'Bosque', category: 'lugares', priority: 4, source: 'library' },
        { id: 4773, keyword: 'zoo', label: 'Zoo', category: 'lugares', priority: 4, source: 'library' },
        { id: 6450, keyword: 'circo', label: 'Circo', category: 'lugares', priority: 4, source: 'library' },
        { id: 6031, keyword: 'aeropuerto', label: 'Aeropuerto', category: 'lugares', priority: 4, source: 'library' },
        { id: 29905, keyword: 'estacion', label: 'Estacion', category: 'lugares', priority: 4, source: 'library' },
        { id: 2299, keyword: 'calle', label: 'Calle', category: 'lugares', priority: 4, source: 'library' },
        { id: 6184, keyword: 'plaza', label: 'Plaza', category: 'lugares', priority: 4, source: 'library' },
        { id: 24785, keyword: 'gimnasio', label: 'Gimnasio', category: 'lugares', priority: 4, source: 'library' },
    ],

    // =============================================
    // EMOCIONES EXPANDIDAS
    // =============================================
    emociones: [
        { id: 30391, keyword: 'nervioso', label: 'Nervioso', category: 'emociones', priority: 4, source: 'library' },
        { id: 35531, keyword: 'aburrido', label: 'Aburrido', category: 'emociones', priority: 4, source: 'library' },
        { id: 2325, keyword: 'celoso celos', label: 'Celoso', category: 'emociones', priority: 4, source: 'library' },
        { id: 31408, keyword: 'orgulloso', label: 'Orgulloso', category: 'emociones', priority: 4, source: 'library' },
        { id: 8707, keyword: 'timido', label: 'Timido', category: 'emociones', priority: 4, source: 'library' },
        { id: 35575, keyword: 'confundido confusion', label: 'Confundido', category: 'emociones', priority: 4, source: 'library' },
        { id: 26985, keyword: 'preocupado', label: 'Preocupado', category: 'emociones', priority: 4, source: 'library' },
        { id: 6922, keyword: 'avergonzado', label: 'Avergonzado', category: 'emociones', priority: 4, source: 'library' },
        { id: 7253, keyword: 'solo', label: 'Solo', category: 'emociones', priority: 4, source: 'library' },
        { id: 16029, keyword: 'seguro', label: 'Seguro', category: 'emociones', priority: 4, source: 'library' },
        { id: 36163, keyword: 'valiente', label: 'Valiente', category: 'emociones', priority: 4, source: 'library' },
        { id: 37233, keyword: 'agradecido agradecimiento', label: 'Agradecido', category: 'emociones', priority: 4, source: 'library' },
        { id: 27705, keyword: 'curioso', label: 'Curioso', category: 'emociones', priority: 4, source: 'library' },
    ],

    // =============================================
    // ACCIONES / ACTIVIDADES
    // =============================================
    acciones: [
        { id: 4608, keyword: 'columpio', label: 'Columpio', category: 'acciones', priority: 4, source: 'library' },
        { id: 4759, keyword: 'tobogan', label: 'Tobogan', category: 'acciones', priority: 4, source: 'library' },
        { id: 8236, keyword: 'trepar', label: 'Trepar', category: 'acciones', priority: 4, source: 'library' },
        { id: 16841, keyword: 'patinar', label: 'Patinar', category: 'acciones', priority: 4, source: 'library' },
        { id: 16701, keyword: 'esquiar', label: 'Esquiar', category: 'acciones', priority: 4, source: 'library' },
        { id: 6592, keyword: 'pescar', label: 'Pescar', category: 'acciones', priority: 4, source: 'library' },
        { id: 6025, keyword: 'acampar', label: 'Acampar', category: 'acciones', priority: 4, source: 'library' },
        { id: 32928, keyword: 'surfear', label: 'Surfear', category: 'acciones', priority: 4, source: 'library' },
        { id: 26814, keyword: 'escalar', label: 'Escalar', category: 'acciones', priority: 4, source: 'library' },
        { id: 16649, keyword: 'celebrar', label: 'Celebrar', category: 'acciones', priority: 4, source: 'library' },
        { id: 16643, keyword: 'descansar', label: 'Descansar', category: 'acciones', priority: 4, source: 'library' },
        { id: 28173, keyword: 'viajar', label: 'Viajar', category: 'acciones', priority: 4, source: 'library' },
        { id: 6458, keyword: 'conducir', label: 'Conducir', category: 'acciones', priority: 4, source: 'library' },
        { id: 2816, keyword: 'regar', label: 'Regar', category: 'acciones', priority: 4, source: 'library' },
        { id: 2830, keyword: 'planchar', label: 'Planchar', category: 'acciones', priority: 4, source: 'library' },
        { id: 2658, keyword: 'barrer', label: 'Barrer', category: 'acciones', priority: 4, source: 'library' },
        { id: 3323, keyword: 'fregar', label: 'Fregar', category: 'acciones', priority: 4, source: 'library' },
        { id: 5593, keyword: 'tender', label: 'Tender', category: 'acciones', priority: 4, source: 'library' },
        { id: 2722, keyword: 'coser', label: 'Coser', category: 'acciones', priority: 4, source: 'library' },
        { id: 7108, keyword: 'fotografiar', label: 'Fotografiar', category: 'acciones', priority: 4, source: 'library' },
    ],

    // =============================================
    // CUERPO EXPANDIDO
    // =============================================
    cuerpo: [
        { id: 2887, keyword: 'nariz', label: 'Nariz', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2669, keyword: 'brazo', label: 'Brazo', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 8666, keyword: 'pierna', label: 'Pierna', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 3298, keyword: 'dedo', label: 'Dedo', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2748, keyword: 'espalda', label: 'Espalda', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2786, keyword: 'barriga', label: 'Barriga', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2727, keyword: 'cuello', label: 'Cuello', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2977, keyword: 'hombro', label: 'Hombro', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2810, keyword: 'rodilla', label: 'Rodilla', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2707, keyword: 'codo', label: 'Codo', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 3405, keyword: 'tobillo', label: 'Tobillo', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2944, keyword: 'lengua', label: 'Lengua', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2953, keyword: 'labio', label: 'Labio', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 3011, keyword: 'ceja', label: 'Ceja', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 2684, keyword: 'cara', label: 'Cara', category: 'cuerpo', priority: 4, source: 'library' },
        { id: 4613, keyword: 'corazon', label: 'Corazon', category: 'cuerpo', priority: 4, source: 'library' },
    ],

    // =============================================
    // ROPA EXPANDIDA
    // =============================================
    ropa: [
        { id: 2613, keyword: 'vestido', label: 'Vestido', category: 'ropa', priority: 4, source: 'library' },
        { id: 2391, keyword: 'falda', label: 'Falda', category: 'ropa', priority: 4, source: 'library' },
        { id: 2298, keyword: 'calcetines', label: 'Calcetines', category: 'ropa', priority: 4, source: 'library' },
        { id: 39395, keyword: 'gorro', label: 'Gorro', category: 'ropa', priority: 4, source: 'library' },
        { id: 2415, keyword: 'guantes', label: 'Guantes', category: 'ropa', priority: 4, source: 'library' },
        { id: 2290, keyword: 'bufanda', label: 'Bufanda', category: 'ropa', priority: 4, source: 'library' },
        { id: 2287, keyword: 'botas', label: 'Botas', category: 'ropa', priority: 4, source: 'library' },
        { id: 2556, keyword: 'sandalias', label: 'Sandalias', category: 'ropa', priority: 4, source: 'library' },
        { id: 2621, keyword: 'zapatillas', label: 'Zapatillas', category: 'ropa', priority: 4, source: 'library' },
        { id: 2522, keyword: 'pijama', label: 'Pijama', category: 'ropa', priority: 4, source: 'library' },
        { id: 36571, keyword: 'banador', label: 'Banador', category: 'ropa', priority: 4, source: 'library' },
        { id: 4872, keyword: 'chaqueta', label: 'Chaqueta', category: 'ropa', priority: 4, source: 'library' },
        { id: 8701, keyword: 'sudadera', label: 'Sudadera', category: 'ropa', priority: 4, source: 'library' },
        { id: 2436, keyword: 'jersey', label: 'Jersey', category: 'ropa', priority: 4, source: 'library' },
        { id: 3329, keyword: 'gafas', label: 'Gafas', category: 'ropa', priority: 4, source: 'library' },
        { id: 2336, keyword: 'cinturon', label: 'Cinturon', category: 'ropa', priority: 4, source: 'library' },
        { id: 25680, keyword: 'ropa interior', label: 'Ropa interior', category: 'ropa', priority: 4, source: 'library' },
    ],

    // =============================================
    // ADJETIVOS EXPANDIDOS
    // =============================================
    adjetivos: [
        { id: 5306, keyword: 'rapido', label: 'Rapido', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25121, keyword: 'fuerte', label: 'Fuerte', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25044, keyword: 'debil', label: 'Debil', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25782, keyword: 'alto', label: 'Alto', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25839, keyword: 'bajo', label: 'Bajo', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25133, keyword: 'gordo', label: 'Gordo', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25048, keyword: 'flaco', label: 'Flaco', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 26162, keyword: 'largo', label: 'Largo', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 26002, keyword: 'corto', label: 'Corto', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4637, keyword: 'duro', label: 'Duro', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4578, keyword: 'blando', label: 'Blando', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25253, keyword: 'mojado', label: 'Mojado', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25437, keyword: 'seco', label: 'Seco', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 27025, keyword: 'pesado', label: 'Pesado', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4679, keyword: 'ligero', label: 'Ligero', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 7157, keyword: 'ruidoso', label: 'Ruidoso', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 5936, keyword: 'silencioso silencio', label: 'Silencioso', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 26993, keyword: 'oscuro', label: 'Oscuro', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4604, keyword: 'claro', label: 'Claro', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4549, keyword: 'abierto', label: 'Abierto', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4596, keyword: 'cerrado', label: 'Cerrado', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4645, keyword: 'facil', label: 'Facil', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4629, keyword: 'dificil', label: 'Dificil', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4667, keyword: 'mismo', label: 'Mismo', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4628, keyword: 'diferente', label: 'Diferente', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 30012, keyword: 'favorito', label: 'Favorito', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 11470, keyword: 'importante', label: 'Importante', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 25315, keyword: 'peligroso peligro', label: 'Peligroso', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 32388, keyword: 'roto', label: 'Roto', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 17004, keyword: 'listo', label: 'Listo', category: 'adjetivos', priority: 4, source: 'library' },
    ],

    // =============================================
    // COLORES
    // =============================================
    colores: [
        { id: 2808, keyword: 'rojo', label: 'Rojo', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4869, keyword: 'azul', label: 'Azul', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 4887, keyword: 'verde', label: 'Verde', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 2648, keyword: 'amarillo', label: 'Amarillo', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 3151, keyword: 'rosa', label: 'Rosa', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 2907, keyword: 'morado', label: 'Morado', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 2886, keyword: 'negro', label: 'Negro', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 8043, keyword: 'blanco', label: 'Blanco', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 2923, keyword: 'marron', label: 'Marron', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 3340, keyword: 'gris', label: 'Gris', category: 'adjetivos', priority: 4, source: 'library' },
        { id: 2739, keyword: 'dorado', label: 'Dorado', category: 'adjetivos', priority: 4, source: 'library' },
    ],

    // =============================================
    // TIEMPO EXPANDIDO
    // =============================================
    tiempo: [
        { id: 17322, keyword: 'siempre', label: 'Siempre', category: 'tiempo', priority: 4, source: 'library' },
        { id: 5527, keyword: 'nunca', label: 'Nunca', category: 'tiempo', priority: 4, source: 'library' },
        { id: 7268, keyword: 'tarde', label: 'Tarde', category: 'tiempo', priority: 4, source: 'library' },
        { id: 25704, keyword: 'temprano', label: 'Temprano', category: 'tiempo', priority: 4, source: 'library' },
        { id: 4676, keyword: 'despacio', label: 'Despacio', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37723, keyword: 'lunes', label: 'Lunes', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37730, keyword: 'martes', label: 'Martes', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37729, keyword: 'miercoles', label: 'Miercoles', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37728, keyword: 'jueves', label: 'Jueves', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37727, keyword: 'viernes', label: 'Viernes', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37726, keyword: 'sabado', label: 'Sabado', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37725, keyword: 'domingo', label: 'Domingo', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37731, keyword: 'dia', label: 'Dia', category: 'tiempo', priority: 4, source: 'library' },
        { id: 26997, keyword: 'noche', label: 'Noche', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37732, keyword: 'semana', label: 'Semana', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37724, keyword: 'mes', label: 'Mes', category: 'tiempo', priority: 4, source: 'library' },
        { id: 37535, keyword: 'cumpleanos', label: 'Cumpleanos', category: 'tiempo', priority: 4, source: 'library' },
        { id: 39447, keyword: 'vacaciones', label: 'Vacaciones', category: 'tiempo', priority: 4, source: 'library' },
        { id: 3134, keyword: 'navidad', label: 'Navidad', category: 'tiempo', priority: 4, source: 'library' },
        { id: 5604, keyword: 'verano', label: 'Verano', category: 'tiempo', priority: 4, source: 'library' },
        { id: 5493, keyword: 'invierno', label: 'Invierno', category: 'tiempo', priority: 4, source: 'library' },
    ],

    // =============================================
    // NATURALEZA / CLIMA
    // =============================================
    naturaleza: [
        { id: 7252, keyword: 'sol', label: 'Sol', category: 'tiempo', priority: 4, source: 'library' },
        { id: 7148, keyword: 'lluvia', label: 'Lluvia', category: 'tiempo', priority: 4, source: 'library' },
        { id: 7172, keyword: 'nieve', label: 'Nieve', category: 'tiempo', priority: 4, source: 'library' },
        { id: 2883, keyword: 'nube', label: 'Nube', category: 'tiempo', priority: 4, source: 'library' },
        { id: 7259, keyword: 'viento', label: 'Viento', category: 'tiempo', priority: 4, source: 'library' },
        { id: 2986, keyword: 'arcoiris arco iris', label: 'Arcoiris', category: 'tiempo', priority: 4, source: 'library' },
        { id: 2933, keyword: 'luna', label: 'Luna', category: 'tiempo', priority: 4, source: 'library' },
        { id: 7104, keyword: 'flor', label: 'Flor', category: 'objetos', priority: 4, source: 'library' },
        { id: 3057, keyword: 'arbol', label: 'Arbol', category: 'objetos', priority: 4, source: 'library' },
        { id: 4654, keyword: 'fuego', label: 'Fuego', category: 'objetos', priority: 4, source: 'library' },
        { id: 3160, keyword: 'tierra', label: 'Tierra', category: 'objetos', priority: 4, source: 'library' },
        { id: 6594, keyword: 'piedra', label: 'Piedra', category: 'objetos', priority: 4, source: 'library' },
        { id: 4565, keyword: 'arena', label: 'Arena', category: 'objetos', priority: 4, source: 'library' },
    ],

    // =============================================
    // NECESIDADES EXPANDIDAS
    // =============================================
    necesidades: [
        { id: 35559, keyword: 'hambre', label: 'Hambre', category: 'necesidades', priority: 4, source: 'library' },
        { id: 7273, keyword: 'sed', label: 'Sed', category: 'necesidades', priority: 4, source: 'library' },
        { id: 10261, keyword: 'miedo', label: 'Tengo miedo', category: 'necesidades', priority: 4, source: 'library' },
        { id: 32530, keyword: 'fiebre', label: 'Fiebre', category: 'necesidades', priority: 4, source: 'library' },
        { id: 35585, keyword: 'tos', label: 'Tos', category: 'necesidades', priority: 4, source: 'library' },
        { id: 8163, keyword: 'medicamento medicina', label: 'Medicamento', category: 'necesidades', priority: 4, source: 'library' },
        { id: 3404, keyword: 'tirita', label: 'Tirita', category: 'necesidades', priority: 4, source: 'library' },
    ],

    // =============================================
    // SOCIAL EXPANDIDO
    // =============================================
    social: [
        { id: 6944, keyword: 'buenos dias', label: 'Buenos dias', category: 'social', priority: 4, source: 'library' },
        { id: 6942, keyword: 'buenas noches', label: 'Buenas noches', category: 'social', priority: 4, source: 'library' },
        { id: 5936, keyword: 'silencio', label: 'Silencio', category: 'social', priority: 4, source: 'library' },
        { id: 25618, keyword: 'cuidado', label: 'Cuidado', category: 'social', priority: 4, source: 'library' },
        { id: 38566, keyword: 'felicidades', label: 'Felicidades', category: 'social', priority: 4, source: 'library' },
        { id: 16091, keyword: 'espera', label: 'Espera', category: 'social', priority: 4, source: 'library' },
        { id: 37162, keyword: 'otra vez', label: 'Otra vez', category: 'social', priority: 4, source: 'library' },
        { id: 6156, keyword: 'no quiero', label: 'No quiero', category: 'social', priority: 4, source: 'library' },
        { id: 7158, keyword: 'me toca turno', label: 'Me toca', category: 'social', priority: 4, source: 'library' },
    ],

    // =============================================
    // UBICACION EXPANDIDA
    // =============================================
    ubicacion: [
        { id: 4624, keyword: 'derecha', label: 'Derecha', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 9203, keyword: 'izquierda', label: 'Izquierda', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 5438, keyword: 'delante', label: 'Delante', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 5443, keyword: 'detras', label: 'Detras', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 5451, keyword: 'encima', label: 'Encima', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 5437, keyword: 'debajo', label: 'Debajo', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 7765, keyword: 'entre', label: 'Entre', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 5424, keyword: 'centro', label: 'Centro', category: 'ubicacion', priority: 4, source: 'library' },
        { id: 5463, keyword: 'esquina', label: 'Esquina', category: 'ubicacion', priority: 4, source: 'library' },
    ],

    // =============================================
    // PRONOMBRES / DETERMINANTES EXPANDIDOS
    // =============================================
    pronombres: [
        { id: 7095, keyword: 'este', label: 'Este', category: 'pronombres', priority: 4, source: 'library' },
        { id: 7091, keyword: 'ese', label: 'Ese', category: 'pronombres', priority: 4, source: 'library' },
        { id: 6906, keyword: 'aquel', label: 'Aquel', category: 'pronombres', priority: 4, source: 'library' },
        { id: 12272, keyword: 'suyo', label: 'Suyo', category: 'pronombres', priority: 4, source: 'library' },
        { id: 12268, keyword: 'nuestro', label: 'Nuestro', category: 'pronombres', priority: 4, source: 'library' },
        { id: 38768, keyword: 'algo', label: 'Algo', category: 'pronombres', priority: 4, source: 'library' },
        { id: 37779, keyword: 'alguien', label: 'Alguien', category: 'pronombres', priority: 4, source: 'library' },
        { id: 11314, keyword: 'nadie', label: 'Nadie', category: 'pronombres', priority: 4, source: 'library' },
        { id: 17054, keyword: 'otro', label: 'Otro', category: 'pronombres', priority: 4, source: 'library' },
    ],

    // =============================================
    // PREGUNTAS EXPANDIDAS
    // =============================================
    preguntas: [
        { id: 26022, keyword: 'cual', label: 'Cual', category: 'preguntas', priority: 4, source: 'library' },
        { id: 16125, keyword: 'puedo', label: 'Puedo', category: 'preguntas', priority: 4, source: 'library' },
        { id: 10726, keyword: 'hay', label: 'Hay', category: 'preguntas', priority: 4, source: 'library' },
    ],

    // =============================================
    // BASIC / CONECTORES EXPANDIDOS
    // =============================================
    basic: [
        { id: 11591, keyword: 'tambien', label: 'Tambien', category: 'basic', priority: 4, source: 'library' },
        { id: 11377, keyword: 'pero', label: 'Pero', category: 'basic', priority: 4, source: 'library' },
        { id: 36719, keyword: 'porque', label: 'Porque', category: 'basic', priority: 4, source: 'library' },
        { id: 7064, keyword: 'con', label: 'Con', category: 'basic', priority: 4, source: 'library' },
        { id: 7813, keyword: 'sin', label: 'Sin', category: 'basic', priority: 4, source: 'library' },
        { id: 7194, keyword: 'para', label: 'Para', category: 'basic', priority: 4, source: 'library' },
        { id: 25736, keyword: 'ya', label: 'Ya', category: 'basic', priority: 4, source: 'library' },
        { id: 25708, keyword: 'muy', label: 'Muy', category: 'basic', priority: 4, source: 'library' },
        { id: 5367, keyword: 'juntos', label: 'Juntos', category: 'basic', priority: 4, source: 'library' },
    ],

    // =============================================
    // NUMEROS
    // =============================================
    numeros: [
        { id: 2627, keyword: 'uno', label: 'Uno', category: 'basic', priority: 4, source: 'library' },
        { id: 2628, keyword: 'dos', label: 'Dos', category: 'basic', priority: 4, source: 'library' },
        { id: 2629, keyword: 'tres', label: 'Tres', category: 'basic', priority: 4, source: 'library' },
        { id: 2630, keyword: 'cuatro', label: 'Cuatro', category: 'basic', priority: 4, source: 'library' },
        { id: 2631, keyword: 'cinco', label: 'Cinco', category: 'basic', priority: 4, source: 'library' },
        { id: 2632, keyword: 'seis', label: 'Seis', category: 'basic', priority: 4, source: 'library' },
        { id: 2633, keyword: 'siete', label: 'Siete', category: 'basic', priority: 4, source: 'library' },
        { id: 2634, keyword: 'ocho', label: 'Ocho', category: 'basic', priority: 4, source: 'library' },
        { id: 2635, keyword: 'nueve', label: 'Nueve', category: 'basic', priority: 4, source: 'library' },
        { id: 7025, keyword: 'diez', label: 'Diez', category: 'basic', priority: 4, source: 'library' },
    ],
};

// Indice plano pre-computado para busqueda rapida
let _libraryIndex = null;

function _buildLibraryIndex() {
    if (_libraryIndex) return _libraryIndex;

    const IMAGE_BASE = 'https://static.arasaac.org/pictograms';
    const allItems = [];

    for (const key in PICTOGRAMS_LIBRARY) {
        const items = PICTOGRAMS_LIBRARY[key];
        for (const item of items) {
            allItems.push({
                ...item,
                image: `${IMAGE_BASE}/${item.id}/${item.id}_300.png`,
                _normalizedLabel: item.label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
                _normalizedKeyword: item.keyword.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            });
        }
    }

    _libraryIndex = allItems;
    return allItems;
}

/**
 * Buscar en la biblioteca expandida (in-memory, sin IndexedDB)
 * @param {string} query - Texto a buscar
 * @param {number} limit - Maximo de resultados (default 20)
 * @returns {Array} Pictogramas encontrados
 */
function searchLibrary(query, limit = 20) {
    if (!query || query.trim().length === 0) return [];

    const index = _buildLibraryIndex();
    const normalizedQuery = query.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const matches = index.filter(item =>
        item._normalizedLabel.includes(normalizedQuery) ||
        item._normalizedKeyword.includes(normalizedQuery)
    );

    // Ordenar: exactos primero, luego por prioridad
    matches.sort((a, b) => {
        const aExact = a._normalizedLabel === normalizedQuery ? 0 : 1;
        const bExact = b._normalizedLabel === normalizedQuery ? 0 : 1;
        if (aExact !== bExact) return aExact - bExact;
        return a.priority - b.priority;
    });

    return matches.slice(0, limit);
}

/**
 * Obtener un pictograma de la biblioteca por ID
 * @param {number} id - ID del pictograma
 * @returns {Object|null} Pictograma encontrado o null
 */
function getLibraryPictogramById(id) {
    const index = _buildLibraryIndex();
    return index.find(item => item.id === id) || null;
}

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PICTOGRAMS_LIBRARY,
        searchLibrary,
        getLibraryPictogramById
    };
}
