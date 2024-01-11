'use client';

import React, { ChangeEvent, useContext } from 'react';
import { useState } from 'react';
import styles from './write.module.css';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/utils';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { error } from 'console';
import { GlobalContext } from '@/context';

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://simplosophies.appspot.com');

function createUniqueFileName(fileName: string) {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${timestamp}-${randomString}`
}

async function handleSaveImageToFirebase(file: any) {
  const getUniqueFileName = createUniqueFileName(file?.name);
  const storageRef = ref(storage, `blog/${getUniqueFileName}`);
  const uploadImage = uploadBytesResumable(storageRef, file);

  return new Promise((res, rej) => {
    uploadImage.on('state_changed', (snapshot) => { }, (error) => rej(error), () => {
      getDownloadURL(uploadImage.snapshot.ref).then(url => res(url)).catch(error => rej(error))
    })
  })
}


function Write() {
  const { blogData, setBlogData } = useContext(GlobalContext)
  const [password, setPassword] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  async function handleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    setImageLoading(true);
    const saveImageToFirebase: any = await handleSaveImageToFirebase(event.target.files[0])

    if (saveImageToFirebase !== '') {
      setImageLoading(false);
      setBlogData({
        ...blogData,
        image: saveImageToFirebase,
      })
    }
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target.value
    setPassword(target);
  }

  return (
    <div className={styles.container}>
      {password === process.env.NEXT_PUBLIC_PAUL_PASSWORD ?
        <>
          <div className={styles.welcomeContainer}>
            <h2 className={styles.header}>Hi Paul</h2>
            <p className={styles.subheader}>Let&apos;s write down some thoughts.</p>
          </div>
          <div className={styles.writingContainer}>
            <div className={styles.titleContainer}>
              <label className={styles.titleLabel} htmlFor='title'>Title</label>
              <input className={styles.titleInput} type="text" name="title" id="title" />
            </div>
            <div className={styles.postImageContainer}>
              <label className={styles.postImageLabel} htmlFor='postImage'>Choose a post image</label>
              <input className={styles.postImageInput} onChange={handleChangeImage} type="file" max={1000000} accept='image/*' name="postImage" id="postImage" />
            </div>
          </div>
        </>
        :
        <div className={styles.passwordContainer}>
          <label className={styles.passwordLabel}>Password:</label>
          <input className={styles.passwordInput} value={password} type='password' onChange={handlePasswordChange} />
        </div>
      }
    </div>
  )
}

export default Write
