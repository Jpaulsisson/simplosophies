import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import NextAuthProvider from '@/providers/next-auth-provider';
import NextThemeProvider from '@/providers/theme-provider';
import GlobalState from '@/context';
import ReactQueryProvider from '@/providers/react-query-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


export const metadata: Metadata = {
  title: 'Simplosophies',
  description: 'A simple blog for the simple human',
}

const font = Urbanist({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={font.className} lang="en">
      <body>
        <NextThemeProvider>
          <NextAuthProvider>
            <ReactQueryProvider>
              <GlobalState>
                <Navbar />
                {children}
              </GlobalState>
              <ReactQueryDevtools />
            </ReactQueryProvider>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
