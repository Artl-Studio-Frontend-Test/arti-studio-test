import Link from "next/link";
import style from "../styles/asked.module.css";
import { Icon } from '@iconify/react';
import React, { useState } from "react";


export default function Asked(props) {
    const [Q1, setQ1] = useState(false)
    const [Q2, setQ2] = useState(false)
    const [Q3, setQ3] = useState(false)
    const [Q4, setQ4] = useState(false)
    const [Q5, setQ5] = useState(false)


    return (
        <div className={style.asked} >
            <section className={style.section}>

                <h1 className={`${style.h1} ${props.myFont.className}`}>
                    frequently asked question
                </h1>

                <p className={style.p}>
                    <span >

                        The gang: 5000 clumsy, simpleminded, and endangered beans, who are more of a threat to themselevs
                    </span>
                    <span className="text-[#A4835D] pl-1 underline">
                        <Link href="">
                            threat to themselevs
                        </Link>

                    </span>
                </p>
            </section>

            <section className={style.section1}>

               

                <section className="w-96 my-2 border-b border-[#a5a5a5] ">
                    <section className="flex justify-between  text-[#fff]">

                        <h1 className={`${style.Q1} ${props.myFont.className}`}>WHO ARE MABEANS?</h1>
                        <button onClick={(e) => {setQ1(!Q1) }}>

                            <Icon icon="material-symbols:arrow-forward-ios" color="#a5a5a5" rotate={3} hFlip={true} vFlip={true} />
                        </button>
                    </section>
                    {Q1 && <p className="text-[#a5a5a5] mb-4">
                    Mauris pharetra odio massa, ac lacinia magna tempor eu. Curabitur turpis odio, porttitor at luctus ac, aliquam nec dolor.

                    </p>}


                </section>
                <section className="w-96 my-2 border-b border-[#a5a5a5] ">
                    <section className="flex justify-between  text-[#fff]">

                        <h1 className={`${style.Q1} ${props.myFont.className}`}>WHEN CAN I BUY A MABEANS?</h1>
                        <button onClick={(e) => {setQ2(!Q2) }}>

                            <Icon icon="material-symbols:arrow-forward-ios" color="#a5a5a5" rotate={3} hFlip={true} vFlip={true} />
                        </button>
                    </section>
                    {Q2 && <p className="text-[#a5a5a5]">
                    Mauris pharetra odio massa, ac lacinia magna tempor eu. Curabitur turpis odio, porttitor at luctus ac, aliquam nec dolor.

                    </p>}


                </section>
                <section className="w-96 my-2 border-b border-[#a5a5a5] ">
                    <section className="flex justify-between  text-[#fff]">

                        <h1 className={`${style.Q1} ${props.myFont.className}`}>WHAT WALLET CAN I USE?</h1>
                        <button onClick={(e) => {setQ3(!Q3) }}>

                            <Icon icon="material-symbols:arrow-forward-ios" color="#a5a5a5" rotate={3} hFlip={true} vFlip={true} />
                        </button>
                    </section>
                    {Q3 && <p className="text-[#a5a5a5]">
                    Mauris pharetra odio massa, ac lacinia magna tempor eu. Curabitur turpis odio, porttitor at luctus ac, aliquam nec dolor.

                    </p>}


                </section>
                <section className="w-96 my-2  border-b border-[#a5a5a5]">
                    <section className="flex justify-between  text-[#fff]">

                        <h1 className={`${style.Q1} ${props.myFont.className}`}>WHO DO i but a MABEANS ?</h1>
                        <button onClick={(e) => {setQ4(!Q4) }}>

                            <Icon icon="material-symbols:arrow-forward-ios" color="#a5a5a5" rotate={3} hFlip={true} vFlip={true} />
                        </button>
                    </section>
                    {Q4 && <p className="text-[#a5a5a5]">
                    Mauris pharetra odio massa, ac lacinia magna tempor eu. Curabitur turpis odio, porttitor at luctus ac, aliquam nec dolor.

                    </p>}


                </section>
                <section className="w-96 my-2 border-b border-[#a5a5a5]">
                    <section className="flex justify-between  text-[#fff]">

                        <h1 className={`${style.Q1} ${props.myFont.className}`}>will there be a pre-sale?</h1>
                        <button onClick={(e) => {setQ5(!Q5) }}>

                            <Icon icon="material-symbols:arrow-forward-ios" color="#a5a5a5" rotate={3} hFlip={true} vFlip={true} />
                        </button>
                    </section>
                    {Q5 && <p className="text-[#a5a5a5]">
                    Mauris pharetra odio massa, ac lacinia magna tempor eu. Curabitur turpis odio, porttitor at luctus ac, aliquam nec dolor.

                    </p>}


                </section>
             
             

            </section>



        </div>
    )
}