import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from 'next-themes'


export const Navbar = () => {
    const [show, setShow] = useState<boolean>(false);
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const showMenu = () => {
        setShow(!show);
    }
    return <>
        <nav className="h-20 text-slate-900 dark:text-white ">
            <div className="flex justify-between py-5 relative">
                <div>
                    <Link className="text-2xl font-bold" href="/">Beno Developer</Link>

                </div>
                <button
                    onClick={showMenu}
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none">
                    <span className="sr-only">Open Menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <ul className={`flex gap-3 md:gap-6 text-base z-10 flex-col font-light absolute md:relative md:translate-x-0 md:border-0 md:flex-row md:translate-y-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none transition-all dark:bg-slate-900 bg-slate-50 top-0 translate-y-20 w-48 md:w-auto px-6 py-5 shadow-md rounded-md border-2 dark:border-slate-900 right-0 md:opacity-100 ${show ? "-translate-x-2 md:translate-x-0 opacity-100" : " translate-x-3 opacity-0 md:translate-x-0"}`}>
                    <li className={`before:block before:absolute before:left-0 before:h-0.5 before:-bottom-1 dark:before:bg-white before:bg-slate-900 before:rounded relative before:transition-all ${router.pathname == "/" ? "font-bold before:w-full" : " font-medium  before:w-0"}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`before:block before:absolute before:left-0 before:h-0.5 before:-bottom-1 dark:before:bg-white before:bg-slate-900 before:rounded relative before:transition-all ${router.pathname == "/blog" ? "font-bold before:w-full" : " font-medium  before:w-0"}`}><Link href="/blog">Blog</Link></li>
                    <li className={`before:block before:absolute before:left-0 before:h-0.5 before:-bottom-1 dark:before:bg-white before:bg-slate-900 before:rounded relative before:transition-all ${router.pathname == "/about" ? "font-bold before:w-full" : " font-medium  before:w-0"}`}><Link href="/about">About</Link></li>
                    <li className={`before:block before:absolute before:left-0 before:h-0.5 before:-bottom-1 dark:before:bg-white before:bg-slate-900 before:rounded relative before:transition-all ${router.pathname == "/contact" ? "font-bold before:w-full" : " font-medium  before:w-0"}`}><Link href="/contact">Contact</Link></li>
                    <li>
                        <button onClick={() => { theme == "light" ? setTheme('dark') : setTheme('light') }} >
                            dark/light
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}