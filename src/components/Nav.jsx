import React from "react";
import styles from "../styles/Nav.module.css";
import clsx from "clsx";

function Nav(props) {
  return (
    <div className="nav full flex font-roboto bg-white shadow-lg">
      <div className="m-5 mx-auto">
        <a href="#about_section" className={styles.navItem}>
          {" "}
          About
        </a>
        <a href="#project_section" className={styles.navItem}>
          {" "}
          Experience
        </a>
        <a href="#services" className={styles.navItem}>
          {" "}
          Services
        </a>
        <a href="#contact" className={styles.navItem}>
          {" "}
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1kKADIcmfrWjWhSoia27zyOjGM1fNBwgz/view?usp=sharing"
          target="_blank"
          className={styles.navItem}
        >
          {" "}
          Resume
        </a>
      </div>
    </div>
  );
}

export default Nav;
