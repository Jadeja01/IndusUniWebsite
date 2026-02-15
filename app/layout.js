import { Inter } from "next/font/google";
import Navigation from "./(components)/(commoncomponents)/Navbar";
import Footer from "./(components)/(commoncomponents)/Footer";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Provider from "./(components)/Provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IUhub | Educational Resources",
  description: "Your comprehensive educational resource platform",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Your comprehensive educational resource platform"
        />
        <meta
          name="keywords"
          content="education, resources, engineering, study materials, eg, engineering graphics, iuhub, indus university, first year, second year, pyq, assignment "
        />
        <meta name="author" content="IUhub team" />
        <meta property="og:title" content="IUhub | Educational Resources" />
        <meta
          property="og:description"
          content="Your comprehensive educational resource platform"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2684436410242774"
     crossOrigin="anonymous"></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-..."
          crossOrigin="anonymous"
        />
        <link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600&display=swap"
  rel="stylesheet"
/>

      </head>
      <body className={inter.className} style={{ backgroundColor: "#e7e9eb" }}>
        <Navigation />
        <main style={{ minHeight: "calc(100vh - 60px)" }}>
          {children}
          <SpeedInsights />
        </main>
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html></Provider>
  );
}
