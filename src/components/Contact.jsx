import React from "react"
import styles from "../styles/Contact.module.css"
// import { useState } from "react";
// import { Dialog } from '@headlessui/react'
import clsx from "clsx";

function Contact(props) {
    // let [isOpen, setIsOpen] = useState(false)

    return (
        <div id="contact" classname="full">
            <div className={clsx(styles.contactSection, "mx-auto text-center")}>
                <h2 className="md:text-6xl xs:text-4xl font-source">Get In Touch</h2>
                <p className="py-5 font-roboto md:text-2xl xs:text-xl xs:px-12">I am always open to new opporunities. Please download my resume and reach out!</p>
                <div className="my-5">

                    {/*---- lets connect button --- ** add on click if doing the form */}

                    <a href="mailto:kjschelling@gmail.com" className="relative inline-block text-lg group" >
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Let's Connect</span>
                        </span>
                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                    {/* end connect button */}
                </div>
            </div>

            {/* When is open */}
            {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50" >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-3xl rounded bg-white p-12">
                        <Dialog.Title className="font-source text-4xl text-center py-5">Let's connect!</Dialog.Title>
                        <Dialog.Description>
                            <form method="POST" action="mailto:kjschelling@gmail.com?Subject=KJCodeMessage">
                                <label className="block mb-6">
                                    <span className="text-gray-700 text-2xl font-roboto">Your name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Joe Bloggs" />
                                </label>
                                <label className="block mb-6">
                                    <span className="text-gray-700 font-roboto text-2xl">Email address</span>
                                    <input
                                        name="email"
                                        type="email"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="joe.bloggs@example.com"
                                        required
                                    />
                                </label>
                                <label className="block mb-6">
                                    <span className="text-gray-700 font-roboto text-2xl">Message</span>
                                    <textarea
                                        name="message"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        rows="3"
                                        placeholder="Tell us what you're thinking about..."
                                    ></textarea>
                                </label>
                                <div classname="">
                                   
                                    <button type="submit" className="relative inline-block text-lg group" onClick={() => setIsOpen(true)}>
                                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                            <span className="relative">Message</span>
                                        </span>
                                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                    </button>
                                   
                                </div>

                            </form>
                        </Dialog.Description>

                       
                        <button type="button" onClick={() => setIsOpen(false)} className=" float-right bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                      
                    </Dialog.Panel>
                </div>
            </Dialog> */}
        </div>

    )
}

export default Contact;