// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const { body, validationResult } = require('express-validator');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());

// // Conexión a MongoDB
// mongoose.connect(process.env.MONGODB_URI)

// .then(() => console.log('✅ Conectado a MongoDB Atlas'))
// .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// // Esquema del mensaje
// const messageSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//     maxlength: 100
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido']
//   },
//   message: {
//     type: String,
//     required: true,
//     trim: true,
//     maxlength: 1000
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: String,
//     enum: ['nuevo', 'leido', 'respondido'],
//     default: 'nuevo'
//   }
// });

// const Message = mongoose.model('Message', messageSchema);

// // Validaciones
// const contactValidation = [
//   body('name')
//     .trim()
//     .isLength({ min: 2, max: 100 })
//     .withMessage('El nombre debe tener entre 2 y 100 caracteres')
//     .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
//     .withMessage('El nombre solo puede contener letras y espacios'),
  
//   body('email')
//     .trim()
//     .isEmail()
//     .withMessage('Debe ser un email válido')
//     .normalizeEmail(),
  
//   body('message')
//     .trim()
//     .isLength({ min: 10, max: 1000 })
//     .withMessage('El mensaje debe tener entre 10 y 1000 caracteres')
// ];

// // Rutas
// app.get('/', (req, res) => {
//   res.json({ 
//     message: '🚀 API del Portfolio funcionando correctamente',
//     version: '1.0.0',
//     endpoints: {
//       contact: 'POST /api/contact',
//       health: 'GET /health'
//     }
//   });
// });

// app.get('/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     timestamp: new Date().toISOString(),
//     database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
//   });
// });

// // Ruta para contacto
// app.post('/api/contact', contactValidation, async (req, res) => {
//   try {
//     // Verificar errores de validación
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         success: false,
//         message: 'Datos inválidos',
//         errors: errors.array()
//       });
//     }

//     const { name, email, message } = req.body;

//     // Verificar si ya existe un mensaje reciente del mismo email (prevenir spam)
//     const recentMessage = await Message.findOne({
//       email: email,
//       createdAt: { $gte: new Date(Date.now() - 5 * 60 * 1000) } // 5 minutos
//     });

//     if (recentMessage) {
//       return res.status(429).json({
//         success: false,
//         message: 'Por favor espera 5 minutos antes de enviar otro mensaje'
//       });
//     }

//     // Crear nuevo mensaje
//     const newMessage = new Message({
//       name,
//       email,
//       message
//     });

//     await newMessage.save();

//     console.log(`📧 Nuevo mensaje de ${name} (${email})`);

//     res.status(201).json({
//       success: true,
//       message: 'Mensaje enviado correctamente',
//       data: {
//         id: newMessage._id,
//         timestamp: newMessage.createdAt
//       }
//     });

//   } catch (error) {
//     console.error('Error al guardar mensaje:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error interno del servidor'
//     });
//   }
// });

// // Middleware de manejo de errores
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: 'Algo salió mal!'
//   });
// });

// // Ruta 404
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Ruta no encontrada'
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
//   console.log(`📱 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
// });
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/database")
const contactRoutes = require("./routes/contact")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())

// CORS configuration
const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:3000", "http://localhost:5173"]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  }),
)

// Connect to MongoDB
connectDB()

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend API",
    version: "2.0.0",
    endpoints: {
      health: "/health",
      contact: "/api/contact",
    },
  })
})

app.use("/", contactRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: "Algo salió mal en el servidor",
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`)
})
