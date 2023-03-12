"use client";
import { Inter, Roboto } from 'next/font/google'
import styles from './page.module.css'
import { Content, ContentWrapper, MusicPlayer, Navbar } from './components'
import { useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


export default function Home() {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <section className={roboto.className}>
      <div className="relative">
        <div>
          <Navbar isSearch={false} />
          <ContentWrapper>
            <Content />
          </ContentWrapper>
        </div>
        {activeSong?.title && (
          <div className="sticky h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-50">
            <MusicPlayer />
          </div>
        )}
      </div>
    </section>
  )
}
