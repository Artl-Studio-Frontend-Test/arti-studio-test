import React from "react";
import Card from 'react-bootstrap/Card';

import style from "../styles/mainCarousel.module.css"
import { data } from "./data/data"


export default function MainCarousel(props) {

    return (
        <div className={style.allslide}>
            <div className={style.slider}>
                <div className={style.slide_track}>
                    {data.map((item, i) => (
                        <div className="group hover:mx-5 hover:shadow-lg hover:w-[14rem] hover:shadow-slate-300 hover:h-[17rem] hover:mt-[-3rem]   w-[13rem] text-left bg-white rounded-lg mx-4   ">
                            <div className=" flex justify-center m-2 rounded-lg group-hover:h-[12rem]  " style={{ backgroundColor: `${item.color}` }} >

                                <img variant="top" src={`/assets/${item.image}`}
                                    className={`${style.slide} group-hover:h-[12rem] group-hover:mt-[-1rem] group-hover:mb-[1rem]  group-hover:transform  group-hover:-translate-y-2 group-hover:absolute`} />
                            </div>
                            <section className="mt-2 mb-4 ">
                                <h1 className="text-[#1b1b1b] font-bold ml-4">{item.name}</h1>
                                <div className="text-[#303030] ml-4 flex justify-between ">
                                    <p>
                                        #2290
                                    </p>
                                    <button className={style.button_22} style={{backgroundColor: `${item.color2}`}} role="button">{item.button} </button>

                                </div>

                            </section>
                        </div>

                    ))}

                </div>
            </div>

        </div>
    )
}