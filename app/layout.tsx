import type { Metadata } from 'next';
import './globals.css';
import ReactLenis from 'lenis/react';
import Header from '@/components/common/header';
import { Hanken_Grotesk, Host_Grotesk } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import OnekoCat from '@/components/common/onkeo-cat';
import { Quote } from '@/components/common/quotes';
import Footer from '@/components/common/footer';
import Grain from '@/components/landing/grain';

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-host-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://utkarshx.vercel.app/'),
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${hankenGrotesk.variable} px-20  relative z-0 bg-neutral-950 text-white antialiased flex items-center flex-col`}
      >
        <ViewTransitions>
          <ReactLenis root>
            <div className="fixed inset-0 bg-pattern z-0 pointer-events-none"></div>
            <div className="relative border  border-neutral-900 z-0 w-full bg-neutral-950  flex flex-col items-center justify-center">
            
              <Header />
              {children}
              <OnekoCat />
              <Quote />
              <Footer />
            </div>
          </ReactLenis>
        </ViewTransitions>
      </body>
    </html>
  );
}
