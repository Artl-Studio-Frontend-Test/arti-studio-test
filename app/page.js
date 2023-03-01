'use client'
import { Inter } from 'next/font/google';
import styles from './page.module.css';

import localFont from 'next/font/local';
import Main from './components/Main';
import Gang from './components/Gang';
import About from './components/About';
import Team from './components/Team';
import Asked from './components/Asked';
import Join from './components/Join';

const myFont = localFont({ src: './Bloomer_DEMO.otf' });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Main myFont={myFont} />
      <Gang/>
      <About myFont={myFont}/>
      <Team myFont={myFont}/>
      <Asked myFont={myFont}/>
      <Join myFont={myFont}/>

    </main>
  )
}
