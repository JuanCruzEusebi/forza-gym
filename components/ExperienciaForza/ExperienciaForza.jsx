import style from "./expforza.module.scss";

export default function Test() {
  return (
    <div className={style.mainContainer}>
      <div className={style.heading}>Heading</div>
      <div className={style.images} style={{ flex: "1" }}>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          Prueba Uno
        </div>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          Prueba Uno
        </div>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          Prueba Uno
        </div>
        <div
          style={{ width: "300px", height: "400px" }}
          className={style.single}
        >
          Prueba Uno
        </div>
      </div>
    </div>
  );
}
