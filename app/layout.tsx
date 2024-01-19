import type { Metadata } from 'next';

import './globals.css';
import { spaceGrotesk } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'LuciKritZ',
  description: 'A Full Stack Dev who loves Coffee',
  icons: {
    icon: [
      {
        url: '/logos/logo.png',
        href: '/logos/logo.png',
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
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.ico' sizes='any' />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
