import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/shared/navbar';
import { ToastProvider } from '@/components/ui/toast-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '24 Crafts.com - Professional Networking for Film Industry',
  description: 'Connect with film industry professionals, discover opportunities, and showcase your work on the leading platform for cinema professionals.',
  icons: {
    icon: '/24_crafts_logo.png',
    shortcut: '/24_crafts_logo.png',
    apple: '/24_crafts_logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/24_crafts_logo.png" type="image/png" />
        <link rel="shortcut icon" href="/24_crafts_logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <ToastProvider />
      </body>
    </html>
  );
}