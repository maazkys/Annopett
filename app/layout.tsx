import type { Metadata } from "next";
import "./globals.css"; 
import { Navbar } from "../components/layout/navbar"; 
import { Footer } from "../components/layout/footer";

export const metadata: Metadata = {
  title: "Annopett",
  description: "Precision Work. Remote Power. Real Results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}