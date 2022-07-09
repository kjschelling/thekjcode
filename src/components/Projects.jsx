import React from "react"
import PedestalImg from "../images/projects/PedestalComp.png";
import UnnamedImg from "../images/projects/UnnamedComp.png";
import MysticImg from "../images/projects/MsComp.png";
import KlapesImg from "../images/projects/KlapesComp.png";
// import styles from "../styles/Projects.module.css";

function Projects(props) {
    return (
        <div id="project_section" className="section full bg-biege text-black ">
            <div className="mt-12 md:py-4 mb-12">
                <h2 className="text-center font-source text-5xl xs:mb-12 md:mb-1"> Experience </h2>
            </div>
            <div className="grid font-roboto text-lg sm:grid-cols-1 md:grid-cols-2 gap-3 mx-5 mb-12 pb-12">
                {/* Projects/Experience Row 1 */}
                <div className="md:mt-8">
                    <div className='md:pt-6'>
                        <h2 className="font-source text-3xl p-5 mb-4">Front End Development - Unnamed Technology </h2>
                        <ul className="md:text-left xxs:text-center https://www.unnamed.gg/ xs:px-8 md:pl-8">
                            <li>
                                Worked with client to implement and develop Unnamed Technology landing page for <a href="https://veecon.co/" className="font-semibold">VeeCon NYC</a>.
                            </li>
                            <br />
                            <li>
                                Built using React.js, Tailwind for responsive & interactive mobile first experience, using design best practices.
                            </li>
                            <br />
                            <li>
                                Ensured the website is accessible across many platforms, desktop/mobile and optimized for peak performance.
                            </li>
                        </ul>
                        <a href="https://www.unnamed.gg/" className="relative inline-block text-lg group" >
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative font-semibold">Unnamed Site</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="">
                    <a href="https://www.unnamed.gg/" target="_blank">
                        <img src={UnnamedImg} className='hover:scale-125 mx-auto' />
                    </a>
                </div>
                {/* End of Row 1  */}

                {/* Projects/Experience Row 2 */}
                <div className="xs:ml-12 mt-12">
                    <a href="https://pedestalapp.com/" target="_blank">
                        <img src={PedestalImg} className='hover:scale-125 mx-auto' />
                    </a>
                </div>
                <div className="md:mt-12">
                    <h2 className="font-source text-3xl p-5 mb-4">Software Engineer - Pedestal </h2>
                    <ul className="md:text-left xxs:text-center xxs:px-8 md:px-4 "> <li>Working with a team to develop and implement SaaS social media platform Pedestal. Pedestal enables mentors and mentees to connect & monetize mentorship.</li>
                        <br />
                        <li> Built and operated using AWS, Express.js, Node.js, MongoDB, React.js, Typescript.</li>
                        <br />
                        <li> Analyzed and implemented workflows assisting in optimizing team productivity. </li>
                        <br />
                        <li> Implemented REST API & third-party API integrations</li>
                        <br />
                        <li> Created and maintained internal & external technical documentation.</li>
                        <br />
                        <li> Ran preliminary R&D mentorship program for the Pedestal app resulting in job placement for mentee.</li>
                    </ul>

                    <a href="https://pedestalapp.com/" className="relative inline-block text-lg group" >
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative font-semibold">Pedestal App</span>
                        </span>
                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>

                </div>

                {/* End of Row 2 */}

                {/* Projects/Experience Row 3 */}
                <div className="md:mt-12 xs:mb-6">
                    <div className="pt-6">
                        <h2 className="font-source text-3xl p-5 mb-4">Web3 Engineer - Digitizing.io </h2>
                        <ul className="md:text-left xxs:text-center pb-4 xs:px-8 md:pl-8">
                            <li>
                                Worked with the clients and our development team to bring the vision of Mystic Sisterhood a generative NFT release to life.
                            </li>
                            <br />
                            <li>
                                Integrated MetaMask crypto-wallet, connecting to the Ethereum blockchain allowing for NFT Minting on site.
                            </li>
                            <br />
                            <li>Created internal documentation and resueable components in storybook for future projects.</li>
                        </ul>
                        <a href="https://www.mysticsisterhood.io/" className="relative inline-block text-lg group" >
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative font-semibold">MysterSisterHood.io</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="md:mt-12">
                    <a href="https://www.mysticsisterhood.io/" target="_blank">
                        <img src={MysticImg} className='hover:scale-125 mx-auto' />
                    </a>
                </div>
                {/* End of Row 3 */}

                {/* Projects/Experience Row 4 */}
                <div className="md:mt-12">
                    <a href="https://www.klapes.io/" target="_blank">
                        <img src={KlapesImg} className='hover:scale-115 mx-auto' />
                    </a>
                </div>
                <div className="md:mt-8">
                    <div className="pt-6">
                        <h2 className="font-source text-3xl mb-4">Web3 Engineer - Digitizing.io </h2>
                        <ul className="md:text-left xxs:text-center pb-4 xs:px-8 md:px-4">
                            <li>
                                Worked with a development team to create unique NFT & DAO Dapps, successly launching Klapes, Storks, Baby Klapes NFT's & KlubHouse NFT staking game.
                            </li>
                            <br />
                            <li>
                                Connected web3 sites to Kaikas crypto wallet to the Klayton blockchain for user to mint & stake NFTs.
                            </li>
                            <br />
                            <li>
                                Collorbated with clients and team for a seamless UI experience.
                            </li>
                            <br />
                            <li>Created internal documentation and using storybook for resueable components in future projects.</li>
                            <br />
                            <li>Worked closely with Solidity developers to pull real-time data from smart contracts.</li>
                        </ul>
                        <a href="https://www.klapes.io/" className="relative inline-block text-lg group" >
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative font-semibold">Klapes.io</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>

                    </div>
                </div>

                {/* End of Row 4 */}
            </div>
        </div>
    )
}

export default Projects;