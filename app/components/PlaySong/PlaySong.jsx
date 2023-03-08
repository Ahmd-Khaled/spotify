import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './playSong.module.css';

export default function PlaySong({opacity, width}) {
  return (
    <div className={styles.sCardPlay} style={{opacity: opacity, width:width, height:width}}>
      <FontAwesomeIcon className={styles.sCardPlayIcon} icon={faPlay} />
    </div>
  )
}
