"use client"
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import 'tailwindcss/tailwind.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="scroll-smooth">
        <ChakraProvider>
          <Navbar />
         
      {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
