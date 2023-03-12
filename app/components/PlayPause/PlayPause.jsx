import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './playPause.module.css';

export default function PlayPause({ song, handlePause, handlePlay, activeSong, isPlaying }) {
  return (
    isPlaying && activeSong?.title === song.title ? (
      <FontAwesomeIcon
        className={styles.playPauseIcon}
        onClick={handlePause}
        icon={faPause} 
      />
    ) : (
        <FontAwesomeIcon
          className={styles.playPauseIcon}
          onClick={handlePlay}
          icon={faPlay} 
        />
    )
  );
}
