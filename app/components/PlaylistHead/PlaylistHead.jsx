"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faMusic, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AddPlaylist, UploadImage } from '..';
import { Modal } from '@mui/material';
import styles from './playlistHead.module.css';


export default function PlaylistHead({ isForCreate, title }) {
  const [file, setFile] = useState("");
  const [input, setInput] = useState({ name: title, description: "", ImgSrc: "" });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inputHandler = (e) => {
    const fieldInput = e.target.name;
    const fieldValue = e.target.value;
    setInput({ ...input, [fieldInput]: fieldValue });
  };

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  }

  return (
    <div className={styles.playlitsTop}>
      <div className={styles.playlitsTopBg} />
      <div className={styles.playlistTopLeft}>
        <UploadImage
          handleOpen={handleOpen}
          fileHandler={fileHandler} 
          file={file}
          setFile={setFile}
        />
        {/* <Image width={230} height={230} src='/imgs/cards/c2.jpg' alt='' /> */}
      </div>
      <div className={styles.playlistTopRight}>
        <span className={styles.playlistTopSmall}>Playlist</span>
        <h1 className={styles.playlistTopTitle} onClick={handleOpen}>{title}</h1>
        {!isForCreate 
          ?<>
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
          </>
          :<div className={styles.accountBox}>
            <Image className={styles.accountBoxImg} width={36} height={36} src='/imgs/my-profile-image.jpg' alt='myprofile' />
            <Link href="/account" className={styles.accountBoxName}>Ahmed Khaled</Link>
          </div>
        }
      </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.playlistEditModal}>
          <AddPlaylist
            handleClose={handleClose}
            handleOpen={handleOpen} 
            input={input}
            inputHandler={inputHandler}
            fileHandler={fileHandler} 
            file={file}
            setFile={setFile}
          />
        </div>
      </Modal>
      </div>
  )
}
