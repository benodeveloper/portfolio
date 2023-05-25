import { allPosts } from "@/.contentlayer/generated"
import { Post } from "@/components/post"
import { IPost } from "@/util/types"
import { compareDesc } from "date-fns"
import { GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"

import image from "@/assets/image.jpg"
import Image from "next/image"

type PostsProps = {
    posts: IPost[]
}

// const Posts = ({ posts }: PostsProps) => {
//     const router = useRouter();
//     const [filteredPosts, setPosts] = useState<IPost[]>(posts);
//     const [tag, setTag] = useState<string>("");

//     useEffect(() => {
//         if (!router.isReady) return;

//         const { tag: queryTag } = router.query;
//         setTag(((queryTag ?? "") as string).replaceAll("-", " "))
//         if (queryTag && queryTag != "") {
//             setPosts(posts.filter(post => post.tagsAsArray?.includes(queryTag.toString().replaceAll("-", " "))));
//         } else {
//             setPosts(posts);
//         }

//     }, [router.isReady, router.query]);


//     const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         const { value } = e.target;
//         let postsCopy = posts;

//         if (tag != "") {
//             postsCopy = postsCopy.filter(
//                 post => post.tagsAsArray?.includes(tag)
//             );
//         }

//         setPosts(postsCopy.filter(post =>
//         (post.title.toLowerCase().includes(value.toLowerCase()) ||
//             post.tags?.toLowerCase().includes(value.toLowerCase()))))
//     }

//     if (tag != "" && !router.isReady) return <>loading</>
//     return <div className="my-20">
//         <div className="mb-14">
//             <h1 className="text-5xl mb-7 font-bold dark:text-neutral-100 text-neutral-900">Blog</h1>
//             <h4 className="dark:text-neutral-400 text-lg text-neutral-600">Here you will find my notes and tutorials for my future self, and hopefully also for you.</h4>
//         </div>
//         <div className="mt-4 mb-10">
//             <div className="overflow-hidden rounded-lg dark:bg-neutral-800 bg-neutral-200/40 text-neutral-600 my-2">
//                 <div className="relative">
//                     <input className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 placeholder:text-neutral-500 focus:outline-none"
//                         onChange={e => searchHandler(e)}
//                         placeholder="Find anything..." role="combobox" type="text" aria-expanded="false"
//                         aria-autocomplete="list" />
//                     <svg className="pointer-events-none absolute top-4 right-4 h-6 w-6 fill-neutral-500"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
//                     </svg>
//                 </div>
//             </div>
//             {tag != "" &&
//                 <div className="relative pr-8 mt-3 inline-block px-3 py-1 text-center bg-neutral-200/60 text-neutral-500 dark:bg-neutral-800/60 dark:text-neutral-500 rounded-full">
//                     {tag}
//                     <Link className="hover:text-indigo-500 dark:hover:text-blue-400/80 text-sm absolute right-3 top-1 mt-0.5" href="/blog"><span> &times; </span></Link>
//                 </div>
//             }

//         </div>


//         {
//             !filteredPosts.length ?
//                 <div className="text-center my-3 dark:text-neutral-100 text-neutral-600"> No Posts Found 😥</div> :
//                 filteredPosts.map((post, key) => <Post post={post} key={key} />)
//         }

//     </div >
// }

export const getStaticProps: GetStaticProps = async () => {
    const posts: IPost[] | any = allPosts
        .filter(post => post.status == "published")
        .sort((a: IPost | any, b: IPost | any) => compareDesc(new Date(a.date), new Date(b.date)))

    return {
        props: { posts },
    };
};

// export default Posts;


export default function Blog({ posts }: PostsProps) {
    return <>
            <div className="xl:flex relative lg:pt-14 pt-16 lg:pb-16 pb-16 border-b border-b-[#14141423]">
                <div className="xl:w-1/2 relative">
                    <h1 className="lg:text-[82px] md:text-6xl text-5xl lg:leading-[84px] font-bold xl:mb-0 mb-16">Blog</h1>
                    <div className="absolute top-24 xl:block -left-52 hidden -z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="402" height="439" fill="none">
                            <path fill="#1F1F1F" d="M200.319 219.5H110.38C49.058 219.5 0 170.419 0 110.432 0 49.081 49.058 0 110.38 0h89.939v219.5h91.301c59.96 0 109.017 49.081 110.38 109.068C402 389.919 351.58 439 291.62 439h-91.301V219.5Z"/>
                            <path fill="#1F1F1F" d="M241.2 42.264h54.508c36.794 0 66.773 29.994 66.773 68.168 0 36.81-29.979 66.804-66.773 66.804H241.2V42.264Z"/>
                        </svg>
                    </div>
                </div>
                <div className="xl:w-1/2 relative">
                    <article className="lg:py-14 py-10">
                        <div className="relative text-sm text-[#666666] font-light xl:max-w-2xl">
                            <Image priority={true} className="z-50 w-full rounded-lg" title="Beno developer image" alt="hassan BENADARODOR"  src={image} />
                            <Link title="title" href="#">
                                <h2 className="lg:text-5xl text-3xl font-bold mt-10 mb-5 text-jet-black hover:text-[#2165f4]">Don’t be a Junior Software Developer!</h2>
                            </Link>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <span className="mr-2 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="none">
                                        <path fill="#A8A8A8" fillRule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm.656-10.5a.656.656 0 0 0-1.312 0v4.375c0 .362.294.656.656.656h3.5a.656.656 0 0 0 0-1.312H7.656V3.5Z" clipRule="evenodd"/>
                                        </svg>
                                    </span>
                                    14 min read
                                </div>
                            </div>
                        </div>
                    </article>
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