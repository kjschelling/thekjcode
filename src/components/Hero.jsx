import React from "react";
import styles from "../styles/Hero.module.css";
import clsx from "clsx";

function Hero(props) {
    return (
        <div className={clsx(styles.heroSection)}>
            <div className={clsx(styles.heroTextDiv, "text-center my-auto font-source text-white max-w-3/4")}>
                <h1 className=''>Hi, I'm KJ.</h1>
                <h1 className=''>Full Stack Engineer & Internet Wizard </h1>
            </div>

        </div>
    )
}

export default Hero;