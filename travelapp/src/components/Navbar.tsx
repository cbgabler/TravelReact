import React from 'react';
import Link from 'next/link';

import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1>Travel App</h1>
      <ul className={styles.navList}>
        <li className={styles.navpage}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navpage}>
          <Link href="/profiles">Profiles</Link>
        </li>
        <li className={styles.navpage}>
          <Link href="/signIn">Sign In</Link>
        </li>
      </ul>
    </header>
  );
}