import HeroLogo from "../assets/blog_hero_logo.svg";

export function Content() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 pb-10">
            <div className="order-2 mx-auto px-8 md:px-10 md:py-32 md:max-w-3xl">
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-purple-900">
                    Hello World ! 
                </span> 
                <br/>
                <span className="block text-lg mt-4 md:text-2xl lg:text-2xl lg:text-3xl">
                    My Name is Radu and I have a passion for the world of web development.
                </span>
                <span className="block text-lg md:text-2xl lg:text-2xl lg:text-3xl">
                    I am at the beginning of this journey and hope to offer you some useful contents.
                </span>
                <span className="block mt-4 text-md md:mt-7 lg:text-lg xl:text-xl">
                    Learn more about me <a href="/about" className="text-purple-700 hover:text-purple-500 uppercase font-semibold">Here</a>
                </span>
            </div>
            <div>
                <img className="order-1 w-8/12 py-20 mx-auto md:w-full md:py-32 lg:py-28 lg:w-10/12 xl:py-20" src={HeroLogo}></img>
            </div>
      </div>
    )
}