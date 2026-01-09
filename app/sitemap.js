// app/sitemap.js

export default async function sitemap() {
  const baseUrl = 'https://bizgrow-digital.co.uk';

  let blogUrls = [];
  
  try {
    // 1. Fetch Blogs from WordPress
    const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts?_fields=slug,modified&per_page=100');
    const posts = await response.json();

    blogUrls = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`, // Agar '/blog/' nahi hai toh hata dein
      lastModified: new Date(post.modified),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Sitemap fetch error:', error);
    blogUrls = []; // Agar error aaye toh sirf static pages show honge
  }

  // 2. Your Static Pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'always', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  return [...staticPages, ...blogUrls];
}