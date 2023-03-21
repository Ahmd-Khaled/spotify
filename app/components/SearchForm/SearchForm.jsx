"use client";
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './searchForm.module.css';

export default function SearchForm({ labelId, isForEditPlaylist }) {
  const searchHandler = () => {};
  return (
    <div className={isForEditPlaylist ? styles.searchForEdit : styles.navSearch}>
      <div className={styles.navSearchInner}>
        <FontAwesomeIcon className={styles.navSearchIcon} icon={faMagnifyingGlass} />
        <input id={labelId} onChange={searchHandler} className={styles.navSearchInput} type='text' placeholder='What do you want to listen to?' />
      </div>
      <FontAwesomeIcon className={styles.navSearchClose} icon={faXmark} />
    </div>
  )
}
