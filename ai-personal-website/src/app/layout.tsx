import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SignalStack - AI Insights & Building',
  description: 'Crystal Wang - AI pattern recognition, human preference modeling, and building products that understand what humans want',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}