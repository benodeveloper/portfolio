"use client"

import { PlayIcon } from "lucide-react";
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
        <ReactPlayer width={"100%"} height={"auto"} url="/media/videos/video.mp4" loop={true} playing={palying} muted={true}/>
      )}
        
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-[#6a7bd38f] to-[#081e8d63] flex items-center px-12">
            <h1 className="text-9xl font-medium text-white">We are a design and technology company.</h1>
            <div className=" absolute h-20 w-20 right-4 bg-white flex justify-center items-center">
                <PlayIcon className="h-40 text-[#1b42fe]"/>
            </div>
        </div>
        
    </div>
}