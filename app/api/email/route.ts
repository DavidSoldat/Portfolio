import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create a transporter for sending the email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or other SMTP service
      auth: {
        user: process.env.SMTP_EMAIL, // your Gmail address or other service user
        pass: process.env.SMTP_PASSWORD, // your Gmail password or app-specific password
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: process.env.SMTP_EMAIL, // where you want to receive the email
      subject: subject || 'No Subject',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a successful response
    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Return an error response
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 },
    );
  }
}
