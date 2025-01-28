import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Doğal Şifa - Geleneksel ve Modern Şifalı Bitkisel Çay Tarifleri',
  description: 'Geleneksel ve modern şifalı bitkisel çay tarifleri. Doğal yollarla sağlıklı yaşam için özel hazırlanmış çay tarifleri ve şifalı bitkiler hakkında detaylı bilgiler.',
  keywords: 'şifalı bitkiler, bitkisel çay, doğal tedavi, geleneksel tıp, sağlıklı yaşam, papatya çayı, zencefil çayı, ıhlamur, adaçayı, nane limon',
  openGraph: {
    title: 'Doğal Şifa - Geleneksel ve Modern Şifalı Bitkisel Çay Tarifleri',
    description: 'Geleneksel ve modern şifalı bitkisel çay tarifleri. Doğal yollarla sağlıklı yaşam için özel hazırlanmış çay tarifleri.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Doğal Şifa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="canonical" href="https://dogalsifa.com" />

        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Doğal Şifa",
              "description": "Geleneksel ve modern şifalı bitkisel çay tarifleri",
              "url": "https://dogalsifa.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dogalsifa.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Google AdSense Script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7168907774484971"
          crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}