import Head from "next/head";
import ContactPage from "@/components/Contact/ContactPage";

export const metadata = {
  title: "Contact Me | Milon Hossain",
  description: "Reach out to Milon Hossain for full stack web development inquiries, collaborations, or professional connections.",
  openGraph: {
    title: "Contact Me | Milon Hossain",
    description: "Reach out to Full Stack Developer Milon Hossain via this contact form.",
    url: "https://portfolio-gilt-two-24.vercel.app/contact",
    siteName: "Milon Hossain Portfolio",
    images: [
      {
        url: "https://portfolio-gilt-two-24.vercel.app/images/contact-seo.jpg", // Replace with your image
        width: 800,
        height: 600,
        alt: "Contact Milon Hossain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me | Milon Hossain",
    description: "Connect with Full Stack Developer Milon Hossain.",
    images: ["https://portfolio-gilt-two-24.vercel.app/images/contact-seo.jpg"], // Replace with your image
  },
};

const Page = () => {
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Milon Hossain",
              description: "Contact form to get in touch with Full Stack Developer Milon Hossain.",
              url: "https://portfolio-gilt-two-24.vercel.app/contact",
              mainEntity: {
                "@type": "Person",
                name: "Milon Hossain",
                jobTitle: "Full Stack Developer",
                url: "https://portfolio-gilt-two-24.vercel.app",
                sameAs: [
                  "https://github.com/your-profile",
                  "https://linkedin.com/in/your-profile",
                ],
              },
            }),
          }}
        />
      </Head>
      <div className="min-h-screen bg-color2 py-10 px-4">
        <ContactPage />
      </div>
    </>
  );
};

export default Page;
