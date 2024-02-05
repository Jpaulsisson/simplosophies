'use client';

import React, { useState } from 'react';
import styles from './Datepicker.module.css';
import { monthNames, dayNames, generateMonthYearList } from '@/utils/date-helpers';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function formatDate(date: number, month: number, year: number) {
  if (date && month && year) return monthNames[month] + ' ' + date + ', ' + year;
}

function formatMonthYear(month: number, year: number) {
  if (month && year) return monthNames[month] + ' ' + year;
}

// function toggleMonthYearDropdown() {

// }

const options = generateMonthYearList(2, 2024);

function Datepicker() {
  const date = new Date();

  const easyDate = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }

  const [selectedDate, setSelectedDate] = useState(easyDate)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { day, month, year } = selectedDate;


  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>Today is: </h2>
        <p className={styles.subheader}>{`${formatDate(day, month, year)}`}</p>
      </div>
      <div className={styles.pickerContainer}>
        <div className={styles.pickerHeader}>
          <h2>{formatDate(day, month, year)}</h2>
        </div>
        <div className={styles.monthYearContainer}>
          <button className={styles.monthYearDropdownButton} onClick={() => setDropdownOpen(prev => !prev)}>
            <h3>{formatMonthYear(month, year)}</h3>
            <IoMdArrowDropdown />
          </button>
          <div className={!dropdownOpen ? styles.monthYearDropdown : `${styles.monthYearDropdown} ${styles.active}`}>
            {options.map(({ month, year }) => {
              return <button onClick={() => console.log(month, year)} className={styles.monthYearOption} key={`${month}--${year}`}>{month}, {year}</button>
            })}
          </div>
          <div className={styles.prevNextContainer}>
            <button className={styles.prevNextButton}>
              <FaChevronLeft />
            </button>
            <button className={styles.prevNextButton}>
              <FaChevronRight />
            </button>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Datepicker
