import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, apellido, email, telefono, mensaje } = req.body;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email provider
      auth: {
        user: 'eddyt1999@gmail.com', // Replace with your email
        pass: 'silvestreytommy',       // Replace with your password
      },
    });

    // Compose email message
    const mailOptions = {
      from: 'eddyt1999@gmail.com',
      to: 'eddyt1999@gmail.com',
      subject: 'Nuevo mensaje desde el formulario de contacto',
      html: `
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Email: ${email}</p>
        <p>Teléfono: ${telefono}</p>
        <p>Mensaje:</p>
        <p>${mensaje}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al enviar el email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
