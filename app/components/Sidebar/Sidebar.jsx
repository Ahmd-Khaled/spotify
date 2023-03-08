import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faHouse, faLayerGroup, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <Link href='/'>
          <Image width={130} height={40} src='/imgs/Spotify_Logo_RGB_White.png' alt='Spotify_Logo' />
        </Link>
        <div className={styles.sideList}>
          <Link href='/' className={`${styles.sideListItem} ${styles.active}`}>
            <FontAwesomeIcon icon={faHouse} className={styles.sideIcon} />
            <span className={styles.sideListItemTxt}>Home</span>
          </Link>
          <Link href='/search' className={styles.sideListItem}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.sideIcon} />
            <span className={styles.sideListItemTxt}>Search</span>
          </Link>
          <Link href='/your-library' className={styles.sideListItem}>
            <FontAwesomeIcon icon={faLayerGroup} className={styles.sideIcon} />
            <span className={styles.sideListItemTxt}>Your Library</span>
          </Link>
          <Link href='/create-playlist' className={styles.sideListItem}>
            <FontAwesomeIcon icon={faSquarePlus} className={styles.sideIcon} />
            <span className={styles.sideListItemTxt}>Create Playlist</span>
          </Link>
          <Link href='/liked-songs' className={styles.sideListItem}>
            <FontAwesomeIcon icon={faGratipay} className={styles.sideIcon} />
            <span className={styles.sideListItemTxt}>Liked Songs</span>
          </Link>
        </div>
      </div>
      <div className={styles.sidebarBottom}>
        <Link className={styles.sidebarCookies} href='/'>Cookies</Link>
        <div className={styles.sideLang}>
          <FontAwesomeIcon icon={faGlobe} className={styles.sideLangIcon} />
          <span className={styles.sideLangTxt}>English</span>
        </div>
      </div>
    </div>
  )
}
