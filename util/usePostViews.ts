import useSWR, { SWRConfiguration } from 'swr';

const BASE_API = "/api/views";

const getPostViews = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

const incrementPostViews = async (slug: string) => {
    const res = await fetch(`${BASE_API}/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ views: 1 })
    })

    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}


type UsePostViewsProps = {
    views: number;
    isLoading: boolean,
    isError: boolean,
    viewPost: () => void
}

export const usePostViews = (slug: string, config?: SWRConfiguration): UsePostViewsProps => {
    const { data, error, isLoading, mutate } = useSWR(`${BASE_API}/${slug}`, getPostViews, { dedupingInterval: 6000, ...config });
    const viewPost = () => mutate(incrementPostViews(slug))
    return {
        views: data?.views,
        isLoading,
        isError: !!error,
        viewPost
    }
}