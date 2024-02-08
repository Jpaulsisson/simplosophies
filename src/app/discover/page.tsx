'use client';

import { Datepicker } from '@/components';
import React from 'react';
import styles from './Dates.module.css';

export default function Dates() {
  return (
    <div className={styles.container}>
      <Datepicker />
    </div>
  )
}
