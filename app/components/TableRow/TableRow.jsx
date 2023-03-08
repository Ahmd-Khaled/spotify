import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import styles from './tableRow.module.css';

export default function TableRow({ song }) {
  const {id, img, title, author, album, dateAdded, duration, more, library, link} = song;
  
  return (
    <tr className={styles.playlistTableRow}>
      <td className={styles.playlistTableCell1}>
        <span className={styles.playlistTableCellNumber}>{id}</span>
        <FontAwesomeIcon className={styles.playlistTableRowIconPlay} icon={faPlay} />
      </td>
      <td className={styles.playlistTableCell2}><Image width={40} height={40} src={`/imgs/table/${img}`} alt={title} /></td>
      <td className={styles.playlistTableCell3}>
        <Link href='/'>{title}</Link>
        <Link href='/'>{author}</Link>
      </td>
      <td className={styles.playlistTableCell4}>
        <Link href='/'>{album}</Link>
      </td>
      <td className={styles.playlistTableCell5}>{dateAdded}</td>
      <td className={styles.playlistTableCell6}>
        <FontAwesomeIcon className={styles.playlistTableRowIconHeart} icon={faHeart} />
        <span>{duration}</span>
        <FontAwesomeIcon className={styles.playlistTableRowIconDots} icon={faEllipsis} />
      </td>
    </tr>
  )
}
