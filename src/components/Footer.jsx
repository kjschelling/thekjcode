import React from "react";
import github from "../images/icons/github.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";

function Footer(props) {
    return (<div className="full bg-biege">
        <div className="pb-7 mx-auto">
            <div className=" container mx-auto p-7 mb-2">
                <div className="flex xs:ml-4">
                    <a href="https://github.com/kjschelling"><img src={github} className="h-12 w-12 m-4" /></a>
                    <a href="https://www.linkedin.com/in/thekjcode/"><img src={linkedin} className="h-11 w-11 m-4" /></a>
                    <a href=""><img src={twitter} className="h-10 w-10 m-4 mt-6" /></a>
                </div>

                <a href="https://drive.google.com/file/d/1RI3jzZh2nSk4mUqOtUN3i-FI2NDsADP0/view?usp=sharing" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Download Resume</span>
                    <span class="relative invisible">Download Resume</span>
                </a>
            </div>
        </div>
    </div>
    )

}
export default Footer;