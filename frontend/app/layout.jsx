import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AosInit from '../components/AosInit';
import PageTransitionLoader from '../components/PageTransitionLoader';
import FloatingActions from '../components/FloatingActions';

export const metadata = {
  metadataBase: new URL('https://kmctcls.org'), // Update this to your actual production domain
  title: {
    default: 'KMCT College of Legal Studies | Best Law College in Kasaragod',
    template: '%s | KMCT College of Legal Studies'
  },
  description: 'KMCT College of Legal Studies is a premier law institute in Kasaragod offering BA LLB and LLB programs with excellent faculties and modern infrastructure.',
  openGraph: {
    title: 'KMCT College of Legal Studies | Best Law College in Kasaragod',
    description: 'KMCT College of Legal Studies is a premier law institute in Kasaragod offering BA LLB and LLB programs.',
    url: '/',
    siteName: 'KMCT College of Legal Studies',
    images: [
      {
        url: '/images/card.jpeg', // The image that will show up on WhatsApp
        width: 1200,
        height: 630,
        alt: 'KMCT College of Legal Studies Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMCT College of Legal Studies | Best Law College in Kasaragod',
    description: 'Premier law institute in Kasaragod offering BA LLB and LLB programs.',
    images: ['/images/card.jpeg'], // The image that will show up on Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white">
        <div className="w-full max-w-full overflow-x-hidden flex flex-col min-h-screen relative">
          <PageTransitionLoader />
          <AosInit />
          <FloatingActions />
          <Navbar />
          <main className="flex-1 w-full max-w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
