import { Navbar, Sidebar } from './components';
import { Inter, Roboto, Open_Sans } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Spotify - Web Player',
  description: 'Spotify is a digital music service that gives you access to millions of songs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={roboto.className}>
          <div className='home'>
            <Sidebar />
            <div className='hRight'>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
