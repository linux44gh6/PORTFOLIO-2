import type { Metadata } from "next";

export const sendImageToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ReShop");

  const response = await fetch("https://api.cloudinary.com/v1_1/da1t0c7he/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Upload failed");
  }

  return data.secure_url;
};

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
