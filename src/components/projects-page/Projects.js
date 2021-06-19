import Nav from '../shared/Nav';
import { Footer } from '../shared/Footer';
import { ProjectDescription } from '../projects-page/ProjectDescription';
import StudentInfoAppImg from '../../assets/Student-Info-App.svg';
import WeatherAppImage from '../../assets/Weather-App.svg';
import AiAppImage from '../../assets/AI-App.svg';
import DataVisualizationAppImage from '../../assets/Data-Visualization-App.svg';

export function Projects() {
    const projects = [
        {
            project_name:"Student Info App", 
            project_descr:"An application for managing the grades situation for students at their courses.", 
            tech_used:"React, Express, MongoDB, D3.js", 
            git_repo_link:"https://github.com/radu-ux/WT-Project",
            image:StudentInfoAppImg
        },
        {
            project_name:"Weather Application", 
            project_descr:"A team project in collaboration with Nokia that gathers weather info from an ESP8266 Arduino Board", 
            tech_used:"C++, Java, Android Studio", 
            git_repo_link:"https://github.com/radu-ux/Weather-Application", 
            image:WeatherAppImage
        },
        {
            project_name:"Basic AI for Image Recognition", 
            project_descr:"A web application for recognizing simple drawings like: cats, dogs or rainbows.", 
            tech_used:"JavaScript, CSS, HTML", 
            git_repo_link:"https://github.com/radu-ux/Artificial-Inteligence", 
            image:AiAppImage
        },
        {
            project_name:"Data Visualization with D3.js", 
            project_descr:"My Bachelor Thesis, a web app for displaying all kinds of statistics based on some predefined topics", 
            tech_used:"React, React Hooks, json-server, D3.js, Bootstrap", 
            git_repo_link:"https://github.com/radu-ux/Bachelor_Thesis", 
            image:DataVisualizationAppImage
        }
    ];
    return (
        <>
            <Nav />
            <div className="flex flex-col pt-28 md:pt-32">
                {/* Title and short intro section */}
                <div className="px-5 mx-auto ">
                    <div className="text-3xl md:text-4xl font-semibold">
                        What I've been working on <span className="hidden sm:inline">recently</span>
                    </div>
                    <div className="block py-8 text-lg lg:text-xl">
                        I always like to learn any new technology and the best way of doing this is by
                        being involved into a project.
                        <br />
                        Here are the applications that I've spent my time working on in College.
                    </div>
                </div>
                {/* Projects section*/}
                <div className="flex flex-col">
                    {projects.map((item, index) => {
                        return <ProjectDescription title={item.project_name} 
                                                    image={item.image} 
                                                    description={item.project_descr}
                                                    tech_used={item.tech_used}
                                                    git_repo_link={item.git_repo_link}
                                                    key={index}
                        />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )  
}