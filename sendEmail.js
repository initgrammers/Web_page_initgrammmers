const sgMail = require('@sendgrid/mail');

// Reemplaza con tu API Key de SendGrid
sgMail.setApiKey('TU_API_KEY_DE_SENDGRID');

async function sendEmail(req, res) {
  const { nombre, apellido, email, telefono, mensaje } = req.body;

  const msg = {
    to: 'edisontoapanta@initgrammers.com', // Destinatario
    from: 'tuemail@tudominio.com', // Correo electrónico verificado en SendGrid
    subject: 'Nuevo mensaje de contacto',
    text: `
      Nombre: ${nombre}
      Apellido: ${apellido}
      Email: ${email}
      Teléfono: ${telefono}
      Mensaje: ${mensaje}
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el email');
  }
}

module.exports = sendEmail;
