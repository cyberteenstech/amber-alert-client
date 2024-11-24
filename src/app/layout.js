// app/layout.js

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Amber Alert For Bangladesh",
  description: "Sign Petition to bring Amber Alert to Bangladesh to make a safer place for children",
  icons: {
    icon: "/amberalert.png", // Path to your favicon in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Amber Alert For Bangladesh Petition" />
        <meta
          property="og:description"
          content="Sign Petition to bring Amber Alert to Bangladesh to make a safer place for children"
        />
        <meta property="og:image" content="https://i.ibb.co/7nybjs2/thumb.jpg" />
        <meta property="og:url" content="http://amberalert4bangladesh.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://i.ibb.co/7nybjs2/thumb.jpg" />
      </Head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
