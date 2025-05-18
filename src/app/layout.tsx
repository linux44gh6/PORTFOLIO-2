import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milon Hossain | Full Stack Developer",
  description: "I am a full stack developer and computer engineer building performant web applications using modern tools like React, Next.js, Node.js, and MongoDB.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Portfolio", "Milon Hossain","Computer Engineer","Web Developer","Web Design","MERN Stack Developer","Full Stack Web Developer"],
  authors: [{ name: "Milon Hossain", url: "https://portfolio-gilt-two-24.vercel.app" }],
  openGraph: {
    title: "Milon Hossain | Full Stack Developer",
    description: "Explore my work and experience as a full stack developer.",
    url: "https://portfolio-gilt-two-24.vercel.app",
    siteName: "Milon's Portfolio",
    images: [
      {
        url: "/og-image.png", // ✅ Place in `public/`
        width: 1200,
        height: 630,
        alt: "Milon Hossain Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Milon Hossain",
              "url": "https://portfolio-gilt-two-24.vercel.app",
              "sameAs": [
                "https://github.com/linux44gh6",
                "https://www.linkedin.com/in/mdmilonhossain32"
              ],
              "jobTitle": "Full Stack Developer"
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors position="top-center"/>
        {children}
      </body>
    </html>
  );
}
