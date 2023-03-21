"use client";
import { playListsSongs } from '@/app/utils/lists';
import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { PlaylistHead, PlaySong, TableRow } from '..';
import styles from './playlist.module.css';

export default function Playlist() {
  return (
    <div className={styles.playlist}>
      <PlaylistHead isForCreate={flase} title="Deep Focus" />
      <div className={styles.playlistBottom}>
        <div className={styles.playlistBottomIcons}>
          <PlaySong opacity={1} width={60} />
          <FontAwesomeIcon className={styles.playlistBottomIconHeart} icon={faHeart} />
          <FontAwesomeIcon className={styles.playlistBottomIconDots} icon={faEllipsis} />
        </div>
        <table className={styles.playlistTable}>
          <tr className={styles.playlistTableHead}>
            <th className={styles.playlistTableCell1}>#</th>
            <th className={styles.playlistTableCell2}>Title</th>
            <th className={styles.playlistTableCell3}></th>
            <th className={styles.playlistTableCell4}>Album</th>
            <th className={styles.playlistTableCell5}>Date added</th>
            <th className={styles.playlistTableCell6}>
              <span className={styles.playlistTableRowIconHeart}></span>
              <FontAwesomeIcon className={styles.playlistTableRowIconClock} icon={faClock} />
              <span className={styles.playlistTableRowIconDots}></span>
            </th>
          </tr>
          {playListsSongs?.map((song) => (
            <TableRow key={song.id} song={song} />
          ))}
        </table>
      </div>
    </div>
  )
}
