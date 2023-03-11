import Link from "next/link"
import { IPost } from "@/util/types"
import { PostMetrics } from "./postMetrics"
import slugify from "slugify"

export const Post = ({ post }: { post: IPost }) => {
    return <article className="mb-12">
        <Link title={post.title} href={post.url}>
            <h2 className="text-2xl font-bold hover:text-indigo-500 dark:hover:text-blue-400/80 transition-colors text-neutral-800 dark:text-white">{post.title}</h2>
        </Link>
        <div className="my-3 text-sm font-bold text-neutral-700/90 ">
            {post.tagsAsArray?.map((tag, idx) =>
                <Link title={`${tag} tag`} href={`/blog?tag=${slugify(tag)}`} key={idx} className="px-3 py-1 text-center bg-neutral-200/60 text-neutral-500 dark:bg-neutral-800/60 dark:text-neutral-500 hover:text-indigo-500 dark:hover:text-blue-400/80 rounded-full mx-2 first:ml-0"> {tag} </Link>
            )}
        </div>
        <Link title={post.title} href={post.url}>
            <h3 className="text-neutral-700 dark:text-neutral-300/90 pt-2">{post.description}</h3>
        </Link>
        <div className="text-neutral-600 text-sm mt-2 dark:text-neutral-400/90">
            <PostMetrics post={post} />
        </div>
    </article>
}