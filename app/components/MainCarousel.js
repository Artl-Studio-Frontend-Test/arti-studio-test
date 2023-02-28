import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import style from  "../styles/mainCarousel.module.css"
import {data} from "./data/data"


export default function MainCarousel(props) {

    return (
        <div className={style.allslide}>
            <div className={style.slider}>
                <div className={style.slide_track}>
                    {data.map((item, i) => (
                        <Card className="w-[13rem] text-left bg-white rounded-lg mx-4">
                        <div className=" flex justify-center m-2 rounded-lg" style={{backgroundColor:`${item.color}`} } >

                        <Card.Img variant="top" src="/assets/boss.png" className={style.slide}  />
                        </div>
                        <Card.Body className="mt-2 mb-4">
                            <Card.Title className="text-[#1b1b1b] font-bold ml-4">{item.name}</Card.Title>
                            <Card.Text className="text-[#303030] ml-4 flex justify-between ">
                                <p> 
                               #2290 
                                </p>
                                <button className={style.button_22} role="button">{item.button} </button>

                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                        
                    ))}
                    
                </div>
            </div>

        </div>
    )
}