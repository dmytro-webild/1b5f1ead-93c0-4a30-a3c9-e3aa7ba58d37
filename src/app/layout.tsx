import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'THE GENTLEMAN\'S CUT | Modern Men\'s Barbershop',
  description: 'Experience precision haircuts, classic hot towel shaves, and expert beard trims in a modern, calm, and contemporary barbershop setting. Book your refined grooming experience today.',
  openGraph: {
    "title": "WOOF PET MARKET | Your One-Stop Pet Shop",
    "description": "Discover premium pet food, toys, grooming services, and expert care for your dogs and cats at WOOF PET MARKET. Everything for happy, healthy pets.",
    "url": "https://www.woofpetmarket.com",
    "siteName": "WOOF PET MARKET",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cat-is-sitting-fence-looking-into-frame-streets-old-city-animals-urban-environment-animal-care-city-ecosystems-idea-coexistence-city-ecosystem_166373-3102.jpg",
        "alt": "Happy Golden Retriever in a pet store"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "WOOF PET MARKET | Your One-Stop Pet Shop",
    "description": "Discover premium pet food, toys, grooming services, and expert care for your dogs and cats at WOOF PET MARKET. Everything for happy, healthy pets.",
    "images": [
      "http://img.b2bpic.net/free-photo/cat-is-sitting-fence-looking-into-frame-streets-old-city-animals-urban-environment-animal-care-city-ecosystems-idea-coexistence-city-ecosystem_166373-3102.jpg"
    ]
  },
};


const manrope = Manrope({
  variable: "--font-manrope",  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
