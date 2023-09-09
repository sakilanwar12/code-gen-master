import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './template/Header/Header'
import Footer from './template/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code Generator Master',
  description: 'Code Generator Master',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
