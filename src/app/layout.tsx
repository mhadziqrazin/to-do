import Nav from '@/components/navbar/Nav'
import './globals.css'
import { Poppins } from 'next/font/google'
import Theme from '@/components/providers/Theme'
import { Toaster } from 'react-hot-toast'
import CreateModal from '@/components/modals/CreateModal'
import DeleteModal from '@/components/modals/DeleteModal'
import EditModal from '@/components/modals/EditModal'
import getUser from '@/actions/getUser'
import ShareModal from '@/components/modals/ShareModal'
import DoneModal from '@/components/modals/DoneModal'

const font = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'To Do Hajik',
  description: 'To Do list app by Hadziq Razin',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  return (
    <html lang="en">
      <body className={`${font.className} bg-theme h-screen`}>
        <Theme>
          <Toaster />
          <CreateModal />
          <DeleteModal />
          <EditModal />
          <ShareModal />
          <DoneModal />
          <Nav user={user} />
          <div className='container mx-auto px-4 py-16'>
            {children}
          </div>
        </Theme>
      </body>
    </html>
  )
}
