'use client';

import { Datepicker } from '@/components';
import React, { useEffect, useState } from 'react';
import styles from './Explore.module.css';
import { Urbanist } from 'next/font/google';
import { HistoricalData } from '@/utils/types';

const font = Urbanist({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})



export default function Discover() {

  const [historicalData, setHistoricalData] = useState<HistoricalData | null | undefined>();
  const [amount, setAmount] = useState(10);

  useEffect(() => {
    console.log(historicalData)
  }, [historicalData])

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
      {historicalData &&
        <div className={styles.historicalDataContainer}>
          <div className={styles.listContainer}>
            <h2 className={styles.itemListHeader}>Highlights:</h2>
            <ul className={styles.itemList}>
              {historicalData.selected.map((item, index) => {
                if (index < amount) {
                  return <li key={item.text} className={styles.listItem}>
                    <p><span className={styles.listItemTitle}>What:</span> {item.text}</p>
                    <p><span className={styles.listItemTitle}>When:</span> {item.year}</p>
                  </li>
                }
                else return null
              })}
            </ul>
          </div>
          <div>
            <h2 className={styles.itemListHeader}>Births:</h2>
            <ul className={styles.itemList}>
              {historicalData.births.map((birth, index) => {
                if (index < amount) {
                  return <li key={birth.text} className={styles.listItem}>
                    <p><span className={styles.listItemTitle}>Who:</span> {birth.text}</p>
                    <p><span className={styles.listItemTitle}>When:</span> {birth.year}</p>
                  </li>
                }
                else return null
              })}
            </ul>
          </div>
          <div>
            <h2 className={styles.itemListHeader}>Deaths:</h2>
            <ul className={styles.itemList}>
              {historicalData.deaths.map((death, index) => {
                if (index < amount) {
                  return <li key={death.text} className={styles.listItem}>
                    <p className={styles.listInfo}><span className={styles.listItemTitle}>Who:</span> {death.text}</p>
                    <p className={styles.listInfo}><span className={styles.listItemTitle}>When:</span> {death.year}</p>
                  </li>
                }
                else return null
              })}
            </ul>
          </div>
        </div>}
    </div>
  )
}
