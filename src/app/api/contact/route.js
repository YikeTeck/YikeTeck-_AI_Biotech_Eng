import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const formData = await req.json();
  // Configura il trasportatore email (dovrai modificare questi dati con quelli corretti del tuo provider email)
  const transporter = nodemailer.createTransport({
    host: 'smtps.aruba.it',
    port: 465,
    secure: true,
    auth: {
      user: 'info@yiketeck.com',
      pass: '@Yiketeck27win',
    },
  });
  
  
  try {
    console.log('Tentativo di invio email a info@yiketeck.com');
    const info = await transporter.sendMail({
      from: 'info@yiketeck.com',
      to: 'info@yiketeck.com',
      subject: `Nuovo messaggio dal sito: ${formData.subject}`,
      text: `
      Nome: ${formData.name}
      Email: ${formData.email}
      Telefono: ${formData.phone || 'Non specificato'}
      Azienda: ${formData.company || 'Non specificata'}
      Messaggio: ${formData.message}
      `,
      html: `
      <p><strong>Nome:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefono:</strong> ${formData.phone || 'Non specificato'}</p>
      <p><strong>Azienda:</strong> ${formData.company || 'Non specificata'}</p>
      <p><strong>Oggetto:</strong> ${formData.subject}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    console.log('Risultato invio:', info);
    return NextResponse.json({ message: 'Email inviata con successo' });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return NextResponse.json(
      { error: 'Errore nell\'invio dell\'email' },
      { status: 500 }
    );
  }
}