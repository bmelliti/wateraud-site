import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { ToastContainer } from '@/components/ui/Toast';
import { generateMetadata } from '@/lib/metadata';
import '@/styles/globals.css';  

const inter = Inter({ subsets: ['latin'] });

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <SkipLink />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}