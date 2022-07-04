import React from "react";
import kjcodeheadshot from "../images/kjcodeheadshot.png";
import styles from "../styles/About.module.css";
import clsx from "clsx";

function About(props) {
    return (
        <div id="about_section" className=" p-10 text-center mx-auto  m-12 ">
            <div className="mb-12 pb-4">
                <h2 className="font-source text-5xl">About Me</h2>
                {/* <img src={kjcodeheadshot} className={clsx(styles.headshot)} /> */}
            </div>
            <div className="full container mx-auto">
                <div className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-5 mx-auto">
                    <div className="my-3 md:ml-12 text-2xl mx-auto font-roboto">
                        <p><span className="font-semibold">Hi, I'm KJ.</span>
                            <br />
                            <br />I build responsive full stack applications, websites & Dapps. Whether it be a wordpress site, full stack application or a web3 site, I alway keep the consumer in mind for smooth operation. I have a wide range of development skills and love working together to create products our team and clients will be proud of.
                            <br />
                            <br /> Working in mutliple startups, I have been able expand my knowledge expotientially and help develop team and mentor along the way. I absolutely problem-solving and creating both internal & external documentation to optimize team efficency and eliminate confusion.</p>
                    </div>
                    <div className="">
                        <img className={clsx(styles.headshot, "rounded-full mx-auto")} src={kjcodeheadshot} />
                    </div>
                </div>
            </div>

            <div className="container m-5 mt-10 full text-center text-2xl text-black">
                <p className="font-source text-3xl font-semibold">Recent technologies I worked with:</p>
                <div className="container full mx-auto">
                    <div className="my-10 grid xs:grid-cols-1 md:grid-cols-5 font-semibold">
                        <ul>
                            <li>Javascript (ES6+)</li>
                            <br />
                            <li>React</li>
                            <br />
                            <li>Typscript</li>
                            <br />
                            <li>AWS</li>
                            <br />
                        </ul>
                        <ul>
                            <li>Node</li>
                            <br />
                            <li>Express</li>
                            <br />
                            <li>MongoDB</li>
                            <br />
                            <li>Wordpress</li>
                            <br />
                        </ul>
                        <ul>
                            <li>Tailwind</li>
                            <br />
                            <li>Bulma</li>
                            <br />
                            <li>Bootstap</li>
                            <br />
                            <li>Storybook</li>
                            <br />
                        </ul>
                        <ul>
                            <li>Python</li>
                            <br />
                            <li>Django</li>
                            <br />
                            <li>Jira</li>
                            <br />
                            <li>Asana</li>
                            <br />
                        </ul>
                        <ul>
                            <li>Ether.js</li>
                            <br />
                            <li>Github</li>
                            <br />
                            <li>Confluence</li>
                            <br />
                            <li>Docusaurus</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default About;