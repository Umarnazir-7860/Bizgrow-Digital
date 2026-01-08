import { notFound } from 'next/navigation';
import Link from 'next/link';

async function getPost(slug) {
  try {
    const res = await fetch(`https://bizgrow-digital.co.uk/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data[0]; 
  } catch (error) {
    return null;
  }
}

export default async function SingleBlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Reader-friendly Header */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <Link href="/blogs" className="text-[#B54118] font-bold text-sm tracking-widest uppercase mb-8 inline-block hover:underline">
          ← Back to All Insights
        </Link>
        <h1 
          className="text-4xl md:text-6xl font-black text-[#12066a] leading-tight mb-6 tracking-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
        />
        <div className="text-gray-400 font-medium">
          Published on {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </header>

      {/* High-Impact Featured Image */}
      {post.yoast_head_json?.og_image?.[0]?.url && (
        <div className="max-w-5xl mx-auto px-4 mb-16">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={post.yoast_head_json.og_image[0].url} 
              alt={post.title.rendered}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* 🚀 Professional Typography Content Area */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div 
          className="
            /* Paragraph Spacing & Size */
            prose-p:text-lg prose-p:leading-[1.8] prose-p:text-gray-700 prose-p:mb-10
            
            /* Headings Styling (WordPress H2, H3) */
            prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:font-black prose-h2:text-[#12066a] prose-h2:mt-16 prose-h2:mb-6 prose-h2:tracking-tight
            prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:font-extrabold prose-h3:text-[#12066a] prose-h3:mt-12 prose-h3:mb-4
            
            /* List Styling */
            prose-li:text-lg prose-li:text-gray-700 prose-li:mb-3
            prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6
            
            /* Links & Bold Text */
            prose-a:text-[#B54118] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#12066a] prose-strong:font-black
            
            max-w-none blog-professional-content
          "
          dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
        />
      </article>
    </div>
  );
}