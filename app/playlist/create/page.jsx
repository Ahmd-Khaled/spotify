import { ContentWrapper, Navbar, PlaylistEdit } from '@/app/components';
import styles from './page.module.css';

export default function CreatePlaylist() {
  console.log("Content from - ");
  return (
    <section className={styles.create}>
      <Navbar isSearch={false} isPlaylist={true} />
      <ContentWrapper bgGradient={true}>
        <PlaylistEdit />
      </ContentWrapper>
    </section>
  )
}
