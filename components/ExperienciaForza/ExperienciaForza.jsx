import style from "./expforza.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Test() {
  const { ref: inViewRef, inView } = useInView({ threshold: 0 });
  const { ref: cardOne, cardOneInView } = useInView({ threshold: 0.5 });

  // useEffect(() => {
  //   if (cardOneInView) {
  //     console.log("card in view");
  //   } else {
  //     console.log(" card out of view");
  //   }
  // }, [cardOneInView]);

  return (
    <div className={style.widthContainer}>
      <div ref={inViewRef} className={style.mainContainer}>
        <div
          className={`${style.headingContainer} ${
            inView ? style.animation : ""
          }`}
        >
          <h1>
            ¿Que es la <br /> <span>#Experiencia</span>FORZA?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            numquam cupiditate nesciunt, saepe qui quos beatae adipisci dolore
            dolorem quam!
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            provident facilis exercitationem nesciunt ex saepe animi dolor quo
            delectus quia.
          </p>
        </div>
        <div className={style.cardContainer} style={{ flex: "3" }}>
          <div className={style.columnOne}>
            <div
              className={`${style.single} ${
                inView ? style.singleAnimated : ""
              }`}
              ref={cardOne}
            >
              <Image
                src={"/imgs/ExpForza/Inter.png"}
                width={280}
                height={392}
                alt="card"
                className={style.img}
              />
              <p>
                El equipo de nuestro centro médico trabaja de forma coordinada
                con los profesores de nuestro gimnasio.
              </p>
            </div>
            <div
              className={`${style.single} ${
                inView ? style.singleAnimated : ""
              }`}
              ref={cardOne}
            >
              <Image
                src={"/imgs/ExpForza/Kinesio.png"}
                width={280}
                height={392}
                alt="card"
                className={style.img}
              />
              <p>
                Nuestros planes incluyen una valoración kinesiológica gratis al
                mes. Ideal para corregir patologías posturales o
                rehabilitaciones.
              </p>
            </div>
            <div
              className={`${style.single} ${
                inView ? style.singleAnimated : ""
              }`}
              ref={cardOne}
            >
              <Image
                src={"/imgs/ExpForza/Inter.png"}
                width={280}
                height={392}
                alt="card"
                className={style.img}
              />
              <p>
                Buscamos lo mejor de cada disciplina y lo adaptamos a tus
                necesidades y objetivos.
              </p>
            </div>
          </div>
          <div className={style.columnTwo}>
            <div
              className={`${style.single} ${
                inView ? style.singleAnimated : ""
              }`}
              ref={cardOne}
            >
              <Image
                src={"/imgs/ExpForza/HibridFixed.png"}
                width={280}
                height={392}
                alt="card"
                className={style.img}
              />
              <p>
                El equipo de nuestro centro médico trabaja de forma coordinada
                con los profesores de nuestro gimnasio.
              </p>
            </div>
            <div
              className={`${style.single} ${
                inView ? style.singleAnimated : ""
              }`}
              ref={cardOne}
            >
              <Image
                src={"/imgs/ExpForza/HibridFixed.png"}
                width={300}
                height={400}
                alt="card"
                className={style.img}
              />
              <p>
                Nuestros planes incluyen una valoración kinesiológica gratis al
                mes. Ideal para corregir patologías posturales o
                rehabilitaciones.
              </p>
            </div>
            <div
              className={`${style.single} ${
                inView ? style.singleAnimated : ""
              }`}
              ref={cardOne}
            >
              <Image
                src={"/imgs/ExpForza/Kinesio.png"}
                width={280}
                height={392}
                alt="card"
                className={style.img}
              />
              <p>
                Buscamos lo mejor de cada disciplina y lo adaptamos a tus
                necesidades y objetivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
