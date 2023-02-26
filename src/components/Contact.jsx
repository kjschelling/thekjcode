import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
// import { useState } from "react";
import Modal from "./Modal";
import clsx from "clsx";

function Contact(props) {
  //state defined here, in the parent component
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div id="contact" classname="full">
      <div className={clsx(styles.contactSection, "mx-auto text-center")}>
        <h2 className="md:text-6xl xs:text-4xl font-source">Get In Touch</h2>
        <p className="py-5 font-roboto md:text-2xl xs:text-xl xs:px-12">
          I am always open to new opporunities. Please download my resume and
          reach out!
        </p>
        <div className="my-5">
          {/*---- lets connect button --- ** add on click if doing the form */}

          <button
            onClick={openModal}
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Let's Connect</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>

          {/* end connect button */}
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
    </div>
  );
}

export default Contact;
