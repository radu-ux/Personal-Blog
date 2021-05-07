import { Disclosure, Menu } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/solid';
import WebsiteLogo from '../assets/Personal-Website-Logo.svg';

export function Nav() {
    const navigationOptions = [
      {option: "About", url:"/about"},
      {option: "Projects", url:"/projects"},
      {option: "Resume", url:"/resume"}
    ];

    return (
        <Disclosure as="nav">
          {({ open }) => (
              <div className="relative">
                  <Disclosure.Button className="absolute flex w-full justify-between px-5 py-2 bg-purple-100 sm:hidden">
                    <span><img src={WebsiteLogo} className="w-10/12"></img></span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <div className="flex justify-between bg-purple-100 hidden shadow-md sm:flex">
                        <div className="px-5 py-2">
                        <a href="/"><img src={WebsiteLogo}></img></a>
                        </div>
                        <div className="py-4">
                          {
                            navigationOptions.map((item, index) => {
                              return <a key={index} href={item.url} className="px-5 hover:text-indigo-500">{item.option}</a>
                            })
                          }
                        </div>
                  </div>
                  <Disclosure.Panel className="flex flex-col px-4 pt-14 pb-2 text-md text-gray-500 divide-y divide-gray-200 shadow-md sm:hidden">
                    {
                      navigationOptions.map((item, index) => {
                        return <a key={index} href={item.url} className="py-2 hover:text-indigo-500">{item.option}</a>
                      })
                    }
                  </Disclosure.Panel>
              </div>
          )}
          </Disclosure>
    )
}