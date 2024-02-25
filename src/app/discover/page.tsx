'use client';

import { Datepicker } from '@/components';
import React, { useState } from 'react';
import styles from './Discover.module.css';
import { Urbanist } from 'next/font/google';

const font = Urbanist({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})

export default function Discover() {

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
      </div>
      <div className={styles.pickerAndListContainer}>
        <Datepicker />
      </div>
    </div>
  )
}
