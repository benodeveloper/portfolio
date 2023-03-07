import { useState } from 'react';
import { useDebounce } from 'react-use';
import useSWR from 'swr';
const getPostLikes = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

const incrementPostLikes = async (slug: string) => {
    const res = await fetch(`/api/likes/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: 1 })
    })

    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

type UsePostLikesProps = {
    likes: number;
    currentUserLikes: number;
    isLoading: boolean,
    isError: boolean,
    likePost: () => void
}

export const usePostLikes = (slug: string): UsePostLikesProps => {
    const { data, error, isLoading, mutate } = useSWR(`/api/likes/${slug}`, getPostLikes);
    const [likesCounter, setLikes] = useState(0);
    const likePost = () => {

        if (!data || data.currentUserLikes >= 1) return

        mutate({ likes: data.likes + 1, currentUserLikes: 1, }, false)

        setLikes(1);
    }

    useDebounce(() => {
        if (likesCounter == 0) return

        mutate(incrementPostLikes(slug))
        setLikes(0);
    }, 1000, [likesCounter])

    return {
        likes: data?.likes,
        currentUserLikes: data?.currentUserLikes,
        isLoading,
        isError: !!error,
        likePost
    }
}