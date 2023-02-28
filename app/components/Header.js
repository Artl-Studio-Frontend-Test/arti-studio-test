'use client'
import React from 'react';
import localFont from 'next/font/local';
import {  useEffect,useState } from 'react';


import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const myFont = localFont({ src: '../Bloomer_DEMO.otf' });

export default function Header() {
    const useWindowDimensions = () => {
        //to calculate the screen width
        const hasWindow = typeof window !== "undefined"


        function getWindowDimensions() {
            const width = hasWindow ? window.innerWidth : null
            const height = hasWindow ? window.innerHeight : null
            return {
                width,
                height,
            }
        }

        const [windowDimensions, setWindowDimensions] = useState(
            getWindowDimensions()
        )

        useEffect(() => {
            if (hasWindow) {
                function handleResize() {
                    setWindowDimensions(getWindowDimensions())
                }

                window.addEventListener("resize", handleResize)
                return () => window.removeEventListener("resize", handleResize)
            }
        }, [hasWindow])

        return windowDimensions
    }

    const { height, width } = useWindowDimensions()
    const breakpoint = 768
    
    function linkHanldle(...classes) {
        return classes.filter(Boolean).join(" ");
    }


    return (
        <header className='bg-[#1b1b1b] border-b-[1px] border-[#afafaf]'>



            {width <= breakpoint ? 
                

                    <MobileMenu  myFont={myFont} />
               

             : 
                <DesktopMenu 
                myFont={myFont}
                />

            }




        </header>
    )
}