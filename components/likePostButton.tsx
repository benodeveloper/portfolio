import { usePostLikes } from "@/util/usePostLikes";

export const LikePostButton = ({ slug }: { slug: string }) => {
    const { isLoading, likePost, currentUserLikes, likes, isError } = usePostLikes(slug);

    const likePostHandler = () => {
        if (isLoading) return
        likePost();
    }

    return <div className="flex justify-center items-center flex-col">

        <button className="my-2" onClick={likePostHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`h-6 w-6 hover:scale-110 transition-all ${currentUserLikes ? "fill-red-500" : "fill-black/30 "}`}>
                <path d="m47.6 300.4 180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141-45.6-7.6-92 7.3-124.6 39.9l-12 12-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
        </button>

        <span className="text-sm"> {isError || isLoading ? "..." : likes} likes</span>
    </div>
}