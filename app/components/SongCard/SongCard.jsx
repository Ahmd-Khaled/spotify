import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { PlaySong } from '..';
import styles from './songCard.module.css';

export default function SongCard({id, link, img, title, about}) {
  return (
    <Link href={'/'} className={styles.sCard}>
      <div className={styles.sCardTop}>
        <Image className={styles.sCardImg} width={162} height={162} src={`/imgs/cards/${img}`} alt={title} />
        <div className={styles.sCardPlay}>
          <FontAwesomeIcon className={styles.sCardPlayIcon} icon={faPlay} />
        </div>
      </div>
      <div className={styles.sCardBottom}>
        <h4 className={styles.sCardTitle}>{title}</h4>
        <p className={styles.sCardAbout}>{about}</p>
      </div>
    </Link>
  )
}
