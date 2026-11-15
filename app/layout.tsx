import type { Metadata } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz', 'wdth'],
  variable: '--font-bricolage',
  display: 'swap',
});
const hanken = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken', display: 'swap' });
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const title = 'Chermane Trades — Live Trade Signals & Trading Discord';
const description =
  'Precise trade signals. Top-tier education. Every week. Live Nasdaq futures signals Mon–Fri, 10am–12pm EST.';

// Favicon, apple icon and the OG card come from app/icon.svg, app/apple-icon.png and app/opengraph-image.png.
export const metadata: Metadata = {
  // Netlify sets URL to the site's primary address at build time.
  metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
  title,
  description,
  openGraph: { type: 'website', siteName: 'Chermane Trades', title, description, url: '/' },
  twitter: { card: 'summary_large_image', title, description },
};

const noscriptCss =
  '#pre{display:none}body.loading{overflow:auto}.hero [data-h],[data-r]{opacity:1;transform:none}.h2 .w>span{transform:none}.signal .c,.signal .zone,.signal .lbl{opacity:1;transform:none}.signal .lv{stroke-dashoffset:0}';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <head>
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noscriptCss }} />
        </noscript>
      </head>
      {/* Preloader swaps "loading" for "ready" on the client. */}
      <body className="loading" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
