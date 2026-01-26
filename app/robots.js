export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Agar koi folder hide karna ho toh yahan likhen
    },
    // Hamesha apni REAL domain use karein, vercel.app nahi
    sitemap: 'https://bizgrow-digital.co.uk/sitemap.xml',
  }
}