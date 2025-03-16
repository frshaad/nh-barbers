import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Providers from '@/components/query-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Barbers',
  description: 'A basic starter for Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <NuqsAdapter>
          <Providers>{children}</Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
