// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLinks}>
          <Link href="">Home</Link>
          <Link href="/trips">My Trips</Link>
          <Link href="/signIn">Sign In</Link>
          <Link href="/profiles">Profiles</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
