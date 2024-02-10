import React from 'react'
import styles from './Calendar.module.css';
import { generateCalendarMonth } from '@/utils/date-helpers'
import { AnimatePresence, motion } from 'framer-motion';

type SelectedDate = {
  day: number,
  month: number,
  year: number,
}

type CalendarProps = {
  selectedDate: SelectedDate;
  selectDay: (newDay: number) => void;
  activeDate: SelectedDate;
}

function Calendar({ selectedDate, selectDay, activeDate }: CalendarProps) {

  const { day, month, year } = selectedDate;

  const calendarMonth = generateCalendarMonth(month + 1, day, year);

  function highlightActiveDate(day: number) {
    return month === activeDate.month && year === activeDate.year && day === activeDate.day;
  }

  return (
    <AnimatePresence>
      <div className={styles.container} >
        {calendarMonth.map((day, index) => {
          return <motion.button initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.3 }} disabled={day === ''} onClick={() => selectDay(Number(day))} className={highlightActiveDate(Number(day)) ? styles.activeDate : styles.dates} key={`${day}-${index}`}>{day}</motion.button>
        })

        }
      </div>
    </AnimatePresence>
  )
}

export default Calendar
