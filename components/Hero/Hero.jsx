import style from "./hero.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={style.mainContainer}>
      <div className={style.headingContainer}>
        <h1 className={style.heading}>
          VENI A VIVIR LA <br /> <span>#EXPERIENCIA FORZA!</span>
        </h1>
        <div>
          <Link href={"#nuevoConcepto"}>
            <Image
              className={style.fastFrwd}
              alt="logo"
              src={"/imgs/fast-forward.png"}
              width={60}
              height={60}
              id="hamb"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
