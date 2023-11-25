import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import "tailwindcss/tailwind.css";

const NewHero = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    const animateText = (element) => {
      element.innerHTML = element.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      return anime.timeline({ loop: false }).add({
        targets: element.querySelectorAll(".letter"),
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 400,
        delay: (el, i) => 70 * (i + 1),
      });
    };

    animateText(titleRef.current);
    animateText(subTitleRef.current);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1
        ref={titleRef}
        className="mx-10 mb-4 font-bold text-4xl md:text-6xl lg:text-8xl text-center text-blue-900"
      >
        Front End & Full Stack Developer
      </h1>
      <h2
        ref={subTitleRef}
        className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center text-blue-800 mx-10"
      >
        Empower Your Online Presence: Cutting-Edge Web Development & Persuasive
        Copywriting to Propel Your Business Forward
      </h2>
    </div>
  );
};

export default NewHero;
