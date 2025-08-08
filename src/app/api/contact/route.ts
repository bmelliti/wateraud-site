// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Check if API key exists
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('API Route: Received contact form submission'); // Debug log

  try {
    const body = await request.json();
    console.log('Form data received:', body); // Debug log

    const { name, email, company, phone, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email via Resend...'); // Debug log

    // Send email
   const { data, error } = await resend.emails.send({
        from: 'Contact Form <contact@wateraud.com>', // Use your verified domain
        to: 'brahim.melliti@wateraud.com', // Now this will work
        replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: `Resend error: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data); // Debug log

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}