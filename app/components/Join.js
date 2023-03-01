import { Icon } from '@iconify/react';

import style from "../styles/join.module.css";
import { data } from "./data/data"

export default function Join(props) {

    return (
        <div className={style.join} >
            <section className={style.section1}>
                <h1 className={`${style.section1_h1} ${props.myFont.className}`}>
                    LET'S JOIN THE GANG!

                </h1>
                <section className="flex justify-center">

                    <button className={`${style.button_22} ${props.myFont.className}  `} role="button">

                        <Icon icon="skill-icons:discord" width="25" height="25" className='rounded-full mx-2' /> 
                        discord 

                    </button>
                    <button className={`${style.button_21} ${props.myFont.className}`} role="button">

                    <Icon icon="skill-icons:twitter" color="#2099e8" width="25" height="25" className='rounded-full mx-2' />
                        twitter

                    </button>





                </section>

            </section>

            <section className={style.section2}>
            {data.map((item, i) => (
               <img src={`/assets/${item.image}`}
               className={`w-[18rem] h-[18rem] ml-[-2rem] mr-[-2rem]` }/>
     


            ))}

            </section>




        </div>
    )
}