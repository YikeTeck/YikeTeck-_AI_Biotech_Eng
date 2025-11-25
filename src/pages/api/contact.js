// src/pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Metodo non consentito' });
  }

  const formData = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtps.aruba.it',
    port: 465,
    secure: true,
    auth: {
      user: 'info@yiketeck.com',
      pass: '@Yiketeck27win', // App password reale o generata da Aruba
    },
  });

  try {
    await transporter.sendMail({
      from: '"Sito Yike Teck" <info@yiketeck.com>',
      to: 'info@yiketeck.com',
      subject: `Nuovo messaggio: ${formData.subject}`,
      html: `
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefono:</strong> ${formData.phone}</p>
        <p><strong>Azienda:</strong> ${formData.company}</p>
        <p><strong>Messaggio:</strong><br>${formData.message.replace(/\n/g, '<br>')}</p>
      `
    });

    return res.status(200).json({ message: 'Email inviata con successo' });
  } catch (error) {
    console.error('Errore invio email:', error);
    return res.status(500).json({ error: 'Errore invio email' });
  }
}
