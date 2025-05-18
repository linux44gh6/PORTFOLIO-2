import Head from "next/head";
import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/Types";

export const metadata = {
  title: "All Blogs | Milon Hossain",
  description: "Explore blogs and articles written by Full Stack Developer Milon Hossain on technology, programming, and more.",
  openGraph: {
    title: "All Blogs | Milon Hossain",
    description: "Discover the latest blogs and tutorials by Milon Hossain.",
    url: "https://portfolio-gilt-two-24.vercel.app/blogs",
    siteName: "Milon Hossain Portfolio",
    images: [
      {
        url: "https://portfolio-gilt-two-24.vercel.app/images/seo-blog-cover.jpg", // ✅ Replace with your actual image
        width: 800,
        height: 600,
        alt: "All Blogs by Milon Hossain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blogs | Milon Hossain",
    description: "Explore blogs and articles by Full Stack Developer Milon Hossain.",
    images: ["https://portfolio-gilt-two-24.vercel.app/images/seo-blog-cover.jpg"], // ✅ Replace with your actual image
  },
};

const Page = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/blog`, {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <>
      {/* ✅ JSON-LD structured data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "All Blogs - Milon Hossain",
              description:
                "Read the latest blog posts and articles by Full Stack Developer Milon Hossain.",
              url: "https://portfolio-gilt-two-24.vercel.app/blogs",
              author: {
                "@type": "Person",
                name: "Milon Hossain",
                url: "https://portfolio-gilt-two-24.vercel.app",
              },
            }),
          }}
        />
      </Head>

      {/* ✅ Page content */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto py-10 bg-gradient-to-t from-color2 to-color4 p-5">
        {blogs.data.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </>
  );
};

export default Page;
