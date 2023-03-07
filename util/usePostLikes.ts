import { useState } from 'react';
import { useDebounce } from 'react-use';
import useSWR from 'swr';
const fetcher = async (slug: string) => {
    const res = await fetch(`/api/likes/${slug}`)
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

const likePostFetcher = async (slug: string, likes: number) => {
    const res = await fetch(`/api/likes/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes })
    })

    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

export const usePostLikes = (slug: string) => {
    const { data, error, mutate } = useSWR(`/api/likes/${slug}`, () => fetcher(slug));
    const [likesCounter, setLikes] = useState(0);
    const likePost = () => {
        if (!data || data.currentUserLikes > 0) return

        mutate({ likes: data.likes + 1 }, false)

        setLikes(likesCounter + 1);
    }

    useDebounce(() => {
        if (likesCounter == 0) return

        mutate(likePostFetcher(slug, likesCounter))
        setLikes(0);
    }, 1000, [likesCounter])

    return {
        likes: data?.likes,
        currentUserLikes: data?.currentUserLikes,
        isLoading: !error && !data,
        isError: !!error,
        likePost
    }
}