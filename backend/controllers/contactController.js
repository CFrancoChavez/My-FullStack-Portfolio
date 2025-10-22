const Message = require("../models/Message")
const { sendContactNotification } = require("../services/emailService")

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Guardar mensaje en MongoDB
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    })

    await newMessage.save()
    console.log("Message saved to database:", newMessage._id)

    // Enviar notificación por email (no bloqueante)
    sendContactNotification({ name, email, subject, message })
      .then((result) => {
        if (result.success) {
          console.log("Email notification sent successfully")
        } else {
          console.error("Email notification failed:", result.error)
        }
      })
      .catch((err) => {
        console.error("Email notification error:", err)
      })

    // Responder inmediatamente al cliente
    res.status(201).json({
      message: "Mensaje recibido correctamente",
      id: newMessage._id,
    })
  } catch (error) {
    console.error("Error saving message:", error)
    res.status(500).json({
      error: "Error al procesar el mensaje",
    })
  }
}

const getHealth = async (req, res) => {
  try {
    // Verificar conexión a MongoDB
    const dbStatus = require("mongoose").connection.readyState === 1 ? "Connected" : "Disconnected"

    res.json({
      status: "OK",
      timestamp: new Date().toISOString(),
      database: dbStatus,
    })
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      error: error.message,
    })
  }
}

module.exports = {
  createContact,
  getHealth,
}
