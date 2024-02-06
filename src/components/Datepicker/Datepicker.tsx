'use client';

import React, { useEffect, useState } from 'react';
import styles from './Datepicker.module.css';
import { monthNames, dayNames, generateYearList } from '@/utils/date-helpers';
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

  const options = generateYearList(year);

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

  function handleSelectYear(newYear: number) {
    setSelectedDate({
      day,
      month,
      year: newYear,
    })
  }

  function handleSelectDate(newDay: number) {
    setSelectedDate({
      day: newDay,
      month,
      year,
    })
  }

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>Selected Date is: </h2>
        <p className={styles.subheader}>{`${formatDate(day, month, year)}`}</p>
      </div>
      <div className={styles.pickerContainer}>
        <div className={styles.pickerHeader}>
          <h2>{formatDate(day, month, year)}</h2>
        </div>
        <div className={styles.yearContainer}>
          <button className={styles.yearDropdownButton} onClick={() => setDropdownOpen(prev => !prev)}>
            <h3>{formatMonthYear(month, year)}</h3>
            <IoMdArrowDropdown />
          </button>
          <div className={!dropdownOpen ? styles.yearDropdown : `${styles.yearDropdown} ${styles.active}`}>
            {options.map((year) => {
              return <button onClick={() => handleSelectYear(year)} className={styles.yearOption} key={year}>{year}</button>
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
        <div className={styles.dayNames}>
          {dayNames.map((dayName, idx) => {
            return <h3 key={idx}>{dayName}</h3>
          })}
        </div>
        <Calendar selectedDate={selectedDate} selectDay={handleSelectDate} activeDate={{ day: 5, month: 3, year: 2024 }} />
      </div>
    </div >
  )
}

export default Datepicker
