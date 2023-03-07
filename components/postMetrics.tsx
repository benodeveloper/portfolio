import { useEffect } from "react";
import { format, parseISO } from "date-fns";
import { IPost } from "@/util/types";
import { usePostViews } from "@/util/usePostViews";
import { usePostLikes } from "@/util/usePostLikes";
import { LikePostButton } from "./likePostButton";

export const PostMetrics = ({ post }: { post: IPost }) => {
    const { likes, isLoading: likesisLoading, isError: likesOnError } = usePostLikes(post.slug);
    const { views, viewPost, isLoading: viewsIsLoading, isError: viewsOnError } = usePostViews(post.slug);
    useEffect(() => { viewPost() }, [])

    return <>
        <div className="text-gray-500 text-sm">
            <time dateTime={post.publishedAt} className="text-sm">
                {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
            </time>
            <span className="mx-2 font-bold">.</span>
            <span>{post.readingTime}</span>
            <span className="mx-2 font-bold">.</span>
            <span> {viewsOnError || viewsIsLoading ? "..." : views} likes</span>
            <span className="mx-2 font-bold">.</span>
            <span> {likesOnError || likesisLoading ? "..." : likes} likes</span>
        </div>
        <div>
            <LikePostButton slug={post.slug} />
        </div>
    </>
}