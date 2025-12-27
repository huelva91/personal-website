# Sergio Huelva Luque - Portfolio

Portfolio personal desarrollado con React y Vite, diseñado para ser desplegado en Vercel.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos personalizados con variables CSS
- **Google Fonts** - Inter & Outfit

## 🎨 Características

- ✨ Diseño moderno con tema oscuro y gradientes vibrantes
- 🎭 Animaciones suaves y efectos interactivos
- 📱 Totalmente responsive
- ⚡ Optimizado para rendimiento
- 🔍 SEO optimizado

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opción 3: Deploy manual

```bash
# Construir el proyecto
npm run build

# La carpeta 'dist' contiene los archivos estáticos
# Sube esta carpeta a Vercel o cualquier hosting estático
```

## 📝 Personalización

### Actualizar información personal

Edita los siguientes archivos para personalizar tu portfolio:

- **src/components/Hero.jsx** - Nombre y título principal
- **src/components/About.jsx** - Información sobre ti y estadísticas
- **src/components/Projects.jsx** - Tus proyectos
- **src/components/Skills.jsx** - Tus habilidades técnicas
- **src/components/Contact.jsx** - Enlaces de contacto y redes sociales
- **index.html** - Meta tags y título de la página

### Cambiar colores

Los colores están definidos como variables CSS en `src/index.css`. Modifica las variables en `:root` para cambiar el esquema de colores.

## 📄 Estructura del Proyecto

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Próximos Pasos

1. Instala las dependencias: `npm install`
2. Personaliza el contenido con tu información
3. Prueba localmente: `npm run dev`
4. Despliega en Vercel

## 📧 Contacto

Sergio Huelva Luque - [sergio.huelva@example.com](mailto:sergio.huelva@example.com)

---

Desarrollado con ❤️ usando React y Vite
