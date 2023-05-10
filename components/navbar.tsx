import Link from "next/link";
import { useState } from "react";
import { DarkModeSwitcher } from "./darkModeSwitcher";
import { Logo } from "./logo";
import { MobileMenu } from "./mobileMenu";


export const Navbar = () => {
    const [show, setShow] = useState<boolean>(false);

    const showMenu = () => {
        setShow(!show);
    }
    return <>
        <nav className="relative bg-white px-4 py-7 flex justify-between items-center dark:text-white">
            <Link className="h-10" title="Beno developer home" href="/">
                <Logo/>
            </Link>
            <div className="lg:hidden">
                <button onClick={showMenu} className="navbar-burger flex items-center text-white  p-3">
                    <svg className="block h-4 w-4" fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                <li>
                    <Link href={"/"} className="text-sm text-gray-400 hover:text-gray-500">Home</Link>
                </li>
                <li><Link className="text-sm text-blue-600 font-bold" href={"/blog"}>Blog</Link></li>
                <li><Link className="text-sm text-gray-400 hover:text-gray-500" href={"/about"}>About</Link></li>
                <li><Link className="text-sm text-gray-400 hover:text-gray-500" href={"/contact"}>Contact</Link></li>
            </ul>
            <div className="hidden lg:inline-block">
                <DarkModeSwitcher />
            </div>
        </nav>
        <MobileMenu show={show} showMenu={showMenu} />
    </>
}