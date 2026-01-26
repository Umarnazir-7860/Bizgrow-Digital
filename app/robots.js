export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/wp-content/uploads/wpo/wpo-plugins-tables-list.json',
      ],
    },
    sitemap: 'https://bizgrow-digital.co.uk/sitemap.xml',
  }
}