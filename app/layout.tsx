
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Business Test 40+ - Bereit für dein eigenes Unternehmen?',
  description: 'Kostenloser Business-Test in 5 Min: Finde heraus, ob du mental & emotional bereit für eine Selbständigkeit mit 40+ bist. Mit AI-Fokus & Sofort-Auswertung. Jetzt starten!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
