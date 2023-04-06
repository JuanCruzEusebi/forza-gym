import style from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Navbar() {
  function Menu() {
    const hamb = document.getElementById("hamb");
    const close = document.getElementById("close");
    const hambLinks = document.getElementById("hambLinks");
    hambLinks.style.transform = "translateX(0px)";
    hamb.style.transform = "translateX(2000px)";
    close.style.display = "block";
  }

  function handleClick() {
    const hamb = document.getElementById("hamb");
    const close = document.getElementById("close");
    close.style.display = "none";
    hamb.style.transform = "translateX(0px)";
    hambLinks.style.transform = "translateX(-2500px)";
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.headingContainer}>
        <Image
          className={style.img}
          alt="logo"
          src={"/imgs/Logo.jpg"}
          width={60}
          height={60}
          priority={5}
        />
        <h1>Forza</h1>
        <h2>GYM</h2>
      </div>
      <div className={style.linkContainer}>
        <Link className={style.link} href={""}>
          Clase de prueba
        </Link>
        <Link className={style.link} href={""}>
          Nuestro espacio
        </Link>
        <Link className={style.link} href={""}>
          Actividades
        </Link>
        <Link className={style.link} href={""}>
          Forzamed
        </Link>
      </div>
      <div
        className={style.hambMenuContainer}
        id="hambMenContainer"
        onClick={Menu}
      >
        <Image
          className={style.hamb}
          alt="logo"
          src={"/imgs/hamburger.png"}
          width={40}
          height={30}
          id="hamb"
        />
      </div>
      <div className={style.hambLinks} id="hambLinks">
        <Link className={style.linkHamb} href={""}>
          Clase de prueba
        </Link>
        <Link className={style.linkHamb} href={""}>
          Nuestro espacio
        </Link>
        <Link className={style.linkHamb} href={""}>
          Actividades
        </Link>
        <Link className={style.linkHamb} href={""}>
          Forzamed
        </Link>
        <Image
          onClick={handleClick}
          className={style.close}
          alt="logo"
          src={"/imgs/close.png"}
          width={30}
          height={30}
          id="close"
        />
      </div>
    </div>
  );
}
