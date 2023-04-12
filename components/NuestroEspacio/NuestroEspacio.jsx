import style from "./espacio.module.scss";
import Image from "next/image";

export default function NuestroEspacio() {
  return (
    <div className={style.mainContainer}>
      <div>
        <h1>Nuestro Espacio</h1>
      </div>
      <div className={style.imageContainer}>
        <div className={style.topImageContainer}>
          <Image
            src={"/imgs/nuestroEspacio/gim2.jpg"}
            width={400}
            height={250}
            alt="img1"
            className={style.img1}
          />
          <Image
            src={"/imgs/nuestroEspacio/gim3.jpg"}
            width={400}
            height={250}
            alt="img1"
            className={style.img2}
          />
          <Image
            src={"/imgs/nuestroEspacio/gim4.jpg"}
            width={400}
            height={250}
            alt="img1"
            className={style.img3}
          />
        </div>
        <div className={style.bottomImageContainer}>
          <Image
            src={"/imgs/nuestroEspacio/gim5.jpg"}
            width={500}
            height={350}
            alt="img1"
            className={style.img1}
          />
          <Image
            src={"/imgs/nuestroEspacio/gim6.jpg"}
            width={500}
            height={350}
            alt="img1"
            className={style.img2}
          />
          <Image
            src={"/imgs/nuestroEspacio/gim7.jpg"}
            width={500}
            height={350}
            alt="img1"
            className={style.img3}
          />
        </div>
      </div>
    </div>
  );
}
