import style from "./actividades.module.scss";
import Image from "next/image";

export default function Actividades() {
  return (
    <div className={style.mainContainer}>
      <div className={style.headingContainer}>
        <h1>ACTIVIDADES</h1>
      </div>
      <div className={style.actContainer}>
        <div className={style.firstPair}>
          <div className={style.singleAct}>
            <Image
              src={"/imgs/actividades/Funcional.jpg"}
              width={400}
              height={250}
              alt="img1"
              className={style.img1}
            />
            <button className={style.button}>VER GRILLA</button>
          </div>
          <div className={style.singleAct}>
            <Image
              src={"/imgs/actividades/Musculacion.jpg"}
              width={400}
              height={250}
              alt="img1"
              className={style.img1}
            />
            <button className={style.button}>VER GRILLA</button>
          </div>
        </div>
        <div className={style.secondPair}>
          <div className={style.singleAct}>
            <Image
              src={"/imgs/actividades/Stretching.jpg"}
              width={400}
              height={250}
              alt="img1"
              className={style.img1}
            />
            <button className={style.button}>VER GRILLA</button>
          </div>
          <div className={style.singleAct}>
            <Image
              src={"/imgs/actividades/XCORE.jpg"}
              width={400}
              height={250}
              alt="img1"
              className={style.img1}
            />
            <button className={style.button}>VER GRILLA</button>
          </div>
        </div>
      </div>
    </div>
  );
}
