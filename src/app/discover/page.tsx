'use client';

import { Datepicker } from '@/components';
import React, { useState } from 'react';
import styles from './Discover.module.css';
import { countryCodes } from '@/utils/constants';
import { Urbanist } from 'next/font/google';
import { HolidayData } from '@/utils/types';

const font = Urbanist({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})

export default function Discover() {

  const [selectedCountry, setSelectedCountry] = useState<string>("United States")
  const [holidays, setHolidays] = useState<HolidayData[] | []>([])

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <select onChange={e => setSelectedCountry(e.target.value)} className={`${font.className} ${styles.selectCountry}`} defaultValue={selectedCountry}>
          {Object.keys(countryCodes).map((country) => {
            return <option key={country}>{country}</option>
          })}
        </select>
      </div>
      <div className={styles.pickerAndListContainer}>
        <Datepicker setHolidays={setHolidays} selectedCountry={selectedCountry} />
        <ul className={styles.holidayList}>
          {holidays &&
            holidays.map((holiday) => {
              return <li className={styles.holidayItem} key={holiday.name}>{holiday.name}</li>
            })
          }
          {holidays.length === 0 && 
          <div>
            <h3>Search for holidays!</h3>
            <p>If nothing appears here after clicking ok that means there are no holidays known for the chosen country and the given date</p>
          </div>
          }
        </ul>
      </div>
    </div>
  )
}
