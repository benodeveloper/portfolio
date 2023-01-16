import { TerminalEmulator } from "@/utils/TerminalEmulator";
import { useEffect, useRef } from "react"
import SocialMedia from "./socialMedia";

export default function Hero() {
    const terminalElement: any = useRef(null);
    
    var initTermenalElement = (function() {
        var executed = false;
        
        return function() {
            if (!executed) {
                const TE = new TerminalEmulator(terminalElement.current);
                TE.run();
            }
        };
    })();

    useEffect(() => {
        initTermenalElement();
    }, [terminalElement]);

    return <div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center ">
        <div className="relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6">
            <div className="-mx-4 sm:mx-0">
                <div
                    className="relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none]">
                    <div className="relative w-full flex flex-col">
                        <div className="flex-none border-b border-slate-500/30">
                            <div className="flex items-center h-8 space-x-1.5 px-3">
                                <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                            </div>
                        </div>
                        <div className="relative min-h-0 flex-auto flex flex-col">
                            <div className="w-full flex-auto flex min-h-0 overflow-auto">
                                <div className="w-full relative flex-auto"
                                style={{minHeight:"500px"}}
                                // style="min-height: 500px;" 
                                >
                                    <div className="px-5 py-5 " ref={terminalElement} id="termenal-screen"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative row-start-1 col-start-1 col-span-5 xl:col-span-6 -mt-10">
            <div className="h-[24.25rem] max-w-xl mx-auto lg:max-w-none flex items-center justify-center">
                <div className="w-full flex-none">
                    <div className="mx-16">

                        <div className="font-light w-full text-black dark:text-white">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-2 font-semibold">Hello, I'm Beno 👋</h1>
                            <p className="text-2xl sm:text-3xl lg:text-4xl ">
                                I'm a web developer at Doctori, and living in Agadir, MA.</p>
                            <SocialMedia />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}