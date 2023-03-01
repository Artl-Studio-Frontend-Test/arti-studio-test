import style from "../styles/about.module.css";

export default function Gang(props) {

    return (
        <div className={style.about} >
            <section className={style.section}>

                <section className={style.section1}>
                    <div className="w-[15rem]  text-left bg-white rounded-lg mx-4  py-2 ">
                        <div className=" flex justify-center m-2 rounded-lg  bg-[#c88ed6]  "  >

                            <img variant="top" src={`/assets/boss.png`}
                                className={`${style.slide}`} />
                        </div>
                        <section className="mt-2 mb-4 ">
                            <h1 className="text-[#1b1b1b] font-bold ml-4">Mail Big Boss</h1>
                            <div className="text-[#303030] ml-4 flex justify-between ">
                                <p>
                                    #2290
                                </p>
                                <button className={style.button_22} style={{ backgroundColor: `#e57881` }} role="button">Mythic </button>

                            </div>

                        </section>
                    </div>
                    <div className={`${style.heptagon}  text-center mt-[20%] ml-[-15%]`}>

                    <p className={`${props.myFont.className}  mx-2 my-1 text-[0.95rem]`}> new clothes everyday</p>
                    </div>


                </section>

                <section className={style.section2}>
                    <h1 className={`${props.myFont.className} text-[#ae9a85] text-[1.3rem] `}>About</h1>
                    <h1 className={`${props.myFont.className} ${style.h1_NFT}`}>WHAT IS NFT?</h1>
                    <p className={style.p_NFT}>An NFT, also known as a Non-Fungible Token, is a
                        one-of-a-kind digital token stored on a digital
                        Tre oti siees Coa MC eats oa
                        signifies something not interchangeable with
                        Ee aeldulme ele Re WRN eke cieluid ecole ia ok
                    </p>
                    <button className={`${props.myFont.className} ${style.button_21}`} style={{ backgroundColor: `#fb3f63` }} role="button">buy a bean </button>


                </section>

            </section>


        </div>
    )
}