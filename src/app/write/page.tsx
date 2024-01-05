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
    <div>
      {password === process.env.ADMIN_PASSWORD ?
        <>
          <h2>Hi Paul</h2>
          <p>Let&apos;s write down some thoughts.</p>
        </>
        :
        <div className={styles.passwordContainer}>
          <label className={styles.passwordLabel}>Password:</label>
          <input className={styles.passwordInput} value={password} type='password' onChange={handlePasswordChange} />
        </div>
      }
      <div>

      </div>
      <div>

      </div>

    </div>
  )
}

export default Write
