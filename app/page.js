'use client'
import { Inter } from 'next/font/google';
import styles from './page.module.css';

import localFont from 'next/font/local';
import Main from './components/Main';


const myFont = localFont({ src: './Bloomer_DEMO.otf' });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Main myFont={myFont} />


    </main>
  )
}
