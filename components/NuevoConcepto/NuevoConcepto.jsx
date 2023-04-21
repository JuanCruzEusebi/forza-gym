import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./nuevoConcepto.module.scss";

export default function NuevoConcepto() {
  // const myRef = useRef(null);s
  const { ref: inViewRef, inView } = useInView({ threshold: 0 });

  // useEffect(() => {
  //   if (inView) {
  //     console.log("in view");
  //   } else {
  //     console.log("out of view");
  //   }
  // }, [inView]);

  return (
    <div ref={inViewRef} className={style.mainContainer} id="nuevoConcepto">
      <h1
        // ref={inViewRef} descomentar para animacion
        className={`${style.heading} ${inView ? style.animation : ""}`}
        id="heading"
      >
        UN NUEVO CONCEPTO DE GIMNASIO
      </h1>
    </div>
  );
}
