import type { Metadata } from 'next';
import './globals.css';
import ReactLenis from 'lenis/react';
import Header from '@/components/common/header';
import { Hanken_Grotesk, Host_Grotesk } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import OnekoCat from '@/components/common/onkeo-cat';
import { Quote } from '@/components/common/quotes';
import Footer from '@/components/common/footer';




const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Utkarsh Raj Mishra - Full Stack Web Developer',
  description: 'Utkarsh Raj Mishra - Portfolio',
  openGraph: {
    title: 'Utkarsh Raj Mishra - Full Stack Web Developer',
    description: 'Utkarsh Raj Mishra - Portfolio',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'Utkarsh Raj Mishra - Full Stack Web Developer',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${hankenGrotesk.variable} bg-neutral-950 text-white antialiased flex items-center flex-col`}
      >
        <ViewTransitions>
          <ReactLenis root>
            <Header />
            {children}
            <OnekoCat />
            <Quote />
            <Footer />
          </ReactLenis>
        </ViewTransitions>
      </body>
    </html>
  );
}
