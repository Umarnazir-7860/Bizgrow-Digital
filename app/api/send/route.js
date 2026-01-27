import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Incoming Data:", body); // Ye aapke terminal mein data dikhayega

    const { name, email, subject, message } = body;

    // Check if fields are missing
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'BizGrow Digital <leads@bizgrow-digital.co.uk>',
      to: ['info@bizgrow-digital.co.uk'],
      subject: `New Lead: ${name} is interested in ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
          <h2 style="color: #B54118;">New Business Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #B54118;">${message}</div>
          <hr />
          <p style="font-size: 12px; color: #666;">Sent from BizGrow Digital Website</p>
        </div>
      `,
    });

    console.log("Resend Response:", data);
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error("Backend Error:", error); // Terminal mein error check karein
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}