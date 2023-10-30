import React from 'react'
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav>
      <h1 className={styles.logo}>Simpl<span className={styles.logoSpan}>osophies</span></h1>
    </nav>
  )
}
