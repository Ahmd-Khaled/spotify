"use client";
import { songsList, spotifyPlaylists } from '../../utils/lists';
import { ItemsList, SongCard } from '..';
import { useGetTopChartsQuery } from '@/app/GlobalRedux/services/shazamCore';
import styles from './content.module.css';

export default function Content() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  return (
    <div className={styles.content}>
      <ItemsList  itemsList={data?.tracks} title='Focus' link='/focus' />      
      {/* <ItemsList itemsList={spotifyPlaylists.slice(0, 5)} title='Spotify Playlists' link='/spotify-Playlists' /> */}
    </div>
  )
}
