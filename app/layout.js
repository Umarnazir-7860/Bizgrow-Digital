import { Playfair_Display, Montserrat } from "next/font/google"; // Naye fonts import kiye
import Navbar from "@components/Navbar";
import "./globals.css";
import Footer from "@components/Footer";
import { Providers } from "./providers";
import SmoothScroll from "@components/SmoothScroll";
import ChatBot from "@components/ChatBot";
import { Analytics } from '@vercel/analytics/next';

// Headings ke liye Premium Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
  style: ['italic', 'normal'], // Italic bht unique lagta hai is style mein
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
});


export const metadata = {
  title: "BizGrow Digital | Top Digital Growth & Content Marketing Agency UK",
  description: "Scale your business with BizGrow Digital. Expert SEO, content strategy, and digital marketing solutions tailored for the UK market.",
  
  // Detailed Icon Configuration for Google & Devices
  icons: {
    icon: [
      { url: "/icon.png", href: "/icon.png" }, // Default
      { url: "/icon.png", sizes: "32x32", type: "image/png" }, // Standard browser
      { url: "/icon.png", sizes: "192x192", type: "image/png" }, // Android/High-res
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" }, // iPhone/iPad
    ],
  },

  // UK SEO Signals
  alternates: {
    canonical: "https://bizgrow-digital.co.uk",
    languages: {
      "en-GB": "https://bizgrow-digital.co.uk",
    },
  },
  
  // WhatsApp/LinkedIn Preview
  openGraph: {
    title: "BizGrow Digital UK",
    description: "Expert Digital Growth Services",
    images: ["/icon.png"],
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning={true}>
      <body className="font-body bg-[#FDFCF9] text-[#1f2937] antialiased overflow-x-clip">
        <Providers>
          <Navbar />
          <SmoothScroll>
            <main>{children}
               <Analytics />
            </main>
            <Footer/>
          </SmoothScroll>
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}