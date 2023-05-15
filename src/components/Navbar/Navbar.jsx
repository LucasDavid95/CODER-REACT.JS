import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setcategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <div className={styles.navbarUl}>
          {categories.map((category) => {
            return (
              <Link
                style={{ color: "white", textDecoration: "none" }}
                key={category.id}
                to={category.path}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
