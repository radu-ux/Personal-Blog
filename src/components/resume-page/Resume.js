import { Nav } from '../shared/Nav';
import { Footer } from '../shared/Footer';
import { IoAtCircle, IoCallSharp } from 'react-icons/io5';
import { useRef } from 'react';

export function Resume() {
    const mailValue = useRef()

    const iconStyle = {
        width: "15px",
        height: "15px",
        display: "inline"
    };

    const handleOnMouseOver = () => {
        mailValue.current.style.borderBottom = "2px";
        mailValue.current.style.borderColor = "black";
        mailValue.current.style.borderStyle = "solid";
     }

    const handleMouseOut = () => {
        mailValue.current.style.borderBottom = "0";
    }

    return (
        <>
            <Nav />
            <div className="flex flex-col">
                <div className="mt-20 mx-auto text-xs sm:text-md">
                    Contact: <a onMouseOver={handleOnMouseOver} onMouseOut={handleMouseOut} href="mailto:radu.uivari99@gmail.com"><IoAtCircle style={iconStyle} /> <span ref={mailValue}>radu.uivari99@gmail.com</span></a> | <IoCallSharp style={iconStyle}/> (0765) 994 217
                </div>
                {/* EXPERIENCE SECTION */}
                <div className="mx-5 mt-8 sm:mt-20 sm:mx-32">
                    <div className="border-b-2 text-xl font-medium uppercase tracking-widest text-blue-900 border-blue-900 sm:border-b-4 sm:text-2xl md:text-3xl">Experience</div>
                    <ul className="py-3 mx-10 list-disc">
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Internship Software Developer</li>
                        <div className="block mx-5 py-3 text-sm font-normal sm:text-md md:text-xl sm:font-light">
                            <span className="block pb-2">I am currently a Software Developer at Continental Automotive Timisoara on the department VNI.</span>
                            <span className="block pb-2">I am part of the Renault team and I work in the area of model based development.</span>
                            <span className="block pb-2">Despite quality requests I also take part in the testing of the functionality developed in the existing projects.</span>
                        </div>
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Accustomed with Agile methodology and working with Confluence, Jira </li>
                    </ul>
                </div>
                {/* EDUCATION SECTION */}
                <div className="mx-5 mt-8 sm:mt-20 sm:mx-32">
                    <div className="border-b-2 text-xl font-medium uppercase tracking-widest text-blue-900 border-blue-900 sm:border-b-4 sm:text-2xl md:text-3xl">Education</div>
                    <ul className="pt-3 mx-10 list-disc">
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">West University of Timisoara</li>
                        <div className="block mx-5 py-3 text-sm font-normal sm:text-md md:text-xl sm:font-light">
                            <span className="block pb-2 text-blue-900 sm:text-red-600">Faculty of Mathematics and Informatics.</span>
                        </div>
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Iancu de Hunedoara National College</li>
                        <div className="block mx-5 py-3 text-sm font-normal sm:text-md md:text-xl sm:font-light">
                            <span className="block pb-2 text-blue-900 sm:text-red-600">Mathematics and Informatics Profile.</span>
                        </div>
                    </ul>
                </div>
                {/* SKILLS SECTION */}
                <div className="mx-5 mt-8 sm:mt-20 sm:mx-32">
                    <div className="border-b-2 text-xl font-medium uppercase tracking-widest text-blue-900 border-blue-900 sm:border-b-4 sm:text-2xl md:text-3xl">Skills</div>
                    <ul className="py-3 mx-10 list-disc">
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Programming Languages and OOP</li>
                        <div className="block mx-5 py-3 text-sm font-normal sm:text-md md:text-xl sm:font-light">
                            <span className="block pb-2">Knowledge of C/C++, Python, Java acquired throughout the years of faculty</span>
                        </div>
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Web Technology Area</li>
                        <div className="block mx-5 pt-3 text-sm font-normal sm:text-md md:text-xl sm:font-light">
                            <span className="block pb-2">Knowledge of JavaScript, CSS, HTML, React.</span>
                            <span className="block pb-2">Basic knowledge of Bootstrap, TailwindCSS, NodeJS, ExpressJS, MongoDB</span>
                            <span className="block pb-2">Accustomed with Git version control system</span>
                        </div>
                    </ul>
                </div>
                {/* ABILITIES SECTION */}
                <div className="mx-5 mt-8 sm:mt-20 sm:mx-32">
                    <div className="border-b-2 text-xl font-medium uppercase tracking-widest text-blue-900 border-blue-900 sm:border-b-4 sm:text-2xl md:text-3xl">Abilities</div>
                    <ul className="py-3 mx-10 list-disc">
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Responsible and involved in all tasks that are assigned to me</li>
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Communicative and with a wide openness to teamwork</li>
                        <div className="block mx-5 py-3 text-sm font-normal sm:text-md md:text-xl sm:font-light">
                            <span className="block pb-2">Abilities improved by participating to team projects and by working in a development team</span>
                        </div>
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Flexible in adapting to different tasks</li>
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">Motivated by the desire for professional development regarding the area of web applications</li>
                    </ul>
                </div>
                {/* FOREIGN LANGUAGES SECTION */}
                <div className="mx-5 mt-8 sm:mt-20 sm:mx-32">
                    <div className="border-b-2 text-xl font-medium uppercase tracking-widest text-blue-900 border-blue-900 sm:border-b-4 sm:text-2xl md:text-3xl">Foreign Languages</div>
                    <ul className="py-3 mx-10 list-disc">
                        <li className="text-md font-semibold sm:text-xl md:text-2xl">English, B2 level</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}