import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";


export const Navbar = () => {
    const [show, setShow] = useState<boolean>( false);
    const router = useRouter();
    
    const showMenu = () => {
        setShow(!show);
    }
    return <>
        <nav className="h-20">
            <div className="flex justify-between py-5 relative">
                <div>
                <Link href="/"><span className="text-3xl font-bold">Beno.</span></Link>
                    
                </div>
                <button 
                onClick={showMenu}
                type="button" 
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-white rounded-lg md:hidden focus:outline-none">
                    <span className="sr-only">Open Menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <ul className={`flex gap-3 md:gap-6 text-base z-10 flex-col font-light absolute md:relative md:translate-x-0 md:border-0 md:flex-row md:translate-y-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none transition-all bg-[#0F172A] top-0 translate-y-20 w-48 px-6 py-5 shadow-md rounded-md border-2 border-[#20283C] right-0 md:opacity-100  ${show ? "-translate-x-2 opacity-100" : " translate-x-3 opacity-0"}`}>
                    <li  className={`${router.pathname == "/" ? "font-medium" : ""}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`${router.pathname == "/blog" ? "font-medium" : ""}`}><Link href="/blog">Blog</Link></li>
                    <li className={`${router.pathname == "/about" ? "font-medium" : ""}`}><Link href="/about">About</Link></li>
                    <li className={`${router.pathname == "/contact" ? "font-medium" : ""}`}><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </>
}