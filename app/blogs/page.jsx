import Link from "next/link";
import Image from "next/image";

async function getPosts(page = 1) {
  const perPage = 9;
  try {
    const res = await fetch(
      `https://bizgrow-digital.co.uk/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`,
      {
        next: { revalidate: 3600 }, // Har 1 ghante baad data refresh hoga
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch posts");

    const totalPages = res.headers.get("X-WP-TotalPages") || 1;
    const posts = await res.json();

    return { posts, totalPages: parseInt(totalPages) };
  } catch (error) {
    console.error("WordPress Fetch Error:", error);
    return { posts: [], totalPages: 0 };
  }
}

export default async function BlogPage({ searchParams }) {
  // searchParams se current page number lena (default 1)
  const currentPage = parseInt(searchParams.page) || 1;
  const { posts, totalPages } = await getPosts(currentPage);

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600">
          No blogs found at the moment.
        </h2>
        <Link href="/" className="text-[#B54118] underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 py-16 bg-[#FDFCF9]">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#12066a] mb-4 uppercase tracking-tighter">
          Digital Marketing <span className="text-[#B54118]">Insights</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto italic">
          Latest trends, strategies, and tips to grow your business online.
        </p>
      </header>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Featured Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={
                  post.yoast_head_json?.og_image?.[0]?.url || "/placeholder.jpg"
                }
                alt={post.title.rendered}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#B54118] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                {post.type}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h2
                className="text-xl font-extrabold text-[#12066a] mb-4 line-clamp-2 leading-tight group-hover:text-[#B54118] transition-colors"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <div
                className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />

              <Link
                href={`/blogs/${post.slug}`}
                className="mt-auto inline-flex items-center text-[#B54118] font-bold text-xs uppercase tracking-widest hover:gap-2 transition-all"
              >
                Read Full Story <span className="ml-1">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      {/* // Pagination UI Fix (app/blogs/page.jsx) */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center gap-8 mt-20 border-t border-gray-100 pt-10">
          {currentPage > 1 ? (
            <Link
              href={`/blogs?page=${currentPage - 1}`}
              className="px-8 py-3 border-2 border-[#12066a] text-[#12066a] rounded-full font-bold hover:bg-[#12066a] hover:text-white transition-all text-sm"
            >
              PREVIOUS
            </Link>
          ) : (
            <div className="w-[120px]"></div>
          )}

          <span className="font-mono font-bold text-lg text-gray-400">
            {currentPage.toString().padStart(2, "0")}{" "}
            <span className="text-gray-200 mx-2">/</span>{" "}
            {totalPages.toString().padStart(2, "0")}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={`/blogs?page=${currentPage + 1}`}
              className="px-8 py-3 border-2 border-[#B54118] text-[#B54118] rounded-full font-bold hover:bg-[#B54118] hover:text-white transition-all text-sm"
            >
              NEXT PAGE
            </Link>
          ) : (
            <div className="w-[120px]"></div>
          )}
        </nav>
      )}
    </div>
  );
}
