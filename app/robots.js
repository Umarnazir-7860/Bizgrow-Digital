export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bizgrow-digital.vercel.app/sitemap.xml',
  }
}