import React from "react";
import { Icon } from '@iconify/react';

import style from "../styles/main.module.css";
import MainCarousel from "./MainCarousel";


export default function Main(props) {

  return (
    <div className={style.wp_caption} >
      

      <div className={style.wp_caption_text}>

        <h2 className={`${style.lineUp} ${props.myFont.className}`}>COLLECT BEANS on
        </h2>

        <h1 className={`${style.lineUp2} ${props.myFont.className}`}>THE METAVERSE</h1>

        <h1 className={`${style.lineUp3} `}>5000 confused beans who've somehow made their
        </h1>
        <h1 className={`${style.lineUp3} `}> way into the metaverse. Only on Solana
        </h1>

        <section className="mt-8">

        <button className={`${style.button_21} ${props.myFont.className}`} role="button">buy a bean</button>
        <button className={`${style.button_22} ${props.myFont.className}`} role="button">create <Icon icon="heroicons:plus-small-20-solid" color="white" /></button>
        </section>

        <MainCarousel/>


      </div>
        
    </div>
  )
}