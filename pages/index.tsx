import { GetStaticProps } from "next/types";
import { allPosts } from 'contentlayer/generated'
import { IPost } from "@/util/types";
import { compareDesc } from "date-fns";
import { Post } from "@/components/post";
import Image from "next/image";
import me from "@/assets/hassan-benadardor-img.jpg"

type HomeProps = {
  posts: IPost[]
}

const Home = ({ posts }: HomeProps): JSX.Element => {

  return <>
    <div className="lg:flex relative lg:pt-24 pt-16 lg:pb-40 pb-16 border-b border-b-[#14141423]">
      <div className="md:absolute -left-14 top-1/3">
        <ul className="flex md:flex-col">
            <li className="mr-5 md:mr-0">
              <a href="https://twitter.com/beno_developer" title="twitter" rel="noreferrer noopener nofollow" target="_blank">
                  <svg width={27} height={27} className="my-3" xmlns="http://www.w3.org/2000/svg" >
                  <path fill="#1E1E1E" d="M9.03 21.74c0 .112-.124.201-.282.201-.18.017-.305-.072-.305-.2 0-.112.125-.202.283-.202.163-.016.305.073.305.201Zm-1.692-.251c-.038.112.07.24.234.274.142.056.305 0 .337-.112.033-.112-.07-.24-.234-.29-.141-.04-.299.017-.337.128Zm2.406-.095c-.158.04-.267.145-.25.274.016.111.157.184.32.145.159-.04.268-.145.251-.257-.016-.106-.163-.178-.321-.162ZM13.326 0C5.776 0 0 5.879 0 13.623c0 6.191 3.8 11.49 9.227 13.354.697.129.941-.312.941-.675 0-.346-.016-2.256-.016-3.428 0 0-3.81.837-4.61-1.664 0 0-.621-1.625-1.514-2.043 0 0-1.246-.877.087-.86 0 0 1.356.112 2.102 1.44 1.192 2.155 3.19 1.536 3.968 1.167.125-.893.479-1.513.87-1.881-3.042-.347-6.112-.799-6.112-6.17 0-1.535.413-2.306 1.284-3.288-.141-.363-.604-1.86.142-3.791 1.138-.363 3.756 1.507 3.756 1.507a12.49 12.49 0 0 1 3.418-.474c1.16 0 2.33.162 3.42.474 0 0 2.617-1.875 3.755-1.507.746 1.937.283 3.428.142 3.79.87.99 1.404 1.76 1.404 3.29 0 5.387-3.206 5.817-6.25 6.169.502.44.926 1.278.926 2.59 0 1.881-.016 4.21-.016 4.668 0 .362.25.803.942.675C23.309 25.112 27 19.814 27 13.623 27 5.879 20.876 0 13.326 0ZM5.29 19.256c-.07.056-.054.184.038.29.087.09.213.129.283.056.071-.056.055-.184-.038-.29-.087-.09-.212-.129-.283-.056Zm-.588-.452c-.038.072.017.162.125.217.088.056.196.04.234-.039.039-.072-.016-.162-.125-.217-.109-.034-.196-.017-.234.039Zm1.764 1.987c-.087.073-.054.24.07.346.126.129.284.146.355.056.07-.072.038-.24-.071-.346-.12-.128-.283-.145-.354-.056Zm-.62-.82c-.088.055-.088.2 0 .329.086.128.233.184.304.128.087-.072.087-.217 0-.346-.076-.128-.218-.184-.305-.112Z"/>
                  </svg>
              </a>
          </li>
          <li className="mr-5 md:mr-0">
              <a href="https://github.com/benodeveloper" title="github" rel="noreferrer noopener nofollow" target="_blank">
                  <svg width={33} height={27} className="my-3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.608 6.72889C29.6289 7.02418 29.6289 7.31954 29.6289 7.61485C29.6289 16.6218 22.8237 27 10.3858 27C6.55395 27 2.99431 25.882 0 23.9414C0.544438 24.0046 1.06786 24.0259 1.63325 24.0259C4.79501 24.0259 7.70559 22.95 10.0299 21.1149C7.05648 21.0515 4.56472 19.0899 3.70619 16.3898C4.12502 16.4531 4.54377 16.4953 4.98353 16.4953C5.59075 16.4953 6.19802 16.4109 6.76335 16.2633C3.66438 15.6304 1.34005 12.8883 1.34005 9.57656V9.49221C2.24041 9.99846 3.28744 10.3149 4.39714 10.357C2.57543 9.13354 1.38194 7.04529 1.38194 4.68277C1.38194 3.41716 1.71691 2.257 2.30324 1.2445C5.63259 5.37887 10.6371 8.07883 16.2487 8.37419C16.144 7.86794 16.0812 7.34065 16.0812 6.81329C16.0812 3.05856 19.0964 0 22.8446 0C24.7918 0 26.5507 0.822654 27.7862 2.15156C29.3146 1.85627 30.7804 1.2867 32.0788 0.506254C31.576 2.08832 30.5083 3.41723 29.1053 4.26092C30.4663 4.11334 31.7856 3.73356 33 3.20627C32.0788 4.55621 30.927 5.75851 29.608 6.72889Z" fill="#1E1E1E"/>
                  </svg>
              </a>
          </li>
          <li className="mr-5 md:mr-0">
              <a href="https://www.linkedin.com/in/benodeveloper" title="linkedin" rel="noreferrer noopener nofollow" target="_blank">
                  <svg width={27} height={27} className="my-3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.04366 27H0.445982V8.97348H6.04366V27ZM3.24182 6.51449C1.45185 6.51449 0 5.03188 0 3.24189C1.28117e-08 2.38208 0.341547 1.5575 0.949503 0.949524C1.55746 0.341555 2.38203 0 3.24182 0C4.10158 0 4.92615 0.341555 5.53411 0.949524C6.14207 1.5575 6.48361 2.38208 6.48361 3.24189C6.48361 5.03188 5.03117 6.51449 3.24182 6.51449ZM26.994 27H21.4083V18.2248C21.4083 16.1335 21.3661 13.4515 18.498 13.4515C15.5877 13.4515 15.1417 15.7236 15.1417 18.0742V27H9.55005V8.97348H14.9187V11.4325H14.9971C15.7445 10.0161 17.57 8.52146 20.2934 8.52146C25.9585 8.52146 27 12.2521 27 17.0978V27H26.994Z" fill="#1E1E1E"/>
                  </svg>
              </a>
          </li>
        </ul>
      </div>
      <div className="xl:w-1/2 md:my-32">
        <h1 className="lg:text-[82px] md:text-6xl text-5xl lg:leading-[84px] font-bold">Hassan BENADARDOR</h1>
        <h3 className="font-semibold lg:text-2xl text-xl  md:mt-0 mt-3">Software developer at Doctori</h3>
      </div>
      <div className="xl:w-1/2 relative mt-10">
          <Image priority={true} className="z-50 mx-auto rounded-lg md:max-w-md" title="Beno developer image" alt="hassan BENADARODOR"  src={me} />
          <div className="absolute top-10 md:block -right-24 hidden -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="402" height="439" fill="none">
                <path fill="#1F1F1F" d="M200.319 219.5H110.38C49.058 219.5 0 170.419 0 110.432 0 49.081 49.058 0 110.38 0h89.939v219.5h91.301c59.96 0 109.017 49.081 110.38 109.068C402 389.919 351.58 439 291.62 439h-91.301V219.5Z"/>
                <path fill="#1F1F1F" d="M241.2 42.264h54.508c36.794 0 66.773 29.994 66.773 68.168 0 36.81-29.979 66.804-66.773 66.804H241.2V42.264Z"/>
            </svg>
          </div>
      </div>
    </div>

    <div className="lg:flex lg:my-24 my-16">
      <div className="lg:w-2/5">
        <h3 className="text-4xl font-semibold">Recent Posts</h3>
      </div>
      <div className="lg:w-3/5 lg:pt-10">
        {posts.length && posts.map((post, idx) => {
        return <Post key={idx} post={post}/>
        })}
      </div>
    </div>
  </>
}
export const getStaticProps: GetStaticProps = async () => {
  const posts: IPost[] | any = allPosts
    .filter(post => post.status == "published")
    .sort((a: IPost | any, b: IPost | any) => compareDesc(new Date(a.date), new Date(b.date)))
  return {
    props: { posts },
  };
};

export default Home;
