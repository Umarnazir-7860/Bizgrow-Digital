import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    const bizGrowKnowledge = `
    Identity: You are the BizGrow Expert. 
    Rule: Answer ONLY the specific service asked. Do NOT cross-sell or mention other services.
    
    SERVICES:
    - SEO: Technical audits, keywords, backlinks. (Don't mention Web Dev)
    - Web Dev: Next.js, Framer Motion, Custom Code. (Don't mention SEO)
    - WordPress: Headless WP, Zero-bloat, Security.
    - SMM: Viral hooks, community growth, "Beyond the like button".
    
    Tone: Professional, Short, Direct. Use Markdown for bolding.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: bizGrowKnowledge },
        ...messages
      ],
      temperature: 0.3, // Keeps the AI focused and precise
    });

    return new Response(JSON.stringify({ content: response.choices[0].message.content }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}