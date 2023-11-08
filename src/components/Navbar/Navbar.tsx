import Link from 'next/link';
import React from 'react'
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav>
      <Link className={styles.logo} href={'/'}>
        <h1>Simpl<span className={styles.logoSpan}>osophies</span></h1>
      </Link>
    </nav>
  )
}
