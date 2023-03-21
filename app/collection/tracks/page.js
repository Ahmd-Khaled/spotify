import { CollectionContent, ContentWrapper, Navbar } from '@/app/components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

export default function Tracs() {
  return (
    <section>
      <Navbar isActive="tracs" />
      <ContentWrapper>
        <CollectionContent
          icon={faHeart}
          title="Songs you like will appear here" 
          txt="Save songs by tapping the heart icon."
          btn="Find songs"
          link="/playlist/tracks"
        />
      </ContentWrapper>
    </section>
  )
}