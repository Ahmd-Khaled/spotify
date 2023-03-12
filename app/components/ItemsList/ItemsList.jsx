"use client";
import { useGetTopChartsQuery } from '@/app/GlobalRedux/services/shazamCore';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SongCard } from '..';
import styles from './itemsList.module.css';

export default function ItemsList({ itemsList, title, link }) {
  const [listLength, setListLength] = useState(5);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  // console.log(itemsList?.length);

  const playList = itemsList?.slice(0, listLength);

  // console.log(playList);

  const showAllHandler = () => {
    setListLength(itemsList?.length)
  }

  return (
    <div className={styles.contWrapper}>
      <div className={styles.contTop}>
        <Link className={styles.contLink} href={link}>{title}</Link>
        <button className={styles.contShowAll} onClick={showAllHandler}>Show all</button>
      </div>
      <ul className={styles.contList}>
        {playList?.map((song, i) => (
          <li key={song.key} className={styles.contListItem}>
            <SongCard
              i={i}
              song={song}
              activeSong={activeSong}
              isPlaying={isPlaying}
              data={data?.tracks}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
