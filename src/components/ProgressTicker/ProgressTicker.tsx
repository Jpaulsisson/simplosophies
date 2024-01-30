'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { MdLightbulb, MdLightbulbOutline } from 'react-icons/md'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import styles from './ProgressTicker.module.css';

type ProgressTickerProps = {
  length: number;
  activeIdx: number;
  setActiveIdx: Dispatch<SetStateAction<number>>;
}

const iconStyles = {
  arrows: { color: "var(--darkAccent)", height: 28, width: 28 },
  offBulb: { color: '#222222', height: 12, width: 12 },
  onBulb: { color: 'var(--primaryAccent)', height: 20, width: 20 },
}

function ProgressTicker({ length, activeIdx, setActiveIdx }: ProgressTickerProps) {

  const progressTickerLength = new Array(length).fill('');

  function handleNext() {
    activeIdx < progressTickerLength.length - 1 ?
      setActiveIdx(prev => prev + 1)
      :
      setActiveIdx(0);
  }

  function handlePrev() {
    activeIdx > 0 ?
      setActiveIdx(prev => prev - 1)
      :
      setActiveIdx(progressTickerLength.length - 1);
  }

  return (
    <div className={styles.buttons}>
      <button className={styles.icons} onClick={handlePrev}>
        <FaCircleChevronLeft style={iconStyles.arrows} />
      </button>
      {progressTickerLength.map((_, index) => {
        return (
          <div key={index} onClick={() => setActiveIdx(index)} className={styles.bulbs}>
            {
              index === activeIdx ?
                <MdLightbulb style={iconStyles.onBulb} />
                :
                <MdLightbulbOutline style={iconStyles.offBulb} />
            }
          </div>
        )
      })}
      <button className={styles.icons} onClick={handleNext}>
        <FaCircleChevronRight style={iconStyles.arrows} />
      </button>
    </div>
  )
}

export default ProgressTicker
