import React from "react";
// import { ReactComponent as HomeIcon } from "../assets/";
// import { ReactComponent as CalendarIcon } from "../assets/";
// import { ReactComponent as BizIcon } from "../assets/";
// import { ReactComponent as Discounts } from "../assets/";
// import { ReactComponent as Favs } from "../assets/";

import styles from "./SideBar.module.scss";
export default function SideBar (props){
  return (
    <aside className={styles["navbars"]}>
      <nav className={styles["navbar"]}>
        <ul className={styles["navbar__list"]}>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              {/* <HomeIcon /> */}
              Home
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              {/* <General /> */}
              GENERAL
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              {/* <Inicio /> */}
              Inicio
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              {/* <Events /> */}
              Eventos
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              {/* <Biz /> */}
              Establecimientos
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              {/* <Discounts /> */}
              Descuentos
            </div>
          </li>
          <li className={styles["navbar__list-item"]}>
            <div className={styles["navbar__navigation-item"]}>
              {/* <FAQ /> */}
              Mis favoritos
            </div>
          </li>
          
          {props.user === "admin" ? <li> hola </li> : ''}
          
        </ul>
      </nav> 
    </aside>
  );
};