import { SocialIcon } from 'react-social-icons';
import "./style.css"

export function Footer() {
    const iconStyle = {
        width: "20px",
        height: "20px",
    };

    const icons = [
        {socialMediaUrl: "https://www.facebook.com/radu.iulian.524/"},
        {socialMediaUrl: "https://www.instagram.com/raduiulian22/"},
        {socialMediaUrl: "https://github.com/radu-ux"}
    ]

    return (
        <footer className="w-full text-center border-t border-grey p-4 pbin-b mt-10">
            <div className="flex justify-between">
                <div className="text-sm text-gray-500 font-semibold">
                    Created by <br className="inline-block sm:hidden"/> @RaduIulian, &copy; 2021
                </div>
                <div>
                    {
                        icons.map((item, index) => {
                            return <div key={index} className="px-2 inline-block"><SocialIcon url={item.socialMediaUrl} style={iconStyle}/></div>
                        })
                    }
                </div>
            </div>
        </footer>
    )
}