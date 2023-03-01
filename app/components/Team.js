import Image from "next/image";
import style from "../styles/team.module.css";

export default function Team(props) {

    return (
        <div className={style.team} >
            <section className="w-full text-center justify-center">

                <h1 className={`${props.myFont.className} ${style.h1}`}>
                    our team
                </h1>

                <section className={style.row}>
                    {(() => {
                        const arr = [];
                        for (let i = 0; i < 7; i++) {
                            arr.push(
                                <div className={style.card}>
                                    <Image
                                        className={style.cardImage}
                                        src="/assets/walaa.png"
                                        alt="team"
                                        width={500}
                                        height={500}

                                    ></Image>

                                </div>
                            );
                        }
                        return arr;
                    })()}

                    <div className={style.card1}>
                        <div
                           className={`${props.myFont.className} ${style.more} `}

                        >
                            see more

                        </div>

                    </div>

                </section>
            </section>



        </div>
    )
}