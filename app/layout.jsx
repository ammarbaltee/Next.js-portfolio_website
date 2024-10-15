import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import dynamic from 'next/dynamic';
import React from 'react';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: "Ammar Portfolio",
  description: "Ammar Yasir | Building Innovative Frontends",
};

const MemoizedHeader = React.memo(Header);
const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <MemoizedHeader />
          <main className='flex-auto'>
            {children}
          </main>
          <DynamicFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
