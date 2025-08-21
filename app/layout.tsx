import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import './globals.css'
import { ConsentManagerProvider, CookieBanner, ConsentManagerDialog } from "@c15t/nextjs";

// Fix: Add preload and display options to the Inter font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

// Replace with your actual domain
const siteUrl = process.env.NODE_ENV === 'production' 
  ? 'https://prime-bank-website.vercel.app' 
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Prime Bank Connect - Modern Banking Solutions for UK & Kenya',
    template: '%s | Prime Bank Connect'
  },
  description: 'Prime Bank Connect offers comprehensive banking services including personal banking, business accounts, loans, mortgages, and investment solutions. Serving over 2 million satisfied customers across UK and Kenya.',
  keywords: [
    'prime bank connect',
    'banking uk',
    'banking kenya',
    'personal banking',
    'business banking',
    'loans',
    'mortgages',
    'investments',
    'savings accounts',
    'current accounts',
    'mobile banking',
    'online banking',
    'uk bank',
    'kenyan bank',
    'international banking'
  ],
  authors: [{ name: 'Prime Bank Connect' }],
  creator: 'Prime Bank Connect',
  publisher: 'Prime Bank Connect',
  category: 'Financial Services',
  classification: 'Banking',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Prime Bank Connect',
    title: 'Prime Bank Connect - Modern Banking Solutions for UK & Kenya',
    description: 'Prime Bank Connect offers comprehensive banking services including personal banking, business accounts, loans, mortgages, and investment solutions. Serving customers across UK and Kenya.',
    images: [
      {
        url: '/app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Prime Bank Connect - Modern Banking Solutions',
        type: 'image/png',
      },
      {
        url: '/app/opengraph-image.png',
        width: 1200,
        height: 1200,
        alt: 'Prime Bank Connect Logo',
        type: 'image/png',
      }
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@primebank_uk',
    creator: '@primebank_uk',
    title: 'Prime Bank Connect - Modern Banking Solutions for UK & Kenya',
    description: 'Comprehensive banking services including personal banking, business accounts, loans, mortgages, and investment solutions across UK and Kenya.',
    images: ['/twitter-image.png'],
  },
  
  // Alternates
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/en-GB',
      'en-KE': '/en-KE',
      'sw-KE': '/sw-KE', // Swahili for Kenya
    },
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (replace with your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  
  // App-specific
  applicationName: 'Prime Bank Connect',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
  
  // Additional metadata
  manifest: '/manifest.json',
  
  // Geographic targeting - Multi-region
  other: {
    'geo.region': 'GB;KE',
    'geo.placename': 'London;Nairobi',
    'geo.position': '51.5074;-0.1278;-1.286389;36.817223', // London & Nairobi coordinates
    'ICBM': '51.5074, -0.1278, -1.286389, 36.817223',
    'DC.title': 'Prime Bank Connect - Modern Banking Solutions for UK & Kenya',
    'DC.creator': 'Prime Bank Connect',
    'DC.subject': 'Banking, Financial Services, UK, Kenya, International Banking',
    'DC.description': 'Prime Bank Connect offers comprehensive banking services including personal banking, business accounts, loans, mortgages, and investment solutions across UK and Kenya.',
    'DC.publisher': 'Prime Bank Connect',
    'DC.contributor': 'Prime Bank Connect',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.type': 'website',
    'DC.format': 'text/html',
    'DC.identifier': siteUrl,
    'DC.source': siteUrl,
    'DC.language': 'en-GB',
    'DC.coverage': 'United Kingdom, Kenya',
    'DC.rights': 'Copyright Prime Bank Connect',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en-GB" suppressHydrationWarning>
          <head>
            {/* Google Analytics 4 - Replace GA_MEASUREMENT_ID with your actual ID */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
            </Script>

            {/* Google Tag Manager - Replace GTM-XXXXXX with your actual ID */}
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `}
            </Script>

            {/* Hotjar Tracking - Replace with your Hotjar ID */}
            <Script id="hotjar" strategy="afterInteractive">
              {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
            </Script>

            {/* Microsoft Clarity - Replace with your Clarity ID */}
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
            </Script>

            {/* Structured Data - Organization (Multi-region) */}
            <Script
              id="structured-data-organization"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BankOrCreditUnion",
                  "name": "Prime Bank Connect",
                  "alternateName": ["Prime Bank Connect UK", "Prime Bank Connect Kenya"],
                  "description": "Prime Bank Connect offers comprehensive banking services including personal banking, business accounts, loans, mortgages, and investment solutions across UK and Kenya.",
                  "url": siteUrl,
                  "logo": `${siteUrl}/logo.png`,
                  "image": `${siteUrl}/og-image.png`,
                  "telephone": ["+44-XXX-XXXXXXX", "+254-XXX-XXXXXX"],
                  "email": ["info@primebank.co.uk", "info@primebank.co.ke"],
                  "address": [
                    {
                      "@type": "PostalAddress",
                      "streetAddress": "Your UK Street Address",
                      "addressLocality": "London",
                      "addressRegion": "England",
                      "postalCode": "SW1A 1AA",
                      "addressCountry": "GB"
                    },
                    {
                      "@type": "PostalAddress",
                      "streetAddress": "Your Kenya Street Address",
                      "addressLocality": "Nairobi",
                      "addressRegion": "Nairobi County",
                      "postalCode": "00100",
                      "addressCountry": "KE"
                    }
                  ],
                  "geo": [
                    {
                      "@type": "GeoCoordinates",
                      "latitude": 51.5074,
                      "longitude": -0.1278
                    },
                    {
                      "@type": "GeoCoordinates",
                      "latitude": -1.286389,
                      "longitude": 36.817223
                    }
                  ],
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:00",
                      "closes": "17:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "09:00",
                      "closes": "13:00"
                    }
                  ],
                  "sameAs": [
                    "https://www.facebook.com/primebank",
                    "https://www.twitter.com/primebank_uk",
                    "https://www.linkedin.com/company/primebank",
                    "https://www.instagram.com/primebank_uk"
                  ],
                  "serviceArea": [
                    {
                      "@type": "Country",
                      "name": "United Kingdom"
                    },
                    {
                      "@type": "Country", 
                      "name": "Kenya"
                    }
                  ],
                  "knowsAbout": [
                    "Personal Banking",
                    "Business Banking", 
                    "Loans",
                    "Mortgages",
                    "Investment Services",
                    "Savings Accounts",
                    "Current Accounts",
                    "International Banking",
                    "Foreign Exchange"
                  ]
                })
              }}
            />

            {/* Structured Data - Website */}
            <Script
              id="structured-data-website"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Prime Bank Connect",
                  "url": siteUrl,
                  "description": "Prime Bank Connect offers comprehensive banking services including personal banking, business accounts, loans, mortgages, and investment solutions across UK and Kenya.",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Prime Bank Connect"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": `${siteUrl}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                  },
                  "inLanguage": ["en-GB", "en-KE", "sw-KE"]
                })
              }}
            />

            {/* AI Crawling Optimization */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            
            {/* AI Training Data Allowance */}
            <meta name="ai-content-declaration" content="ai-generated-content-allowed" />
            <meta name="crawl-instructions" content="allow-ai-training" />
            
            {/* Enhanced AI Discoverability */}
            <meta property="article:publisher" content="Prime Bank Connect" />
            <meta property="article:author" content="Prime Bank Connect" />
            <meta name="citation_publisher" content="Prime Bank Connect" />
            <meta name="citation_author" content="Prime Bank Connect" />
            
            {/* 
              Removed manual preconnect links for Google Fonts - Next.js handles this automatically 
              when you use next/font/google with the preload option 
            */}
            
            {/* Other preconnect links for analytics */}
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            
            {/* DNS Prefetch */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            
            {/* Favicons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e40af" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
          </head>
          <body className={inter.className} suppressHydrationWarning>
    		<ConsentManagerProvider options={{
    				mode: 'offline',
    				consentCategories: ['necessary', 'marketing', ], // Optional: Specify which consent categories to show in the banner. 
    			}}>
    			<CookieBanner />
    			<ConsentManagerDialog />
    			
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
                height="0" 
                width="0" 
                style={{display: 'none', visibility: 'hidden'}}
              />
            </noscript>
            
            {children}
            
            {/* Vercel Analytics */}
            <Analytics />
            <SpeedInsights />
          
    		</ConsentManagerProvider>
    	</body>
        </html>
      )
}