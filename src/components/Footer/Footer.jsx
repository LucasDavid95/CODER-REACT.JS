import React from "react";
import styles from "./Footer.module.css";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div className={styles.containerFooter}>
        <h2>Gamestore</h2>
      </div>
    </div>
  );
};

export default Footer;
