'use client';

import { Datepicker } from '@/components';
import React, { useEffect, useState } from 'react';
import styles from './Explore.module.css';
import { Urbanist } from 'next/font/google';

const font = Urbanist({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})

export default function Discover() {

  const [historicalData, setHistoricalData] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
      </div>
      <div className={styles.pickerContainer}>
        <Datepicker setHistoricalData={setHistoricalData} />
        <div>
          <p>Here you can learn about any day of the year. Information like special events in history, notable births and deaths, or a holiday from around the world that is celebrated.</p>
          {/* Maybe some icons or an image or something */}
        </div>
      </div>
      <div className={styles.historicalDataContainer}>
        {/* TODO: create layout for historical data and create a type for it */}
      </div>
    </div>
  )
}
