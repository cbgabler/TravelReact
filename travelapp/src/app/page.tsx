// pages/Home.tsx
import Image from 'next/image'; // Assuming you need to import Image, but not used in this snippet
import Navbar from '../components/Navbar';
import styles from './page.module.css'; // Ensure this file exists and contains your desired styles
import Main from '../pages/home'; // Ensure you import the Main component correctly

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className="signup-container">
          <Main /> {/* Main component will handle displaying posts and creating new ones */}
        </div>
      </div>
    </>
  );
}
