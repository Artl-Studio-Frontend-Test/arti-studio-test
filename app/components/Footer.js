'use client'
import React from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import style from "../styles/footer.module.css";

const myFont = localFont({ src: '../Bloomer_DEMO.otf' });

export default function Footer() {





    return (
        <section className={`bg-[#1b1b1b] border-b-[1px] border-[#afafaf] pb-[3rem] ${style.center} `}>


            <div className={style.div1}>
                <Link className='flex' href='/'>
                    <Image
                        src="/assets/logo.png"
                        width={30}
                        height={30}
                        alt="logo"
                        className='h-12 mt-2'
                    >
                    </Image>

                    <span className={`${myFont.className} text-[#fbfcf8] text-[24px] mt-5 ml-2`}>mabeans.</span>
                </Link>

                <div className={style.nav1}>
                    <div className={style.space}>

                        <Link className='text-[#afafaf] mx-6 mt-1  ' href='/'>Win A NFT</Link>
                    </div>
                    <div className={style.space}>

                        <Link className='text-[#afafaf] mx-6 mt-1  ' href='/'>Atrributs</Link>
                    </div>
                    <div className={style.space}>
                        <Link className='text-[#afafaf] mx-6 mt-1' href='/'>Spacs</Link>
                    </div>
                    <div className={style.space}> 

                        <Link className='text-[#afafaf] mx-6 mt-1 ' href='/'>Team</Link>
                    </div>
                    <div className={style.space}>

                        <Link className='text-[#afafaf] mx-6 mt-1 ' href='/'>FAQ</Link>
                    </div>




                </div>


                <section className='flex mt-4'>
                    <Icon icon="skill-icons:discord" width="35" height="35" className='rounded-full mx-2' />
                    <Icon icon="skill-icons:twitter" color="#2099e8" width="35" height="35" className='rounded-full mx-2' />

                </section>
            </div>


        </section>
    )
}