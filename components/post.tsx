import Link from "next/link"
import { IPost } from "@/util/types"
import { PostMetrics } from "./postMetrics"

export const Post = ({ post }: { post: IPost }) => {
    return <article className="mb-12">
        <Link href={post.url}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
            <h3 className="text-gray-700 dark:text-gray-300/90 pt-2">{post.description}</h3>
        </Link>
        <div className="text-gray-600 text-sm mt-2 dark:text-gray-400/90">
            <PostMetrics post={post} />
        </div>
    </article>
}