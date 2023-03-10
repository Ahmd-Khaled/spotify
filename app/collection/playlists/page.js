import { CollectionContent, ContentWrapper, Navbar } from '@/app/components';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

export default function Playlists() {
  return (
    <section>
      <Navbar isActive="playlists" />
      <ContentWrapper>
        <CollectionContent
          icon={faMusic}
          title="Create your first playlist" 
          txt="It's easy, we'll help you."
          btn="Create playlist"
        />
      </ContentWrapper>
    </section>
  )
}
