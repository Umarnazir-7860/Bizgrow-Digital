import Link from "next/link";
import Image from "next/image";

async function getPosts(page = 1) {
  const perPage = 9;
  try {
    const res = await fetch(
      `https://bizgrow-digital.co.uk/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`,
      { next: { revalidate: 3600 } }
    );
    const totalPages = res.headers.get("X-WP-TotalPages") || 1;
    const posts = await res.json();
    return { posts, totalPages: parseInt(totalPages) };
  } catch (error) {
    return { posts: [], totalPages: 0 };
  }
}

export default async function BlogPage() {
  const { posts, totalPages } = await getPosts(1);
  const currentPage = 1;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 py-16 bg-[#FDFCF9]">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#12066a] mb-4 uppercase tracking-tighter">
          Digital Marketing <span className="text-[#B54118]">Insights</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <article key={post.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
            <div className="relative h-56 w-full">
              <Image src={post.yoast_head_json?.og_image?.[0]?.url || "/placeholder.jpg"} alt={post.title.rendered} fill className="object-cover" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-xl font-extrabold text-[#12066a] mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <Link href={`/${post.slug}`} className="mt-auto text-[#B54118] font-bold text-xs uppercase tracking-widest">
                Read Full Story →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* FIXED URL STRUCTURE FOR PAGE 1 */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center gap-4 mt-20 border-t pt-10">
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <Link
                key={i + 1}
                href={i === 0 ? "/blogs" : `/blogs/page/${i + 1}/`}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${currentPage === i + 1 ? "bg-[#B54118] text-white" : "text-gray-400 hover:bg-gray-100"}`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
          <Link href="/blogs/page/2/" className="px-8 py-3 border-2 border-[#B54118] text-[#B54118] rounded-full font-bold">NEXT PAGE</Link>
        </nav>
      )}
    </div>
  );
}