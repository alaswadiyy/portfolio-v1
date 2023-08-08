"use client"
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
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
