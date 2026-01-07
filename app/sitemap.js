// app/sitemap.js

export default function sitemap() {
  const baseUrl = 'https://bizgrow-digital.vercel.app';

  return [
    {
      url: baseUrl,
      lastmod: new Date().toISOString(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastmod: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}