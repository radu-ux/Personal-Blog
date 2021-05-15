export function ProjectDescription(props) {
    const {title, image, description, tech_used, git_repo_link} = props;
    return (
        <div className="px-5 py-7 sm:py-14 mx-auto">
            <div className="border-b-4 border-purple-300 w-16 md:w-20 lg:w-20"></div>
            <div className="text-xl py-2 font-semibold md:text-2xl">{title}</div>
            <a href={git_repo_link}>
                <img className="z-30 border border-radius-xl border-blue-900 transition duration-500 transform rounded-xl scale-100
                                hover:scale-95 hover:shadow-xl"
                    src={image}
                    alt="Project">
                </img>   
            </a>
            <div className="py-3 text-md sm:text-lg">{description}</div>
            <div className="text-md sm:text-lg sm:w-11/12">
                <span className="text-red-300 font-semibold uppercase">Technologies used :</span> {tech_used}
            </div>
            <div className="text-lg sm:text-xl py-3 uppercase font-semibold font-mono tracking-wider sm:w-11/12">
                <a href={git_repo_link} className="border-b-4 border-white hover:border-black">View Git Repo</a>
            </div>
        </div>
    )
}