import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Force Node.js runtime
export const runtime = 'nodejs';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, subject } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if email service is configured
    if (!resend || !process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
      console.error('Email service not configured:', {
        hasResend: !!resend,
        hasFrom: !!process.env.EMAIL_FROM,
        hasTo: !!process.env.EMAIL_TO
      });
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend v5.x syntax
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO.split(',').map(e => e.trim()),
      replyTo: email, // ⚠️ camelCase for v5.x
      subject: subject || `WaterAud Contact: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
              .content { background: #f9fafb; padding: 20px; margin-top: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #374151; }
              .value { color: #111827; margin-top: 5px; }
              .message { background: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company || 'Not provided'}</div>
                </div>
                <div class="message">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}