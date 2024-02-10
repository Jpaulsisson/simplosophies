'use client';

import { Datepicker } from '@/components';
import React, { useState } from 'react';
import styles from './Discover.module.css';
import { countryCodes } from '@/utils/constants';
import { Urbanist } from 'next/font/google';

const font = Urbanist({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})

export default function Discover() {

  const [selectedCountry, setSelectedCountry] = useState<string>("United States")
  console.log(countryCodes[selectedCountry])

  return (
    <div className={styles.container}>
      <select onChange={e => setSelectedCountry(e.target.value)} className={`${font.className} ${styles.selectCountry}`} defaultValue={selectedCountry}>
        {Object.keys(countryCodes).map((country) => {
          return <option key={country}>{country}</option>
        })}
      </select>
      <Datepicker />
    </div>
  )
}
