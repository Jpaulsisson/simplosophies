'use client';

import { Datepicker } from '@/components';
import React, { useState } from 'react';
import styles from './Explore.module.css';
import { HistoricalData } from '@/utils/types';

export default function Discover() {

  const [historicalData, setHistoricalData] = useState<HistoricalData | null | undefined>();
  const [amounts, setAmounts] = useState({
    highlights: 10,
    births: 10,
    deaths: 10,
    historicEvents: 10,
    holidays: 10,
  });

  // TODO: fix see more buttons
  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
      </div>
      <div className={styles.pickerContainer}>
        <Datepicker setHistoricalData={setHistoricalData} />
      </div>
      {historicalData &&
        <div className={styles.historicalDataContainer}>
          <div className={styles.listContainer}>
            <h2 className={styles.itemListHeader}>Highlights:</h2>
            <ul className={styles.itemList}>
              {historicalData.selected.map((item, index) => {
                if (index < amounts.highlights) {
                  return <li key={item.text} className={styles.listItem}>
                    <p><span className={styles.listItemTitle}>What: </span>{item.text}</p>
                    <p><span className={styles.listItemTitle}>When: </span>{item.year}</p>
                  </li>
                }
                else return null
              })}
            </ul>
            <button className={styles.seeMore} onClick={() => setAmounts((prev) => ({ ...prev, highlights: prev.highlights += 10 }))}>see more</button>
          </div>
          <div className={styles.listContainer}>
            <h2 className={styles.itemListHeader}>Births:</h2>
            <ul className={styles.itemList}>
              {historicalData.births.map((birth, index) => {
                if (index < amounts.births) {
                  return <li key={birth.text} className={styles.listItem}>
                    <p><span className={styles.listItemTitle}>Who:</span> {birth.text}</p>
                    <p><span className={styles.listItemTitle}>When:</span> {birth.year}</p>
                  </li>
                }
                else return null
              })}
            </ul>
            <button className={styles.seeMore} onClick={() => setAmounts((prev) => ({ ...prev, highlights: prev.births += 10 }))}>see more</button>
          </div>
          <div className={styles.listContainer}>
            <h2 className={styles.itemListHeader}>Deaths:</h2>
            <ul className={styles.itemList}>
              {historicalData.deaths.map((death, index) => {
                if (index < amounts.deaths) {
                  return <li key={death.text} className={styles.listItem}>
                    <p className={styles.listInfo}><span className={styles.listItemTitle}>Who:</span> {death.text}</p>
                    <p className={styles.listInfo}><span className={styles.listItemTitle}>When:</span> {death.year}</p>
                  </li>
                }
                else return null
              })}
            </ul>
            <button className={styles.seeMore} onClick={() => setAmounts((prev) => ({ ...prev, highlights: prev.deaths += 10 }))}>see more</button>
          </div>
          <div className={styles.listContainer}>
            <h2 className={styles.itemListHeader}>Historic Events:</h2>
            <ul className={styles.itemList}>
              {historicalData.events.map((death, index) => {
                if (index < amounts.historicEvents) {
                  return <li key={death.text} className={styles.listItem}>
                    <p className={styles.listInfo}><span className={styles.listItemTitle}>Who:</span> {death.text}</p>
                    <p className={styles.listInfo}><span className={styles.listItemTitle}>When:</span> {death.year}</p>
                  </li>
                }
                else return null
              })}
            </ul>
            <button className={styles.seeMore} onClick={() => setAmounts((prev) => ({ ...prev, highlights: prev.historicEvents += 10 }))}>see more</button>
          </div>
          <div className={styles.listContainer}>
            <h2 className={styles.itemListHeader}>Holidays:</h2>
            <ul className={styles.itemList}>
              {historicalData.holidays.map((holiday, index) => {
                if (index < amounts.holidays) {
                  return <li key={holiday.text} className={styles.listItem}>
                    <p className={styles.listInfo}>{holiday.text}</p>
                  </li>
                }
                else return null
              })}
            </ul>
            <button className={styles.seeMore} onClick={() => setAmounts((prev) => ({ ...prev, highlights: prev.holidays += 10 }))}>see more</button>
          </div>
        </div>}
    </div>
  )
}
