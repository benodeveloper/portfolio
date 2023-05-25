import Link from "next/link"
import { IPost } from "@/util/types"
import { PostMetrics } from "./postMetrics"
import slugify from "slugify"

// export const Post = ({ post }: { post: IPost }) => {
//     return <article className="mb-12">
//         <Link title={post.title} href={post.url}>
//             <h2 className="text-2xl font-bold hover:text-indigo-500 dark:hover:text-blue-400/80 transition-colors text-neutral-800 dark:text-white">{post.title}</h2>
//         </Link>
//         <div className="my-3 text-sm font-bold text-neutral-700/90 ">
//             {post.tagsAsArray?.map((tag, idx) =>
//                 <Link href={`/blog?tag=${slugify(tag)}`} key={idx} className="px-3 py-1 text-center bg-neutral-200/60 text-neutral-500 dark:bg-neutral-800/60 dark:text-neutral-500 hover:text-indigo-500 dark:hover:text-blue-400/80 rounded-full mx-2 first:ml-0"> {tag} </Link>
//             )}
//         </div>
//         <Link title={post.title} href={post.url}>
//             <h3 className="text-neutral-700 dark:text-neutral-300/90 pt-2">{post.description}</h3>
//         </Link>
//         <div className="text-neutral-600 text-sm mt-2 dark:text-neutral-400/90">
//             <PostMetrics post={post} />
//         </div>
//     </article>
// }

export const Post = ({ post }: { post: IPost }) => {
    return <article className="lg:py-16 py-10 border-b">
    <div className="relative text-sm text-[#666666] font-light">
      <div className="lg:block hidden absolute -left-40">
        {post.publishedDate}
      </div>
      <div className="mb-3">
      {post.tagsAsArray?.map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
      </div>
      <Link title={post.title} href={post.url}>
        <h2 className="lg:text-4xl text-3xl font-semibold mt-3 mb-5 text-jet-black hover:text-[#2165f4]">{post.title}</h2>
      </Link>
      <div className="mb-4">
        <p>{post.description} </p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <span className="lg:hidden inline-block mr-2">
          {post.publishedDate}
        </span>
          <span className="mr-2 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="none">
              <path fill="#A8A8A8" fillRule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm.656-10.5a.656.656 0 0 0-1.312 0v4.375c0 .362.294.656.656.656h3.5a.656.656 0 0 0 0-1.312H7.656V3.5Z" clipRule="evenodd"/>
            </svg>
          </span>
          {post.readingTime}
        </div>
        <Link title={post.title} href={post.url}>
            <div className="lg:ml-7 text-end lg:mt-0 text-jet-black font-medium hover:text-[#2165f4]">Continue reading</div>
        </Link>
      </div>
    </div>
  </article>
}