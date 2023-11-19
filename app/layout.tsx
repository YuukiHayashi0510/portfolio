import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '~/components/Layout/Footer'
import { Header } from '~/components/Layout/Header'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Yuuki Hayashi's Portfolio",
  description: 'Yuuki Hayashiのポートフォリオサイトです.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-pt-28 scroll-smooth' lang='ja'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
