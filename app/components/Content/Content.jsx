import Link from 'next/link';
import { songsList, spotifyPlaylists } from '../../utils/lists';
import { ItemsList, SongCard } from '..';
import styles from './content.module.css';

export default function Content() {
  return (
    <>
      <ItemsList itemsList={songsList.slice(0, 5)} title='Focus' link='/focus' />
      <ItemsList itemsList={spotifyPlaylists.slice(0, 5)} title='Spotify Playlists' link='/spotify-Playlists' />
    </>
  )
}
