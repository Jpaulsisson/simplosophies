'use client';

import React, { useEffect, useState } from 'react';
import styles from './Datepicker.module.css';
import { monthNames, dayNames, generateMonthYearList } from '@/utils/date-helpers';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Calendar from './Calendar';


function formatDate(date: number, month: number, year: number) {
  return monthNames[month] + ' ' + date + ', ' + year;
}

function formatMonthYear(month: number, year: number) {
  return monthNames[month] + ' ' + year;
}

function Datepicker() {
  const date = new Date();

  const [selectedDate, setSelectedDate] = useState({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  })
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { day, month, year } = selectedDate;

  const options = generateMonthYearList(month, year);

  function handlePrevMonth() {
    setSelectedDate({
      day,
      month: month === 0 ? 11 : month - 1,
      year: month === 0 ? year - 1 : year,
    })
  }

  function handleNextMonth() {
    setSelectedDate({
      day,
      month: month === 11 ? 0 : month + 1,
      year: month === 11 ? year + 1 : year,
    })
  }

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

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
            <button className={styles.prevNextButton} onClick={handlePrevMonth}>
              <FaChevronLeft />
            </button>
            <button className={styles.prevNextButton} onClick={handleNextMonth} >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <Calendar startDate={`${month + 1}-${day}-${year}`} />
      </div>
    </div >
  )
}

export default Datepicker
