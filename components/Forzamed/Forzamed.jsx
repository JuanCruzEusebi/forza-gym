import Image from "next/image";
import styles from "./forzamed.module.scss";

export default function Forzamed() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={"/imgs/Forzamedlogo.png"}
          width={300}
          height={250}
          alt="forzamed logo"
        />
      </div>
    </div>
  );
}
