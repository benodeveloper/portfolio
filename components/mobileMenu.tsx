import Link from "next/link";
import { Logo } from "./logo";
import { DarkModeSwitcher } from "./darkModeSwitcher";
import { AnimatePresence, useCycle, motion } from 'framer-motion'

const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  
  
const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };

export function MobileMenu({show, showMenu}:any) {

    return <AnimatePresence>
        {show &&
        <motion.div
            initial={{ width: 0 }}
            animate={{
              width: 300
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
            className={`navbar-menu relative lg:hidden`}>
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8">
                    <Link className="mr-auto text-3xl font-bold leading-none" href={"/"}>
                        <Logo/>
                    </Link>
                    <button className="navbar-close" onClick={showMenu}>
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li className="mb-1">
                            <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href={"/"}>Home</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href={"/blog"}>Blog</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href={"/about"}>About</Link>
                        </li>
                        <li className="mb-1">
                            <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto">
                    <DarkModeSwitcher />
                </div>
            </nav>
        </motion.div>
        }
        </AnimatePresence>
        
}