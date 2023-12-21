
import { cn } from '@/lib/utils' 
import { Inter } from 'next/font/google' 
import './globals.css' 

const inter = Inter({ subsets: ['latin'] })
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}>
        <main className='relative flex flex-col min-h-screen'>
            <div className='flex-1 flex-grow'>
              {children}
            </div>
        </main>
      </body>
    </html>
  )
}