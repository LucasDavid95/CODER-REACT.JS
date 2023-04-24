import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <img
        className={styles.containerError}
        src="https://res.cloudinary.com/drpr8hciz/image/upload/v1682365271/intelligent-404-pages_zhlzhj.jpg"
        alt="404 Error"
      ></img>
    </div>
  );
};

export default Error;
