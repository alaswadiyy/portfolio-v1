"use client"
import Footer from '@/components/Footer'
// import { ThemeProvider } from 'next-themes'
import './globals.css'
import Navbar from '@/components/Navbar'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
