import { playListsSongs } from '@/app/utils/lists';
import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { PlaySong, TableRow } from '..';
import styles from './playlist.module.css';

export default function Playlist() {
  return (
    <div className={styles.playlist}>
      <div className={styles.playlitsTop}>
        <div className={styles.playlitsTopBg} />
        <div className={styles.playlistTopLeft}>
          <Image className={styles.playlistTopImg} width={230} height={230} src='/imgs/cards/c2.jpg' alt='' />
        </div>
        <div className={styles.playlistTopRight}>
          <span className={styles.playlistTopSmall}>Playlist</span>
          <h1 className={styles.playlistTopTitle}>Deep Focus</h1>
          <p className={styles.playlistTopTxt}>Keep calm and focus with ambient and post-rock music.</p>
          <div className={styles.playlistStatistics}>
            <div className={styles.playlistSpotify}>
              <Image className={styles.playlistSpotifyImg} width={25} height={25} src='/imgs/Spotify_logo_without_text.svg.png' alt='' />
              <Link className={styles.playlistSpotifyLink} href='/'>Spotify</Link>
            </div>
            <span className={styles.playlistStatsLikes}>3,880,394 likes</span>
            <span className={styles.playlistStatsSongs}>234 songs,</span>
            <span className={styles.playlistStatsDuration}>about 9 hr 30 min</span>
          </div>
        </div>
      </div>
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
