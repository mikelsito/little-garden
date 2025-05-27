import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

// Create a transporter with optional auth
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD ? {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  } : undefined
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email configuration is available
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Email service is currently unavailable. Please try again later.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'littlegardensara@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
