import style from "./expforza.module.scss";
import Image from "next/image";

export default function Test() {
  return (
    <div className={style.mainContainer}>
      <div className={style.headingContainer}>
        <h1>
          ¿Que es la <br /> <span>#Experiencia</span>FORZA?
        </h1>
      </div>
      <div className={style.cardContainer} style={{ flex: "1" }}>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          <Image
            src={"/imgs/Hibrido.png"}
            width={280}
            height={392}
            alt="card"
            className={style.img}
          />
          <p>
            El equipo de nuestro centro médico trabaja de forma coordinada con
            los profesores de nuestro gimnasio.
          </p>
        </div>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          <Image
            src={"/imgs/Hibrido.png"}
            width={280}
            height={392}
            alt="card"
            className={style.img}
          />
          <p>
            Nuestros planes incluyen una valoración kinesiológica gratis al mes.
            Ideal para corregir patologías posturales o rehabilitaciones.
          </p>
        </div>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          <Image
            src={"/imgs/Hibrido.png"}
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
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          <Image
            src={"/imgs/Hibrido.png"}
            width={280}
            height={392}
            alt="card"
            className={style.img}
          />
          <p>
            El equipo de nuestro centro médico trabaja de forma coordinada con
            los profesores de nuestro gimnasio.
          </p>
        </div>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          <Image
            src={"/imgs/Hibrido.png"}
            width={280}
            height={392}
            alt="card"
            className={style.img}
          />
          <p>
            Nuestros planes incluyen una valoración kinesiológica gratis al mes.
            Ideal para corregir patologías posturales o rehabilitaciones.
          </p>
        </div>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          <Image
            src={"/imgs/Hibrido.png"}
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
  );
}
