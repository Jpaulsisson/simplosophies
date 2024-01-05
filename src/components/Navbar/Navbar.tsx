'use client';
import Link from 'next/link';
import React from 'react'
import styles from './Navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {

  const { data: session } = useSession()

  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href={'/'}>
        <h1 className={styles.logoText}>Simpl<span className={styles.logoSpan}>osophies</span></h1>
      </Link>
      <button className={styles.loginBtn} onClick={session ? () => signOut() : () => signIn('github')}>{session ? 'Sign out' : 'Login'}</button>
    </nav>
  )
}
