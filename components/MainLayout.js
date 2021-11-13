import {HomeIcon, CalendarIcon, ClipboardIcon, PhotographIcon, CogIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import Link from 'next/link';
import Image from "next/image";
import LogoWhite from "../assets/logowhite.svg";

const menus = [
    {
        name: 'Dashboard',
        icon: HomeIcon,
        path: '/dashboard'
    },
    {
        name: 'Media',
        icon: PhotographIcon,
        path: '/media'
    },
    {
        name: 'Posts',
        icon: ClipboardIcon,
        path: '/post'
    },
    {
        name: 'Schedule',
        icon: CalendarIcon,
        path: '/schedule'
    },
    {
        name: 'Setting',
        icon: CogIcon,
        path: '/setting'
    }
]

export default function MainLayout({children}) {
    const router = useRouter();

    return (
        <div className="flex flex-no-wrap">
            <div className="h-screen w-64 fixed bg-gray-800 shadow flex-col justify-between hidden sm:flex">
                <div className="px-8">
                    <div className="h-16 w-full mt-5 flex items-center justify-center">
                        <Image src={LogoWhite} width={150} height={60}/>
                    </div>
                    <ul className="mt-8">
                        {menus.map(({name, icon: Component, path}, i) => (
                            <li key={i} className={`flex w-full justify-between ${router.pathname === path ? 'text-white' : 'text-gray-400'} cursor-pointer items-center mb-6`}>
                                <Link href={path}>
                                    <a href="javascript:void(0)"
                                       className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                                        <Component width={20} className="mr-2"/>
                                        <span className="text-sm ml-2">{name}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="px-8 border-t border-gray-700">
                    <ul className="w-full flex items-center justify-between bg-gray-800">
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button aria-label="show notifications"
                                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell"
                                     width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button aria-label="open chats"
                                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-messages" width="20" height="20"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button aria-label="open settings"
                                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-settings" width="20" height="20"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button aria-label="open logs"
                                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive"
                                     width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                                    <line x1="10" y1="12" x2="14" y2="12"></line>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container ml-auto py-10 h-64 md:w-4/5 w-11/12 px-7">
                {children}
            </div>
        </div>
    )
}