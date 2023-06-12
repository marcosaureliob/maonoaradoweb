'use client'
import { ReactNode } from 'react'
import { globalStyles } from '@/styles/global'
import { Roboto } from 'next/font/google'
import { Footer } from '@/components/Patterns/Footer'
import { Header } from '@/components/Patterns/Header'

const roboto = Roboto({
  weight: '400',
  style: 'normal',
  preload: false,
})

export const metadata = {
  title: 'Mão no Arado',
  description: 'Site da Ong Mão no Arado',
}

globalStyles()
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
