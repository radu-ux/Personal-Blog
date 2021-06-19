import Nav from '../shared/Nav';
import { Footer } from '../shared/Footer';
import FacultyImage from '../../assets/UVT-Image.jpg';
import ReactImage from '../../assets/React-Image.png';
import BootstrapImage from '../../assets/Bootstrap-Image.png';
import TailwindCSSImage from '../../assets/TailwindCSS-Image.svg';
import BikeRidingImage from '../../assets/BikeRiding-Image.jpg';
import FootballImage from '../../assets/Football-Image.jpg';

export function About() {
    return (
        <>
            <Nav />
            <div className="flex flex-col py-20 ">
                {/* Current Attributes Section*/}
                <div className="flex flex-col mb-16 md:grid md:grid-cols-3">
                    <div className="mb-8 px-5 md:col-span-2 text-xl md:px-5">
                        <span className="block text-2xl font-semibold border-b-2 mb-3">Current attributes</span>
                        I am a student at <span className="text-indigo-600">West University of Timisoara</span>, 
                        at the Faculty of Mathematics and Informatics, section Informatics in English, year 3.
                        <span className="block mt-5 text-md">Visit Faculty Website <a href="https://www.math.uvt.ro/" className="text-purple-700 hover:text-purple-500 uppercase font-semibold">here</a></span>
                    </div>
                    <div className="px-5 mx-auto">
                        <img className="rounded-full w-64 h-64 md:w-44 md:h-44 lg:h-72 lg:w-72" src={FacultyImage} alt=""></img>
                    </div>
                </div>
                {/* Hobbies Section*/}
                <div className="flex flex-col md:grid md:grid-cols-3">
                    <div className="px-5 mx-auto order-2 md:order-1">
                        <div className="grid grid-cols-2">
                            <img className="rounded-full w-32 h-32 lg:w-44 lg:h-44" src={ReactImage} alt=""></img>
                            <img className="rounded-full w-32 h-32 lg:w-44 lg:h-44" src={BootstrapImage} alt=""></img>
                        </div>
                        <div className="grid grid-cols-2">
                            <img className="rounded-full col-span-2 mx-auto w-32 h-32 lg:w-44 lg:h-44" src={TailwindCSSImage} alt=""></img>
                        </div>
                    </div>
                    <div className="mb-8 px-5 text-xl order-1 md:order-2 md:col-span-2 md:px-5">
                        <span className="block text-2xl font-semibold border-b-2 mb-3">Hobbies</span>
                        I like to develop and learn any new technology regarding web development and how websites are 
                        built. I recently spent my time learning React and finding a better way to style a website moving
                        from simple CSS files, to Bootstrap and now to Tailwind CSS. I find that web development is not 
                        a simple topic as I thought, it became more an more compact and certainly more and more interesting to learn. 
                        <span className="block mt-5 text-md">Find more about my projects
                        <a href="/projects" className="text-purple-700 hover:text-purple-500 uppercase font-semibold"> here</a></span>
                    </div>
                </div>

                {/* Free Time Section*/}
                <div className="flex flex-col mt-16 md:grid md:grid-cols-3">
                    <div className="mb-8 px-5 text-xl md:py-10 md:col-span-2 md:px-5 xl:py-20">
                        <span className="block text-2xl font-semibold border-b-2 mb-3">Free Time Passions</span>
                        I consider myself an active person. I recently started going to gym and I might say that at this 
                        moment I can't see my life without this activity. Apart from going to gym, I also like playing football
                        with my friends and cycling. Hanging out is a clear option when it comes to spending free time.
                    </div>
                    <div className="px-5 mx-auto">
                        <div className="grid grid-cols-2">
                            <img className="rounded-full object-cover object-center w-44 h-44 md:w-32 md:h-32 xl:w-56 xl:h-56" src={BikeRidingImage} alt=""></img>
                        </div>
                        <div className="grid grid-cols-3">
                            <div></div>
                            <img className="rounded-full col-span-2 mx-auto object-cover object-center w-44 h-44 md:w-32 md:h-32 xl:w-56 xl:h-56" src={FootballImage} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}