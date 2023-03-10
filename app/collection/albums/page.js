import { CollectionContent, ContentWrapper, Navbar } from '@/app/components';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

export default function Albums() {
  return (
    <section>
      <Navbar isActive="albums" />
      <ContentWrapper>
        <CollectionContent
          icon={faCompactDisc}
          title="Follow your first podcast" 
          txt="Follow podcasts you like by tapping the follow button."
          btn="Find podcast"
        />
      </ContentWrapper>
    </section>
  )
}
