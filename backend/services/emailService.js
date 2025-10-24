// const nodemailer = require("nodemailer")

// // Configurar el transporter de Nodemailer con Gmail
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // Tu email de Gmail
//     pass: process.env.EMAIL_APP_PASSWORD, // App Password de Gmail
//   },
// })

// const sendContactNotification = async (contactData) => {
//   try {
//     const { name, email, subject, message } = contactData

//     const mailOptions = {
//       from: `"Portfolio Notifications" <${process.env.EMAIL_USER}>`,
//       to: process.env.NOTIFICATION_EMAIL, // Tu email personal donde recibirás las notificaciones
//       subject: `Nuevo mensaje de contacto: ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
//             Nuevo Mensaje de Contacto
//           </h2>
          
//           <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <p style="margin: 10px 0;">
//               <strong style="color: #4F46E5;">Nombre:</strong> ${name}
//             </p>
//             <p style="margin: 10px 0;">
//               <strong style="color: #4F46E5;">Email:</strong> 
//               <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
//             </p>
//             <p style="margin: 10px 0;">
//               <strong style="color: #4F46E5;">Asunto:</strong> ${subject}
//             </p>
//           </div>
          
//           <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4F46E5; margin: 20px 0;">
//             <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
//             <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
//           </div>
          
//           <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
//             <p>Este mensaje fue enviado desde tu portfolio web.</p>
//             <p>Fecha: ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}</p>
//           </div>
//         </div>
//       `,
//       // También incluir versión texto plano
//       text: `
// Nuevo Mensaje de Contacto

// Nombre: ${name}
// Email: ${email}
// Asunto: ${subject}

// Mensaje:
// ${message}

// ---
// Fecha: ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}
//       `,
//     }

//     const info = await transporter.sendMail(mailOptions)
//     console.log("Email sent successfully:", info.messageId)
//     return { success: true, messageId: info.messageId }
//   } catch (error) {
//     console.error("Error sending email:", error)
//     // No lanzamos el error para que el mensaje se guarde aunque falle el email
//     return { success: false, error: error.message }
//   }
// }

// module.exports = { sendContactNotification }
const brevo = require("@getbrevo/brevo")

console.log("[Email Service] Initializing Brevo with config:", {
  apiKey: process.env.BREVO_API_KEY ? "✓ Set" : "✗ Missing",
  fromEmail: process.env.EMAIL_USER ? "✓ Set" : "✗ Missing",
  notificationEmail: process.env.NOTIFICATION_EMAIL ? "✓ Set" : "✗ Missing",
})

const sendContactNotification = async (contactData) => {
  console.log("[Email Service] Attempting to send email for:", contactData.email)

  if (!process.env.BREVO_API_KEY) {
    console.error("[Email Service] ✗ BREVO_API_KEY not configured")
    return { success: false, error: "Brevo API key not configured" }
  }

  if (!process.env.EMAIL_USER || !process.env.NOTIFICATION_EMAIL) {
    console.error("[Email Service] ✗ Email addresses not configured")
    return { success: false, error: "Email addresses not configured" }
  }

  try {
    const { name, email, subject, message } = contactData

    const apiInstance = new brevo.TransactionalEmailsApi()
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)

    const sendSmtpEmail = new brevo.SendSmtpEmail()
    sendSmtpEmail.to = [{ email: process.env.NOTIFICATION_EMAIL }]
    sendSmtpEmail.sender = {
      email: process.env.EMAIL_USER,
      name: "Portfolio Contact Form",
    }
    sendSmtpEmail.replyTo = { email: email, name: name }
    sendSmtpEmail.subject = `Nuevo mensaje de contacto: ${subject}`
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
          Nuevo Mensaje de Contacto
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;">
            <strong style="color: #4F46E5;">Nombre:</strong> ${name}
          </p>
          <p style="margin: 10px 0;">
            <strong style="color: #4F46E5;">Email:</strong> 
            <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
          </p>
          <p style="margin: 10px 0;">
            <strong style="color: #4F46E5;">Asunto:</strong> ${subject}
          </p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4F46E5; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
          <p>Este mensaje fue enviado desde tu portfolio web.</p>
          <p>Fecha: ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}</p>
        </div>
      </div>
    `
    sendSmtpEmail.textContent = `
Nuevo Mensaje de Contacto

Nombre: ${name}
Email: ${email}
Asunto: ${subject}

Mensaje:
${message}

---
Fecha: ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}
    `

    console.log("[Email Service] Sending email via Brevo to:", process.env.NOTIFICATION_EMAIL)
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail)
    console.log("[Email Service] ✓ Email sent successfully via Brevo")
    return { success: true, messageId: response.messageId }
  } catch (error) {
    console.error("[Email Service] ✗ Error sending email:", error.message)
    if (error.response) {
      console.error("[Email Service] Brevo error details:", error.response.text)
    }
    return { success: false, error: error.message }
  }
}

module.exports = { sendContactNotification }
