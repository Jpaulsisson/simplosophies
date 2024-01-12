'use client';

import React, { ChangeEvent, useContext } from 'react';
import { useState } from 'react';
import styles from './write.module.css';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/utils';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { GlobalContext } from '@/context';
import Spinner from '@/components/Spinner';

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

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target.value;
    setBlogData({
      ...blogData,
      title: target,
    })
  }

  function handleFootnoteChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target.value;
    setBlogData({
      ...blogData,
      footnote: target,
    })
  }

  function handleTagsChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target.value;
    setBlogData({
      ...blogData,
      category: target,
    })
  }

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
            <h2 className={styles.header}>Hi Paul,</h2>
            <p className={styles.subheader}>let&apos;s write down some thoughts.</p>
          </div>
          <div className={styles.writingContainer}>
            {/* Title */}
            <input className={styles.titleInput} onChange={handleTitleChange} placeholder='title...' value={blogData.title} type="text" />

            {/* Image */}
            <div className={styles.postImageContainer}>
              <div className={styles.spinnerAndLabelWrapper}>
                <label className={styles.postImageLabel} htmlFor='postImage'>Choose a post image </label>
                <Spinner visible={imageLoading} />
              </div>
              <input className={styles.postImageInput} onChange={handleChangeImage} type="file" max={1000000} accept='image/*' name="postImage" id="postImage" />
            </div>
            {/* Article */}
            <textarea onChange={(e) => setBlogData({ ...blogData, article: e.target.value })} placeholder='thoughts...' className={styles.articleInput} />
            <input className={styles.footnoteInput} type='text' onChange={handleFootnoteChange} value={blogData.footnote} placeholder='TLDR...' />
            <input className={styles.categoryInput} type='text' placeholder='comma-separated tags...' onChange={handleTagsChange} value={blogData.category} />
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
