import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ContactForm from "./ContactForm";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <div className="z-10">
      <Transition
        show={isOpen}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="relative bg-gray-100 rounded-lg w-1/2 mx-auto max-w-lg    transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <div className="absolute top-0 right-0 pt-4 pr-4 px-5 py-3 rounded-lg bg-gray-50">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Modal;
