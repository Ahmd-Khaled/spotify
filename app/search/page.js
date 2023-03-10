import styles from './page.module.css'
import { BrowseAll, ContentWrapper, Navbar } from '../components'


export default function Search() {
  return (
    <section>
      <Navbar isSearch={true} />
      <ContentWrapper>
        <BrowseAll />
      </ContentWrapper>
    </section>
  )
}
