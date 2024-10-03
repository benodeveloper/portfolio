"use client"

import { Play, PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player"

export default function VideoPlayer() {
    
  const [domLoaded, setDomLoaded] = useState(false);
  const [palying, setPlaying] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
    setPlaying(true)
  }, []);
    return <div className="relative xl:min-h-svh z-0">
        {domLoaded ? (
            <div className="fixed h-screen inset-x-[-10px]">
                <div className="fixed inset-x-[-10px] z-[-1] mx-auto h-screen max-w-[2400px]">
                    <ReactPlayer width={"100%"} height={"auto"} url="/media/videos/video.mp4" loop={true} playing={palying} muted={true}/>
                </div>
            </div>
      ): <div className="h-screen"/>}
        
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-[#6a7bd38f] to-[#081e8d63] flex justify-center px-12 z-10 flex-col">
            <h1 className="text-9xl font-medium text-white">Lorem ipsum, dolor sit.</h1>
            <h4 className="text-2xl text-white font-thin my-11">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <div className="absolute right-[calc(15%-8px)] translate-y-[1%] h-10 w-10 rounded-full bg-[#1b42fe]" />
            <div className=" absolute h-20 w-20 right-[15%] backdrop-blur bg-white/5 rounded-full flex justify-center items-center">
                <Play className="h-40 text-[#1b42fe]"/>
            </div>
        </div>
        
    </div>
}