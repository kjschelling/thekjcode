import React from "react";
import PedestalImg from "../images/projects/PedestalComp.png";
import UnnamedImg from "../images/projects/UnnamedComp.png";
import MysticImg from "../images/projects/MsComp.png";
import KlapesImg from "../images/projects/KlapesComp.png";
// import styles from "../styles/Projects.module.css";

function Projects(props) {
  return (
    <div id="project_section" className="w-full text-black mx-auto p-10">
      <div className="mt-12 md:py-4 mb-12">
        <h2 className="text-center font-source text-6xl xs:mb-12 md:mb-1">
          {" "}
          Experience{" "}
        </h2>
      </div>
      {/* ///////// PROJECT CARD 1 - UNNAMED  //////////// */}
      <div className="w-full bg-white md:flex rounded-2xl border-4 border-black mx-auto mb-10">
        <div className="h-auto bg-cover rounded-t  text-center overflow-hidden ">
          <h2 className="font-source text-3xl p-5 mb-4 mt-7">
            Front End Development - Unnamed Technology{" "}
          </h2>
          <img
            src={UnnamedImg}
            height="500px"
            width="500px"
            title="Pedestal Image"
            className="hover:scale-125 mx-auto"
          />
        </div>
        <div className="mt-12">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-l mt-12">
              <ul className="md:text-left xxs:text-center https://www.unnamed.gg/ xs:px-8 md:pl-8">
                <li>
                  Working with clients to implement and develop Unnamed
                  Technology landing page for
                  <br />
                  <a href="https://veecon.co/" className="font-semibold">
                    VeeCon NYC
                  </a>
                  .
                </li>
                <br />
                <li>
                  Built using React.js, Tailwind for responsive & interactive
                  mobile first experience, using design best practices.
                </li>
                <br />
                <li>
                  Ensured the website is accessible across many platforms,
                  desktop/mobile and optimized for peak performance.
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center"></div>
          <a
            href="https://www.unnamed.gg/"
            className="relative inline-block text-lg group mb-10"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative font-semibold">Unnamed Site</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
      {/* ///////// NEW PROJECT - UNNAMED CARD END //////////// */}

      {/* ///////// PROJECT CARD 3 - PEDESTAL APP  //////////// */}
      <div className="w-full  md:flex bg-white rounded-2xl border-4 border-black mx-auto mb-10">
        <div clasName="h-auto  bg-cover rounded-t  text-center overflow-hidden ">
          <h2 className="font-source text-3xl p-5 mb-4 mt-7">
            Software Engineer - Pedestal
          </h2>
          <img
            height="500px"
            width="500px"
            src={PedestalImg}
            title="Pedestal Image"
            className="hover:scale-125 mx-auto mb-7"
          />
        </div>
        <div className="">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-l mt-12">
              <ul className="md:text-left xxs:text-center xxs:px-8 md:px-4 ">
                {" "}
                <li>
                  Working with a team to develop and implement SaaS social media
                  platform Pedestal. Pedestal enables mentors and mentees to
                  connect & monetize mentorship.
                </li>
                <br />
                <li>
                  {" "}
                  Built and operated using AWS, Express.js, Node.js, MongoDB,
                  React.js, Typescript.
                </li>
                <br />
                <li>
                  Analyzing and implementing workflows assisting in optimizing
                  team productivity.
                  <br />
                </li>
                <br />
                <li> Implementing REST API & third-party API integrations</li>
                <br />
                <li>
                  <br />
                  Creating and maintaining internal & external technical
                  documentation.
                </li>
                <br />
                <li>
                  <br />
                  Running preliminary R&D mentorship program for the Pedestal
                  app resulting in job placement for mentee.
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center"></div>
        </div>
      </div>
      {/* ///////// NEW PROJECT CARD - Pedestal End //////////// */}

      {/* /////////  PROJECT CARD 3 - DIGITIZING.IO  //////////// */}
      <div class="w-full  md:flex bg-white rounded-2xl border-4 border-black mx-auto mb-10">
        <div class="h-auto  bg-cover rounded-t  text-center overflow-hidden ">
          <h2 className="font-source text-3xl p-5 mb-4 mt-7">
            Web3 Engineer - Digitizing.io
            <br />
          </h2>
          <img
            height="500px"
            width="500px"
            src={MysticImg}
            title="MysticSisterHood NFT Website"
            className="hover:scale-125 mx-auto"
          />
          <img
            height="500px"
            width="500px"
            src={KlapesImg}
            title="Klapes NFT Website"
            className="hover:scale-125 mx-auto"
          />
        </div>
        <div class="mt-12">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-l mt-12">
              <ul className="md:text-left xxs:text-center pb-4 xs:px-8 md:pl-8">
                <li>
                  Working with the clients and our development team to bring the
                  vision of Mystic Sisterhood a generative NFT release to life.
                </li>
                <br />
                <li>
                  Integrating MetaMask crypto-wallet, connecting to the Ethereum
                  blockchain allowing for NFT Minting on site.
                </li>
                <br />
                <li>
                  Creating internal documentation and resueable components in
                  storybook for future projects.
                </li>
              </ul>
              <a
                href="https://www.mysticsisterhood.io/"
                className="relative inline-block text-lg group mt-5"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-semibold">
                    MysterSisterHood.io
                  </span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
              <ul className="md:text-left xxs:text-center pb-4 xs:px-8 md:px-4 mt-10">
                <li>
                  Working with a development team to create unique NFT & DAO
                  Dapps, successly launching Klapes, Storks, Baby Klapes NFT's &
                  KlubHouse NFT staking game.
                </li>
                <br />
                <li>
                  Connecting web3 sites to Kaikas crypto wallet to the Klayton
                  blockchain for user to mint & stake NFTs.
                </li>
                <br />
                <li>
                  Collorbating with clients and team for a seamless UI
                  experience.
                </li>
                <br />
                <li>
                  Creating internal documentation and using storybook for
                  resueable components in future projects.
                </li>
                <br />
                <li>
                  Working closely with Solidity developers to pull real-time
                  data from smart contracts.
                </li>
              </ul>
              <a
                href="https://www.klapes.io/"
                className="relative inline-block text-lg group mt-5"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-semibold">Klapes.io</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
          <div class="flex items-center"></div>
        </div>
      </div>
      {/* ///////// NEW PROJECT - DIGITIZING.IO END //////////// */}
    </div>
  );
}

export default Projects;
