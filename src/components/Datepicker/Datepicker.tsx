'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './Datepicker.module.css';
import { generateYearList, formatDate, formatMonthYear } from '@/utils/date-helpers';
import { dayNames } from '@/utils/constants';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Calendar from './Calendar';
import { HolidayData } from '@/utils/types';

type DatepickerProps = {
  setHolidays: Dispatch<SetStateAction<HolidayData[]>>;
};

function Datepicker({ setHolidays }: DatepickerProps) {
  const date = new Date();

  const [currentlyViewedDate, setCurrentlyViewedDate] = useState({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  });
  const [activeDate, setActiveDate] = useState(currentlyViewedDate);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { day, month, year } = currentlyViewedDate;

  const options = generateYearList(date.getFullYear());

  function handlePrevMonth() {
    setCurrentlyViewedDate({
      day,
      month: month === 0 ? 11 : month - 1,
      year: month === 0 ? year - 1 : year,
    })
  };

  function handleNextMonth() {
    setCurrentlyViewedDate({
      day,
      month: month === 11 ? 0 : month + 1,
      year: month === 11 ? year + 1 : year,
    })
  };

  function handleSelectYear(newYear: number) {
    setCurrentlyViewedDate({
      day,
      month,
      year: newYear,
    })
  };

  function handleSelectDate(newDay: number) {
    setCurrentlyViewedDate({
      day: newDay,
      month,
      year,
    })
    setActiveDate({
      day: newDay,
      month,
      year,
    })
  };

  return (
    <div className={styles.container}>
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
        <Calendar currentlyViewedDate={currentlyViewedDate} selectDay={handleSelectDate} activeDate={activeDate} />
        <div className={styles.confirmButtonsContainer}>
          <button className={styles.cancelButton}>Cancel</button>
          <button className={styles.confirmButton}>OK</button>
        </div>
      </div>
    </div >
  )
}

export default Datepicker
