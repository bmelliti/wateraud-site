// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs'; // avoid Edge runtime

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const { RESEND_API_KEY, EMAIL_FROM, EMAIL_TO } = process.env;

    if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
      console.error('Missing env vars for contact API');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const data = (await req.json()) as ContactPayload;

    if (!data.name || data.name.trim().length < 2) return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    if (!data.message || data.message.trim().length < 10) return NextResponse.json({ error: 'Invalid message' }, { status: 400 });

    const resend = new Resend(RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `New contact from ${data.name}`,
      reply_to: data.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name ?? ''}</p>
        <p><strong>Email:</strong> ${data.email ?? ''}</p>
        <p><strong>Company:</strong> ${data.company ?? ''}</p>
        <p><strong>Phone:</strong> ${data.phone ?? ''}</p>
        <p><strong>Service:</strong> ${data.service ?? ''}</p>
        <p><strong>Message:</strong><br/>${(data.message ?? '').replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API exception:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
