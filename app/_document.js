import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="KHj_Hw-S-B16KcqJl17oBG2pe04n2QSlATOrAbW82Fw"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Raj Artist - Portfolio & Artwork Showcase"
        />
        <meta
          property="og:description"
          content="Explore and admire the creative artworks of Raj Artist. A professional portfolio showcasing stunning projects."
        />
        <meta property="og:url" content="https://raj-artist.vercel.app" />
        <meta property="og:site_name" content="Raj Artist" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Raj Artist - Portfolio & Artwork Showcase"
        />
        <meta
          name="twitter:description"
          content="Discover the finest artworks by Raj Artist."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:creator" content="@RajArtist" />

        {/* SEO Meta Tags */}
        <meta
          name="keywords"
          content="art, artist portfolio, creative work, Raj Artist, digital art, traditional art, painting, illustration, art showcase, artist website, art gallery, contemporary art, fine art, art portfolio, commissioned artwork, artistic creations, modern artist, artistic projects, art designs, digital paintings, art exhibition"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
