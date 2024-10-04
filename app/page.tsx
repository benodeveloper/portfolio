import Nav from "@/components/nav";
import VideoPlayer from "@/components/videoplayer";
import { ArrowRightIcon, FastForward, Forward, Headphones, Play, Rewind } from "lucide-react";

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

            {Array.from([1, 2, 4]).map(el => <div key={el} className="w-96 shadow relative">
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
        <div className="h-[650px] my-auto max-w-[1200px] mx-auto relative" style={{ backgroundImage: "url(https://engagemassive.com/wp-content/uploads/2023/11/QARSU23-AllTheWorldsAStage-JenBernard-KelseyJacobson-Hero2-450x300.jpg)" }}>
          <div className="absolute top-0 left-0 w-full h-full bg-[#1b42fe] bg-opacity-80">
            <div className="bg-white rounded-full py-6 px-6 absolute top-[calc(50%-0.75rem)] left-[calc(50%-0.75rem)]">
              <Play className="text-[#1b42fe]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-purple-700 p-32 text-white">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h2 className="text-5xl font-medium mb-6">
              Lorem ipsum dolor sit,
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, neque. Quidem ad harum, dolorem hic, voluptate consequuntur laborum corrupti odit totam quis cupiditate cumque repellendus consectetur obcaecati praesentium quas quod?</p>
          </div>
          <div className="col-span-1 relative">
            <div style={{backgroundImage: 'url(https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg)'}} className="absolute top-2 left-2 rounded-lg opacity-65 h-[calc(100%-1rem)] w-[calc(100%-1rem)] bg-cover bg-center" />
            <div className="w-full  rounded-lg shadow-md  backdrop-blur bg-white/15 py-6">
              <div className="flex px-3 flex-col">
                <div className="flex">
                  <div className="h-16 w-16 bg-purple-400 rounded-lg my-1 shadow flex justify-center items-center bg-cover" style={{backgroundImage: 'url(https://marketplace.canva.com/EAFy2GgsPAo/2/0/1600w/canva-red-minimalist-creative-man-without-head-album-cover-_bB_o4a7jdE.jpg)'}}>
                      <Headphones className="w-6 h-6" />
                    
                  </div>
                  <div className="px-4 my-3 w-[calc(100%-4rem)]">
                    <div className="mb-2">
                      <div className="text-lg font-semibold">Lorem ipsum dolor</div>
                      <div className="text-sm">alias corrupti tenetur explicabo.</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm  mb-1">
                    <div>0:18</div>
                    <div>- 4:24</div>
                  </div>
                  <div className="h-1 bg-purple-800/70 w-full rounded relative">
                    <div className="bg-purple-600 h-[calc(100%+2px)] -translate-y-[1px] rounded w-[50%] relative " >
                      <span className="h-2 w-2 bg-purple-500 absolute right-0 top-[calc(50%-0.25rem)] rounded-full"></span>
                    </div>
                  </div>
                  <div className="flex mx-auto w-fit gap-2 mt-3">
                    <span className="bg-purple-800/70 py-2 px-2 rounded-full text-white">
                          <Rewind className="h-4 w-4"/>
                    </span>
                    <span className="bg-purple-800/70 py-2 px-2 rounded-full text-white">
                          <Play className="h-4 w-4"/>
                    </span>
                    <span className="bg-purple-800/70 py-2 px-2 rounded-full text-white">
                          <FastForward className="h-4 w-4"/>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-3 bg-black py-16">
        <div>

        </div>
        <div className="col-span-2">
        <div className="" >
            <img src="https://cdn.prod.website-files.com/650311fc2ebc7fe34237a592/6517459d2eb76e5d3a3fc293_hero-3.jpg" alt="" />
        </div>
        </div>
      </div>
      <div className="h-[1500px] bg-black relative"></div>
    </>
  );
}
