# Portfolio Full Stack

Un sitio web de portfolio moderno y bilingüe (Inglés/Español) que muestra proyectos, tecnologías y experiencia profesional. Construido con Next.js 15, React 19 y Express.js.

## Características

- **Soporte Bilingüe**: Internacionalización completa con traducciones en inglés y español
- **Chatbot Interactivo**: Asistente virtual basado en menús para ayudar a los visitantes a navegar el portfolio y explorar proyectos
- **Showcase de Proyectos**: Tarjetas de proyectos detalladas con demos en vivo y enlaces a GitHub
- **Visualización de Stack Tecnológico**: Representación visual de las tecnologías dominadas
- **Formulario de Contacto**: Formulario de contacto integrado con notificaciones por email vía Brevo
- **Integración con WhatsApp**: Opción de contacto directo por WhatsApp
- **Diseño Responsivo**: Diseño mobile-first con Tailwind CSS
- **Modo Oscuro**: UI moderna con tokens de diseño semánticos

## Stack Tecnológico

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Librería UI**: React 19
- **Estilos**: Tailwind CSS v4
- **Internacionalización**: i18next, react-i18next
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Cliente HTTP**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Base de Datos**: MongoDB con Mongoose
- **Servicio de Email**: Brevo (anteriormente Sendinblue)
- **CORS**: Habilitado para solicitudes cross-origin

## Comenzando

### Prerequisitos

- Node.js 18+ y npm
- Instancia de MongoDB (local o en la nube)
- Cuenta de Brevo para funcionalidad de email

### Instalación

1. **Clonar el repositorio**
   \`\`\`bash
   git clone https://github.com/CFrancoChavez/My-FullStack-Portfolio.git
   cd My-FullStack-Portfolio
   \`\`\`

2. **Instalar dependencias del frontend**
   \`\`\`bash
   npm install
   \`\`\`

3. **Instalar dependencias del backend**
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

### Variables de Entorno

#### Frontend (.env.local)
Crear un archivo `.env.local` en el directorio raíz:

\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:5000
\`\`\`

#### Backend (.env)
Crear un archivo `.env` en el directorio `backend`:

\`\`\`env
PORT=5000
MONGODB_URI=tu_cadena_de_conexion_mongodb
BREVO_API_KEY=tu_clave_api_brevo
SENDER_EMAIL=tu_email_verificado_remitente
SENDER_NAME=Tu Nombre
RECIPIENT_EMAIL=tu_email_para_recibir_mensajes
FRONTEND_URL=http://localhost:3000
\`\`\`

### Ejecutar Localmente

1. **Iniciar el servidor backend**
   \`\`\`bash
   cd backend
   npm run dev
   \`\`\`
   El backend se ejecutará en `http://localhost:5000`

2. **Iniciar el servidor de desarrollo frontend**
   \`\`\`bash
   npm run dev
   \`\`\`
   El frontend se ejecutará en `http://localhost:3000`

3. **Abrir el navegador**
   Navegar a `http://localhost:3000`

## Despliegue

### Frontend (Vercel)
El frontend está optimizado para despliegue en Vercel:

\`\`\`bash
vercel deploy
\`\`\`

**Dominio Personalizado**: [https://francochavez.dev](https://francochavez.dev)

El portfolio también es accesible a través de la URL predeterminada de Vercel, que redirige automáticamente al dominio personalizado.

### Backend (Railway/Render/Heroku)
El backend puede desplegarse en cualquier plataforma de hosting Node.js:

1. Configurar las variables de entorno en tu plataforma de hosting
2. Desplegar el directorio `backend`
3. Actualizar `NEXT_PUBLIC_API_URL` en el frontend para apuntar a tu backend desplegado

## Características en Detalle

### Chatbot
- Asistente interactivo basado en menús
- Exploración de proyectos con información detallada
- Información de tecnologías/habilidades categorizada
- Opciones de contacto directo (WhatsApp, LinkedIn, GitHub)
- Respuestas bilingües (Inglés/Español)
- Navegación fluida entre secciones

### Formulario de Contacto
- Validación en tiempo real
- Notificaciones por email vía Brevo
- Almacenamiento en MongoDB del historial de mensajes
- Protección contra spam

### Sección de Proyectos
- Proyectos destacados con descripciones
- Etiquetas de tecnologías
- Enlaces a demos en vivo y GitHub
- Diseño de tarjetas responsivo

## Contacto

- **Email**: cfrancochavezdev@gmail.com
- **LinkedIn**: [Franco Chavez](https://www.linkedin.com/in/franco-chavez-548b0a56/)
- **GitHub**: [CFrancoChavez](https://github.com/CFrancoChavez)
- **WhatsApp**: +54 9 351 627-3976
- **Ubicación**: Córdoba, Argentina

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

Construido con ❤️ por Franco Chavez
