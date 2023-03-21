import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlaylistHead, SearchForm } from '..';
import styles from './playlistEdit.module.css';

export default function PlaylistEdit() {
  console.log("Content from - PlaylistEdit");
  return (
    <div className={styles.playlistEdit}>
      <PlaylistHead isForCreate={true} title="My Playlist #1" />
      <div className={styles.crPlaylistBody}>
        <div className={styles.crPlayDropdownMenu}>
          <FontAwesomeIcon icon={faEllipsis} className={styles.crPlayDropdownMenuIcon} />
        </div>
        <div className={styles.crPlayLetsFind}>
          <div className={styles.crPlayLetsFindForm}>
            <label htmlFor='searchInput' className={styles.crPlayLetsFindFormLabel}>{"Let's find something for your playlist"}</label>
            <SearchForm labelId='searchInput' isForEditPlaylist={true} />
          </div>
          <FontAwesomeIcon className={styles.crPlayLetsFindCloseIcon} icon={faXmark} />
        </div>
      </div>
    </div>
  )
}
