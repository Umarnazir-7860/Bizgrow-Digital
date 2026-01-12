import { Resend } from 'resend';

// Hum environment variable se key utha rahe hain
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Frontend se bheja gaya data yahan receive hoga
    const { name, email, service, message } = await req.json();

    const data = await resend.emails.send({
      from: 'BizGrow Digital <onboarding@resend.dev>', // Jab tak domain verify nahi hota yehi rahega
      to: ['muhammadumarnazirhussain@gmail.com'], // Yahan apna Gmail likhein jahan leads chahiye
      subject: `New Lead: ${name} is interested in ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
          <h2 style="color: #B54118;">New Business Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This enquiry was sent from your BizGrow Digital website contact form.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}