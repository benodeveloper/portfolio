import { useEffect } from "react";
import { format, parseISO } from "date-fns";
import { IPost } from "@/util/types";
import { usePostViews } from "@/util/usePostViews";
import { usePostLikes } from "@/util/usePostLikes";
import { usePollIfInView } from "@/util/usePollIfInView";

export const PostMetrics = ({ post }: { post: IPost }) => {

    const { likes, isLoading: likesisLoading, isError: likesOnError } = usePostLikes(post.slug);
    const { views, isLoading: viewsIsLoading, isError: viewsOnError } = usePostViews(post.slug);

    return <div>
        <time dateTime={post.publishedDate} className="text-sm">
            {post.publishedDate}
        </time>
        <span className="mx-2 font-bold">.</span>
        <span>{post.readingTime}</span>
        <span className="mx-2 font-bold">.</span>
        <span> {viewsOnError || viewsIsLoading ? "..." : views} views</span>
        <span className="mx-2 font-bold">.</span>
        <span> {likesOnError || likesisLoading ? "..." : likes} likes</span>
    </div>
}