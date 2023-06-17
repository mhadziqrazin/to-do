import Nav from '@/components/navbar/Nav'
import './globals.css'
import { Poppins } from 'next/font/google'
import Theme from '@/components/providers/Theme'
import { Toaster } from 'react-hot-toast'
import CreateModal from '@/components/modals/CreateModal'

const font = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'To Do Hajik',
  description: 'To Do list app by Hadziq Razin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-theme h-screen`}>
        <Theme>
          <Toaster />
          <CreateModal />
          <Nav />
          <div className='container mx-auto px-4 py-16'>
            {children}
          </div>
        </Theme>
      </body>
    </html>
  )
}
