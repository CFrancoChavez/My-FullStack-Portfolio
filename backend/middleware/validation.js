const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body

  // Validar que todos los campos estén presentes
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "Todos los campos son requeridos",
    })
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Formato de email inválido",
    })
  }

  // Validar longitud mínima
  if (name.trim().length < 2) {
    return res.status(400).json({
      error: "El nombre debe tener al menos 2 caracteres",
    })
  }

  if (subject.trim().length < 3) {
    return res.status(400).json({
      error: "El asunto debe tener al menos 3 caracteres",
    })
  }

  if (message.trim().length < 10) {
    return res.status(400).json({
      error: "El mensaje debe tener al menos 10 caracteres",
    })
  }

  next()
}

module.exports = { validateContactForm }
