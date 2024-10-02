import Nav from "@/components/nav";
import VideoPlayer from "@/components/videoplayer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <VideoPlayer />
      <div className="h-[1500px]"></div>
    </div>
  );
}
