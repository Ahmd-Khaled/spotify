"use client";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { PlayPause, PlaySong } from '..';
import { playPause, setActiveSong } from '../../GlobalRedux/Features/player/playerSlice';
import styles from './songCard.module.css';

export default function SongCard({ song, i, activeSong, isPlaying, data }) {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <Link href={'/'} className={styles.sCard}>
      <div className={styles.sCardTop}>
        <div className={`${styles.sCardPlayPause} {${activeSong?.title} === ${song.title} ? ${styles.sCardPlayPauseActive} : ${styles.sCardPlayPauseHidden}}`}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        </div>
        <img className={styles.sCardImg} width={162} height={162} src={song.images?.coverart} alt={''} />
      </div>
      <div className={styles.sCardBottom}>
        <h4 className={styles.sCardTitle}>{song.title}</h4>
        <p className={styles.sCardAbout}>{song.subtitle}</p>
      </div>
    </Link>
  )
}
