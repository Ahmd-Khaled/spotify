import { CollectionContent, ContentWrapper, Navbar } from '@/app/components';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

export default function Artists() {
  return (
    <section>
      <Navbar isActive="artists" />
      <ContentWrapper>
        <CollectionContent
          icon={faGuitar}
          title="Follow your first artist" 
          txt="Follow artists you like by tapping the follow button."
          btn="Find artists"
        />
      </ContentWrapper>
    </section>
  )
}