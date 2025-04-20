import { Inter } from 'next/font/google';
import Navigation from './(components)/(commoncomponents)/Navbar';
import Footer from './(components)/(commoncomponents)/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Educational Portal',
  description: 'Your comprehensive educational resource platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#e7e9eb' }}>
        <Navigation />
        <main style={{ marginTop: '76px', minHeight: 'calc(100vh - 60px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
