import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeadPage from './head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '(有)アオキビルド',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
      <HeadPage />
        <body className={inter.className}>
            {children}
        </body>
    </html>
  )
}
