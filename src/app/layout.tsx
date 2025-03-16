import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Providers from '@/components/query-provider';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
});

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
    <html
      lang="fa"
      dir="rtl"
      className={vazirmatn.className}
      suppressHydrationWarning
    >
      <body className="h-screen w-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <NuqsAdapter>
            <Providers>{children}</Providers>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
