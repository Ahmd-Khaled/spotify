import { CollectionContent, ContentWrapper, Navbar } from '@/app/components';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

export default function Podcasts() {
  return (
    <section>
      <Navbar isActive="podcasts" />
      <ContentWrapper>
        <CollectionContent
          icon={faMicrophoneLines}
          title="Follow your first podcast" 
          txt="Follow podcasts you like by tapping the follow button."
          btn="Find podcast"
        />
      </ContentWrapper>
    </section>
  )
}