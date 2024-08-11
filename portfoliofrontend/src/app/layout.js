import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DricDesigns',
  description: 'My house for all my projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
