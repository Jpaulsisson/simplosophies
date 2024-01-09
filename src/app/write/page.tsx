'use client';

import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import styles from './write.module.css';

function Write() {

  const [password, setPassword] = useState('');

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
              <input className={styles.postImageInput} type="file" max={1000000} accept='image/*' name="postImage" id="postImage" />
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
