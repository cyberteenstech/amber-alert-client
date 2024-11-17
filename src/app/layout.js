import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
