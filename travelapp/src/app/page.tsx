import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import Main from '../pages/home';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <Image
          src="/path-to-your-image.jpg"
          alt="Your Image Description"
          width={500}
          height={300}
          className={styles.heroImage}
        />
        <Main />
      </div>
    </>
  );
}
