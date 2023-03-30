import React from "react";
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <ul>
        <li className={styles.navbarLi}>
          <a href="*" className={styles.navbarAn}>
            Home
          </a>
        </li>
        <li className={styles.navbarLi}>
          <a href="*" className={styles.navbarAn}>
            Games
          </a>
        </li>
        <li className={styles.navbarLi}>
          <a href="*" className={styles.navbarAn}>
            Software
          </a>
        </li>
        <li className={styles.navbarLi}>
          <a href="*" className={styles.navbarAn}>
            Contact
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
