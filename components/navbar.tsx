import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { useRouter } from 'next/router';

const menuItems = ["home", "blog", "about", "contact"];


export const Navbar = () => {
    const [show, setShow] = useState<boolean>(false);
    const router = useRouter();

    const showMenu = () => {
        setShow(!show);
    }
    return <>
    <nav className="flex justify-between items-center py-7">
        <Link href={"/"}>
            <Logo />
        </Link>
        <ul className="hidden md:flex text-lg font-medium text-jet-gray">
            {menuItems.map(item => (<li key={item}>
                <Link className={`mx-6 capitalize ${router.pathname.includes(item) || (router.pathname == "/" && item == "home") ? "text-jet-black font-semibold" : ""} hover:text-jet-black`}  href={`/${item == "home"? "" : item }`}>{item}</Link>
            </li>) )}
        </ul>
        <div className={`${show ? 'menu-show' : ''} menu bg-white py-8 fixed w-full z-40 left-0 right-0 top-0 h-screen md:hidden block`}>
            <ul className="text-lg font-medium text-jet-gray pt-20">
                {menuItems.map(item => (<li key={item} className="my-5 text-4xl">
                    <Link onClick={() => setShow(false)} className={`mx-6 capitalize ${router.pathname.includes(item) || (router.pathname == "/" && item == "home") ? "text-jet-black font-semibold" : ""} hover:text-jet-black`}  href={`/${item == "home"? "" : item }`}>{item}</Link>
                </li>) )}
            </ul>
        </div>
        <div className={`menu-button md:hidden z-50 ${show ? 'menu-show' : ''}`}>
            <button onClick={showMenu}>
                <div className="menu_part"></div>
                <div className="menu_part"></div>
                <div className="menu_part"></div>
            </button>
        </div>
        
    </nav>
    </>
}