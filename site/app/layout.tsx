import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://www.peter-buck.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PETER BUCK // CCO",
  description:
    "Peter Buck has spent 20+ years refusing to choose between craft and strategy. A CCO who leads from inside the work.",
  openGraph: {
    siteName: "PETER BUCK // CCO",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  // GSC verification — populate NEXT_PUBLIC_GSC_VERIFICATION at build time
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
        },
      }
    : {}),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Peter Buck",
  jobTitle: "Chief Creative Officer",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/peter-buck-52932833/",
    "https://www.instagram.com/peterbuck/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html
      lang="en-US"
      className={`${manrope.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* GA4 — inactive until NEXT_PUBLIC_GA_ID is set */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        <a href="#main" className="skip-link">
          Skip to Content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
