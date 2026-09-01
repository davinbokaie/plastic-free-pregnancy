import type { Metadata } from "next";
import Script from "next/script";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const META_PIXEL_ID = "2538090476664112";

export const metadata: Metadata = {
  title: "Plastic-Free Pregnancy | The Guide",
  description: "50+ researched plastic-free product picks from pregnancy through baby's first year. One best-in-class pick per category with curated alternatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GTWEZNSL00"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GTWEZNSL00');
  `}
        </Script>
      </head>
      <body style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>
        {/*
          Meta Pixel base code in the Server Component layout (not a client child).
          1) Inline stub + init + PageView (queues until fbevents.js is ready)
          2) fbevents.js loaded via next/script src — reliable; do not rely on the
             IIFE's insertBefore, which can leave fbq as a silent queue stub.
        */}
        <Script id="meta-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];}(window, document);
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script
          id="meta-pixel-fbevents"
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        />
        {/*
          Use dangerouslySetInnerHTML so Next.js does NOT discover the img as a
          React image and emit <link rel="preload" as="image" href="...ev=PageView">.
          That preload was producing a false PageView in the Network tab while the
          real JS pixel never sent events.
        */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" alt="" />`,
          }}
        />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
