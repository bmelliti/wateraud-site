// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

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
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const data = (await req.json()) as ContactPayload;

    if (!data.name || data.name.trim().length < 2) return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    if (!data.message || data.message.trim().length < 10) return NextResponse.json({ error: 'Invalid message' }, { status: 400 });

    const resend = new Resend(RESEND_API_KEY);
    const to = EMAIL_TO.split(',').map(s => s.trim());

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to,
      subject: `New contact from ${data.name}`,
      text: `
New Contact Form Submission

Name: ${data.name ?? ''}
Email: ${data.email ?? ''}
Company: ${data.company ?? ''}
Phone: ${data.phone ?? ''}
Service: ${data.service ?? ''}

Message:
${data.message ?? ''}
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name ?? ''}</p>
        <p><strong>Email:</strong> ${data.email ?? ''}</p>
        <p><strong>Company:</strong> ${data.company ?? ''}</p>
        <p><strong>Phone:</strong> ${data.phone ?? ''}</p>
        <p><strong>Service:</strong> ${data.service ?? ''}</p>
        <p><strong>Message:</strong><br/>${(data.message ?? '').replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: data.email,
    });

    if (error) return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
