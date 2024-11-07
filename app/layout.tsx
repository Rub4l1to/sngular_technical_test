import type { Metadata } from 'next';
import type { ReactNode } from 'react';
<ToastContainer position="top-right" autoClose={3000} />;

//* Fonts
import { roboto } from '@/lib/fonts';

//* Global Styles
import 'tailwindcss/tailwind.css';
import 'styles/globals.css';
import 'styles/animations.css';

//* Components
import { Header } from '@/components';

//* Notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const viewport = 'width=device-width, initial-scale=1.0';

export const metadata: Metadata = {
  title: 'Libary',
  description: 'Browse for assets needed to report and present analysis',
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main className="pt-4">{children}</main>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
