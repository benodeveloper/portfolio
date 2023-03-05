import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'


export const DarkModeSwitcher = () => {

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    }

    const { theme, setTheme } = useTheme();
    console.log(theme);
    return <button onClick={() => { theme == "light" ? setTheme('dark') : setTheme('light') }} >

        <motion.div whileTap={{ rotate: 90 }} className="fill-slate-900">
            {
                theme == "dark" ?
                    <svg stroke="currentColor" fill="#f8fafc" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5 fill-slate-50" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path></g></svg> :
                    <svg stroke="currentColor" fill="#0f172a" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5 fill-slate-900" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22 6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"></path></g></svg>
            }
        </motion.div>
    </button>
}