import { Inter } from "next/font/google";
import "./globals.css";
import { AlbumProvider } from "./context/AlbumContext";
import ReviewProvider from "./context/ReviewContext";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import SubscriberProvider from "./context/SubscriberContext";
import { logoImage } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raj Artist - Portfolio & Artwork Showcase",
  description:
    "Discover stunning artwork and creative projects by Raj Artist. Explore the portfolio now!",
  keywords: [
    "art",
    "artist portfolio",
    "creative work",
    "Raj Artist",
    "digital art",
    "traditional art",
    "painting",
    "illustration",
    "art showcase",
    "artist website",
    "art gallery",
    "contemporary art",
    "fine art",
    "art portfolio",
    "commissioned artwork",
    "artistic creations",
    "modern artist",
    "artistic projects",
    "art designs",
    "digital paintings",
    "art exhibition",
  ],
  applicationName: "Raj Artist Portfolio",
  authors: [{ name: "Raj Artist", url: "https://raj-artist.vercel.app" }],
  robots: "index, follow",
  openGraph: {
    title: "Raj Artist - Portfolio & Artwork Showcase",
    description:
      "Explore and admire the creative artworks of Raj Artist. A professional portfolio showcasing stunning projects.",
    url: "https://raj-artist.vercel.app",
    siteName: "Raj Artist",
    images: [
      {
        url: logoImage.src,
        width: 1200,
        height: 630,
        alt: "Raj Artist Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Artist - Portfolio & Artwork Showcase",
    description: "Discover the finest artworks by Raj Artist.",
    images: [logoImage.src],
    creator: "@RajArtist",
  },
  alternates: {
    canonical: "https://raj-artist.vercel.app",
  },
  verification: {
    google: "KHj_Hw-S-B16KcqJl17oBG2pe04n2QSlATOrAbW82Fw",
  },
};

export default function RootLayout({ children }) {
  console.log(logoImage.src);
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="google-site-verification"
            content="KHj_Hw-S-B16KcqJl17oBG2pe04n2QSlATOrAbW82Fw"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Raj Artist",
                url: "https://raj-artist.vercel.app",
                sameAs: [
                  "https://www.linkedin.com/in/raj-naralkar-824855313",
                  "https://twitter.com/RajArtist",
                  "https://www.instagram.com/raj_artist3095",
                ],
              }),
            }}
          />
        </head>
        <body
          className={inter?.className || ""}
          suppressHydrationWarning={true}
        >
          <AlbumProvider>
            <ReviewProvider>
              <SubscriberProvider>{children}</SubscriberProvider>
              <ToastContainer />
            </ReviewProvider>
          </AlbumProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
