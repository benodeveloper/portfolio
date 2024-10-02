"use client"
export default function VideoPlayer() {
    return <div className="relative">
        <video src="/media/videos/video.mp4" loop={true} autoPlay={true}></video>
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-[#1b42fe] bg-opacity-20 flex items-center px-12">
            <h1 className="text-9xl font-bold text-[#1b42fe]">Hello World!</h1>
        </div>
        
    </div>
}