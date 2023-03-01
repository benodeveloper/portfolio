import { TerminalEmulator } from "@/utils/TerminalEmulator";
import { useEffect, useRef } from "react"
import SocialMedia from "./socialMedia";
import image from "@/assets/ben-adardor-el-hassan-image.png"

export default function Hero() {


    return <div
        className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center ">
        <div className="relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6">
            <div className="-mx-4 sm:mx-0">
            <img className="max-w-md translate-x-8" src={image.src} alt="hassan" />
            </div>
        </div>
        <div className="relative row-start-1 col-start-1 col-span-5 xl:col-span-6 -mt-10">
            <div className="h-[24.25rem] max-w-xl mx-auto lg:max-w-none flex items-center justify-center">
                <div className="w-full flex-none">
                    <div className="">

                        <div className="font-light w-full text-black dark:text-white">
                            <h1 className="text-6xl sm:text-5xl lg:text-6xl mb-14 font-semibold">Hello, I'm Beno 👋</h1>
                            <p className="text-2xl sm:text-3xl lg:text-4xl mb-10">
                                I'm a web developer at Doctori, and living in Agadir, MA.</p>
                            <SocialMedia />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}