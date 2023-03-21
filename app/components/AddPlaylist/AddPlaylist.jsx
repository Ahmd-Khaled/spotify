"use client";
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { UploadImage } from '..';
import styles from './addPlaylist.module.css';


export default function AddPlaylist({ handleClose, handleOpen, input, inputHandler, fileHandler, file, setFile }) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.addPlaylist} onSubmit={submitHandler}>
      <div className={styles.addPlaylistHead}>
        <h5 className={styles.addPlaylistHeadTitle}>Edit details</h5>
        <FontAwesomeIcon className={styles.addPlaylistHeadIcon} icon={faXmark} onClick={handleClose} />
      </div>
      {input["name"].length === 0 &&
        <div className={styles.addPlaylistError}>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <span className={styles.addPlaylistNote}>Playlist name is required.</span>
        </div>
      }
      {input["name"].length > 0 && file &&
        <div className={styles.addPlaylistNoError}>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <span className={styles.addPlaylistNote}>{"Press save to keep changes you've made."}</span>
        </div>
      }
      <div className={styles.addPlaylistBody}>
        <div className={styles.addPlaylistBodyLeft}>
          <UploadImage
            handleOpen={handleOpen} 
            input={input}
            inputHandler={inputHandler}
            fileHandler={fileHandler} 
            file={file}
            setFile={setFile}
          />
        </div>
        <div className={styles.addPlaylistBodyRight}>
          <div className={input["name"].length === 0 ? styles.addPlaylistInputBoxEmpty : styles.addPlaylistInputBox}>
            <label className={styles.addPlaylistInputBoxLabel}>Name</label>
            <input
              type='text'
              placeholder='Add a name' 
              name="name"
              value={input["name"]}
              onChange={inputHandler}
              className={styles.addPlaylistInputBoxInput}
            />
          </div>
          <div className={styles.addPlaylistInputBox}>
            <label className={styles.addPlaylistInputBoxLabel}>Description</label>
            <textarea
              rows={4}
              placeholder='Add an optional description' 
              name="description"
              value={input["description"]}
              onChange={inputHandler}
              className={styles.addPlaylistInputBoxTextarea}
            />
          </div>
        </div>
      </div>
      <div className={styles.addPlaylistFooter}>
        <button className={styles.addPlaylistBtn}>Save</button>
        <p className={styles.addPlaylistFooterTxt}>By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
      </div>
    </form>
  )
}

