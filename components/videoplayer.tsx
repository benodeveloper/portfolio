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
    return <div className="relative">
        {domLoaded && (
            <div className="overflow-hidden -z-0 h-[100vh] fixed">
                <div className="">
                    <ReactPlayer width={"100%"} height={"auto"} url="/media/videos/video.mp4" loop={true} playing={palying} muted={true}/>
                </div>
            </div>
      )}
        
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-[#6a7bd38f] to-[#081e8d63] flex items-center px-12 z-10">
            <h1 className="text-9xl font-medium text-white">We are a design and technology company.</h1>
            <div className="absolute right-[calc(15%-8px)] translate-y-[1%] h-10 w-10 rounded-full bg-[#1b42fe]" />
            <div className=" absolute h-20 w-20 right-[15%] backdrop-blur bg-white/5 rounded-full flex justify-center items-center">
                <Play className="h-40 text-[#1b42fe]"/>
            </div>
        </div>
        <div className="absolute w-[2px] h-80  bg-white top-0 left-4 opacity-55"/>
        
    </div>
}