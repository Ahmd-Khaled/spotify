import { Inter, Roboto, Open_Sans } from 'next/font/google'
import styles from './page.module.css'
import { BrowseAll, ContentWrapper, Navbar } from '../components'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Search() {
  return (
    <section className={roboto.className}>
      <Navbar isSearch={true} />
      <ContentWrapper>
        <BrowseAll />
      </ContentWrapper>
    </section>
  )
}
