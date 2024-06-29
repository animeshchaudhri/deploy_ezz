import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { SessionProvider } from 'next-auth/react'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'Node-Rizz',
  description: 'create sclable backend systems with AI, Even a 5 year old can do it!',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className + ' bg-dark-bg bg-cover'}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* <SessionProvider> */}
            <div className='bg-line-bg'>
              {children}
            </div>
          {/* </SessionProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
