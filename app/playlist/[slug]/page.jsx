import { ContentWrapper, Navbar, Playlist } from '@/app/components';
import { Inter, Roboto } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function PlaylistPage() {
  return (
    <section className={roboto.className}>
      <Navbar isSearch={false} isPlaylist={true} />
      <ContentWrapper bgGradient={true}>
        <Playlist />
      </ContentWrapper>
    </section>
  )
}
