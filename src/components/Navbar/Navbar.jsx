import React from "react";
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            className={styles.navbarImg}
            src="https://res.cloudinary.com/drpr8hciz/image/upload/v1682358957/asd_rqx7es.png"
            alt="Logo"
          />
        </Link>
        <ul className={styles.navbarUl}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category/PS4"
          >
            PS4
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category/PS5"
          >
            PS5
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category/Software"
          >
            Software
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category/Contact"
          >
            Contact
          </Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
