import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AosInit from '../components/AosInit';
import PageTransitionLoader from '../components/PageTransitionLoader';
import FloatingActions from '../components/FloatingActions';

export const metadata = {
  title: 'KMCT College of Legal Studies',
  description: 'KMCT College of Legal Studies - Empowering Excellence in Legal Education',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white flex flex-col min-h-screen overflow-x-hidden w-full max-w-full relative">
        <PageTransitionLoader />
        <AosInit />
        <FloatingActions />
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
