"use client";

import { faChevronLeft, faChevronRight, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { PlaySong } from '..';
import styles from './navbar.module.css';

export default function Navbar({ isSearch, isPlaylist }) {
  const searchHandler = () => {

  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navLeftWrapper}>
        <div className={styles.navLeft}>
          <div className={styles.navIconItem}>
            <FontAwesomeIcon className={styles.navIcon} icon={faChevronLeft} />
          </div>
          <div className={styles.navIconItem}>
            <FontAwesomeIcon className={styles.navIcon} icon={faChevronRight} />
          </div>
        </div>
        {isSearch && 
          <div className={styles.navSearch}>
            <div className={styles.navSearchInner}>
              <FontAwesomeIcon className={styles.navSearchIcon} icon={faMagnifyingGlass} />
              <input onChange={searchHandler} className={styles.navSearchInput} type='text' placeholder='What do you want to listen to?' />
            </div>
            <FontAwesomeIcon className={styles.navSearchClose} icon={faXmark} />
          </div>
        }
        {isPlaylist &&
          <div className={styles.navPlaySong}>
            <PlaySong opacity={1} width={50} />
            <h3 className={styles.navPlaySongTitle}>Deep Focus</h3>
          </div>
        }
      </div>
      <div className={styles.navRight}>
        <div className={styles.navLinks}>
          <Link className={styles.navLink} href='/premium'>Premium</Link>
          <Link className={styles.navLink} href='/support'>Support</Link>
          <Link className={styles.navLink} href='/download'>Download</Link>
        </div>
        <div className={styles.navSign}>
          <Link className={`${styles.navLink} ${styles.signup}`} href='/sign-up'>Sign up</Link>
          <div className={styles.navLogin}>Log in</div>
        </div>
      </div>
    </div>
  )
}
