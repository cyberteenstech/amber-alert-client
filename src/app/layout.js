import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Amber Alert For Bangladesh",
  description: "Sign Petition to bring Amber Alert to Bangladesh to make a safer place for children",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
