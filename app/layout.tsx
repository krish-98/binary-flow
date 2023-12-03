import React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter, Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/context/ThemeProvider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
})

export const metadata: Metadata = {
  title: "BinaryFlow",
  description:
    "A community driven platform for asking and answering programming questions. get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/icons/site-icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: "primary-gradient",
            footerActionLink: "primary-text-gradient hover: text-primary-500",
          },
        }}
      >
        <ThemeProvider>
          <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            {children}
          </body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  )
}
