import Nav from "@/components/nav";
import VideoPlayer from "@/components/videoplayer";
import { ArrowRightIcon, Headphones, Play } from "lucide-react";

export default function Home() {
  return (
    <>
      <Nav />
      <VideoPlayer />
      <div className="bg-black relative text-white">
        <div className="grid grid-cols-3 mx-10 py-44">
          <div className="">
            <div className="relative py-4">
              <h2 className="text-7xl font-medium">Projects</h2>
              <div className="h-[1px] w-[70%] bg-white absolute -top-5 left-0" />
            </div>
          </div>
          
          <div className="col-span-2 px-6 flex gap-7 overflow-hidden">
            
          {Array.from([1,2,4]).map(el => <div key={el} className="w-96 shadow relative">
              <img src="https://engagemassive.com/wp-content/uploads/2024/02/Primasun-feat-tile-450x593.jpg" className="w-full" alt="" />
              <div className="absolute bottom-0 w-full hover:h-[38%] h-[29%] left-0 bg-black bg-opacity-80 py-5 px-3 overflow-hidden transition-all ease-in-out">
                <h3 className="text-2xl font-semibold">Primasun</h3>
                <p className="text-ellipsis line-clamp-3 font-extralight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla eveniet veniam exercitationem quidem, illum amet reiciendis ipsum possimus, impedit consequuntur cupiditate alias. Eveniet nam libero tempore aliquid? Placeat, deserunt!
                </p>
                <a className="mt-6 block relative" href="#"> View
                  <span className="h-[2px] absolute top-[calc(50%-4px)] w-[120px] bg-white -translate-x-[3px] rounded-full" />
                  <span className="absolute top-[calc(50%-15px)] translate-x-[110px]">
                    <ArrowRightIcon />
                  </span>
                </a>
              </div>
            </div>)}
          </div>
        </div>
      </div>

      <div className="bg-[#1b42fe] relative px-32 py-32">
            <div className="h-[650px] my-auto max-w-[1200px] mx-auto relative" style={{backgroundImage:"url(https://engagemassive.com/wp-content/uploads/2023/11/QARSU23-AllTheWorldsAStage-JenBernard-KelseyJacobson-Hero2-450x300.jpg)"}}>
                <div  className="absolute top-0 left-0 w-full h-full bg-[#1b42fe] bg-opacity-80">
                    <div className="bg-white rounded-full py-6 px-6 absolute top-[calc(50%-0.75rem)] left-[calc(50%-0.75rem)]">
                      <Play className="text-[#1b42fe]"/>
                    </div>
                </div>
            </div>
      </div>

      <div className="relative bg-white p-32">
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <h2 className="text-5xl font-medium mb-6">
                    Lorem ipsum dolor sit, 
                  </h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, neque. Quidem ad harum, dolorem hic, voluptate consequuntur laborum corrupti odit totam quis cupiditate cumque repellendus consectetur obcaecati praesentium quas quod?</p>
                </div>
                <div className="col-span-1">
                  <div className="h-40 w-full bg-white rounded shadow-md border">
                      <div className="flex h-full px-3">
                        <div className="h-24 w-24 bg-gray-400 rounded-lg my-3 shadow">
                          <Headphones/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
      </div>
      <div className="h-[1500px] bg-black relative"></div>
    </>
  );
}
