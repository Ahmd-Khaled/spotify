import { Inter, Roboto } from 'next/font/google'
import styles from './page.module.css'
import { Content, ContentWrapper, Navbar } from './components'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


export default function Home() {
  return (
    <section className={roboto.className}>
      <Navbar isSearch={false} />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </section>
  )
}
