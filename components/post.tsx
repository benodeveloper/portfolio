import { IPost } from "@/util/types"
import { usePostLikes } from "@/util/usePostLikes"
import { format, parseISO } from "date-fns"
import Link from "next/link"

export const Post = ({ post }: { post: IPost }) => {
    const { likes, isLoading, isError } = usePostLikes(post.slug);
    return <article className="mb-12">
        <Link href={post.url}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
            <h3 className="text-gray-700 dark:text-gray-300/90 pt-2">{post.description}</h3>
        </Link>
        <div className="text-gray-600 text-sm mt-2 dark:text-gray-400/90">
            <time dateTime={post.publishedAt} className="text-sm">
                {format(parseISO(post.publishedAt), 'LLL d, yyyy')}
            </time>
            <span className="mx-2 font-bold">.</span>
            <span>{post.readingTime}</span>
            <span className="mx-2 font-bold">.</span>
            <span>
                1,799 views
            </span>
            <span className="mx-2 font-bold">.</span>
            <span>
                {isError || isLoading ? "..." : likes} likes
            </span>
            <span className="mx-2 font-bold">.</span>
            <span>1 shares</span>
        </div>
    </article>
}