import type { Metadata } from "next";
import Script from "next/script";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const META_PIXEL_ID = "2538090476664112";
const TIKTOK_PIXEL_ID = "DAD375JC77U2FG641SH0";

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
        {/*
          TikTok Pixel — same pattern as Meta: stub + load() metadata in layout,
          events.js via next/script src (avoid relying only on insertBefore).
        */}
        <Script id="tiktok-pixel-base" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
              ttq.load=function(e,n){
                var r="https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
              };
              ttq.load('${TIKTOK_PIXEL_ID}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
        <Script
          id="tiktok-pixel-events"
          src={`https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${TIKTOK_PIXEL_ID}&lib=ttq`}
          strategy="afterInteractive"
        />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
