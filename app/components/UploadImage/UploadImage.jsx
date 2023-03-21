"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMusic, faPen } from '@fortawesome/free-solid-svg-icons';
import styles from './uploadImage.module.css';
import Image from 'next/image';


export default function UploadImage({ handleOpen, file, setFile, fileHandler }) {
  const [isUploadImgHovered, setIsUploadImgHovered] = useState(false);
  const [showChangeImage, setShowChangeImage] = useState(false);

  const uploadImgHandler = () => setIsUploadImgHovered(true);

  const uploadImgHandlerDisabled = () => {
    setIsUploadImgHovered(false);
    setShowChangeImage(false);
  }

  const editPhotoHandler = () => setShowChangeImage(!showChangeImage);

  const fileInputID = "uploadImg";
  const EditImage = () => (
    <div className={isUploadImgHovered ? styles.uploadImageEditDisplayed : styles.uploadImageEdit}>
      <div onClick={editPhotoHandler} className={styles.uploadImageEditBtn}>
        <FontAwesomeIcon className={styles.uploadImageEditIcon} icon={faEllipsis} />
      </div>
      {showChangeImage && <div className={styles.uploadImageChangeBtns}>
        <label htmlFor={fileInputID} className={styles.uploadImageChangeBtn}>Change photo</label>
        <button className={styles.uploadImageChangeBtn} onClick={() => setFile("")}>Remove photo</button>
      </div>}
    </div>
  );

  return (
    <div className={styles.uploadImageWrapper}>
      {file  
        ?<div className={styles.imgBox} onMouseEnter={uploadImgHandler} onMouseLeave={uploadImgHandlerDisabled}>
          <Image
            src={file
                  ? URL.createObjectURL(file)
                  : '/imgs/no-image-icon-0.jpg'
              }
            alt=''
            width={192}
            height={192}
            className={styles.playlistImage}
          />
          <EditImage />
        </div>
        :<div
          className={styles.playlistTopImage}
          onMouseEnter={uploadImgHandler}
          onMouseLeave={uploadImgHandlerDisabled}
        >
          {!isUploadImgHovered && <FontAwesomeIcon className={styles.playlistTopImageIcon} icon={faMusic} /> }
          {isUploadImgHovered &&
            <label htmlFor={fileInputID} className={styles.playlistUploadImage} onClick={handleOpen}>
              <FontAwesomeIcon className={styles.playlistUploadImageIcon} icon={faPen} />
              <span>Choose photo</span>
            </label>
          }
          <EditImage />
        </div>
      }
      <input
        className={styles.playlistUploadImageInput}
        id={fileInputID}
        type="file"
        name="ImgSrc"
        // value={input?.["ImgSrc"]} 
        // onChange={inputHandler}
        onChange={fileHandler}
      />
    </div>
  )
}
