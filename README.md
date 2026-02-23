# 🗣️ PictoLoco - Comunicación Aumentativa

> **Aplicación PWA moderna para comunicación no verbal utilizando pictogramas ARASAAC**

![PWA](https://img.shields.io/badge/PWA-Ready-green)
![Offline](https://img.shields.io/badge/Offline-Supported-blue)
![ARASAAC](https://img.shields.io/badge/Pictos-ARASAAC-orange)

## 📱 Descripción

PictoLoco es una aplicación de **Comunicación Aumentativa y Alternativa (CAA)** diseñada especialmente para personas autistas no verbales. Utiliza un sistema de scroll vertical tipo TikTok para navegar por pictogramas organizados por prioridad de uso.

## ✨ Características Principales

### 🎯 Scroll Vertical Tipo TikTok
- **Un pictograma a la vez** - Enfoque completo en cada imagen
- **Deslizamiento suave** - Navegación intuitiva con el dedo
- **Snap automático** - Cada pictograma se centra automáticamente

### 📊 Sistema de Prioridades
| Prioridad | Color | Categoría | Ejemplos |
|-----------|-------|------------|----------|
| ⭐ 1 | 🔴 | **Básicos** | Quiero, Dame, Sí, No, Ayuda |
| 🍎 2 | 🟡 | **Necesidades** | Comer, Baño, Dolor, Hambre |
| 🏃 3 | 🟢 | **Acciones/Objetos** | Jugar, Casa, Pelota |

### 💾 Almacenamiento Local (IndexedDB)
- **Sin dependencia de API** - Todos los pictogramas se guardan localmente
- **Funcionamiento offline** - Usa la app sin conexión a internet
- **Carga instantánea** - Sin tiempos de espera

### 🔊 Funcionalidades de Comunicación
- **Formación de oraciones** - Toca + para agregar pictogramas
- **Texto a voz (TTS)** - Escucha la oración formada
- **Historial de uso** - Los pictogramas más usados aparecen primero

### 📲 Progressive Web App (PWA)
- **Instalable** - Agrega a la pantalla de inicio
- **Offline** - Funciona sin internet
- **Responsive** - Se adapta a cualquier dispositivo

## 🚀 Instalación y Uso

### Opción 1: Servidor Local (Recomendado)

```bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start
```

La app se abrirá automáticamente en `http://localhost:8080`

### Opción 2: Abrir Directamente

```bash
# Simplemente abre index.html en tu navegador
# (Algunas funciones PWA requieren servidor HTTP)
```

### Opción 3: Usando Python

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

## 📁 Estructura del Proyecto

```
pictoloco/
├── index.html              # HTML principal
├── manifest.json           # Manifiesto PWA
├── sw.js                   # Service Worker
├── package.json            # Dependencias y scripts
├── README.md               # Documentación
├── assets/
│   ├── icon-192.svg       # Icono 192x192
│   └── icon-512.svg       # Icono 512x512
├── styles/
│   └── main.css           # Estilos principales
└── src/
    ├── app.js             # Lógica de la aplicación
    ├── database.js        # IndexedDB para almacenamiento
    └── pictograms-data.js # Datos de pictogramas
```

## 🎨 Uso de la Aplicación

### Navegación Básica

1. **Seleccionar Categoría**: Toca las tabs superiores (⭐ Básicos, 🍎 Necesidades, etc.)
2. **Navegar Pictogramas**: Desliza hacia arriba/abajo para ver más pictogramas
3. **Agregar a Oración**: 
   - Toca el pictograma para seleccionarlo
   - Presiona el botón **+** flotante
   - O usa la tecla **Enter/Espacio**
4. **Escuchar Oración**: Toca el botón 🔊
5. **Borrar**: Toca 🗑️ para comenzar de nuevo

### Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Espacio` | Agregar pictograma actual |
| `↓` | Siguiente pictograma |
| `↑` | Pictograma anterior |
| `Backspace` | Eliminar último de oración |

## 🔧 Personalización

### Colores

Edita `styles/main.css`:

```css
:root {
    --primary: #6c5ce7;      /* Color principal */
    --secondary: #00cec9;    /* Color secundario */
    --success: #00b894;      /* Botón agregar */
    --danger: #d63031;       /* Botón borrar */
}
```

### Pictogramas

Edita `src/pictograms-data.js` para agregar/quitar pictogramas:

```javascript
basic: [
    { 
        id: 5441,                    // ID de ARASAAC
        keyword: 'quiero',           // Palabra clave
        label: 'Quiero',             // Etiqueta visible
        category: 'basic',           // Categoría
        priority: 1                  // Prioridad (1-4)
    },
    // ... más pictogramas
]
```

## 🌐 API de ARASAAC

Las imágenes se obtienen de:
```
https://static.arasaac.org/pictograms/{id}/{id}_300.png
```

Documentación oficial: https://arasaac.org/api

## 📊 Base de Datos Local

La app usa **IndexedDB** con 3 stores:

### `pictograms`
- `id`: Identificador único
- `keyword`: Palabra clave
- `category`: Categoría
- `priority`: Prioridad (1-4)
- `usageCount`: Veces usado
- `image`: URL de la imagen

### `usage`
- Registro de estadísticas de uso

### `settings`
- Configuración del usuario

## 🔍 Comandos Útiles

```bash
# Ver estadísticas de pictogramas (desde consola del navegador)
db.getStats().then(console.log)

# Limpiar base de datos
db.clear()

# Recargar pictogramas desde API
location.reload()
```

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari (iOS 11.3+)
- ✅ Opera

### Requisitos
- Conexión a internet (solo primera carga)
- JavaScript habilitado
- Service Workers soportados

## ♿ Accesibilidad

- ✅ Navegación con teclado
- ✅ Atributos ARIA
- ✅ Soporte para lectores de pantalla
- ✅ `prefers-reduced-motion`
- ✅ Focus visible
- ✅ Alto contraste

## 📄 Licencias

- **Pictogramas**: ARASAAC - Creative Commons BY-NC-SA
- **Código**: MIT License

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Commit (`git commit -m 'Agrega nueva feature'`)
4. Push (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## 📞 Soporte

Para problemas o sugerencias, abre un issue en el repositorio.

## 🙏 Agradecimientos

- **ARASAAC** - Por los pictogramas de código abierto
- **Comunidad CAA** - Por la inspiración y feedback

---

**Hecho con ❤️ para la comunidad de comunicación aumentativa**
