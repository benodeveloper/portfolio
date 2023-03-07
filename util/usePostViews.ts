import useSWR from 'swr';

const BASE_API = "/api/views";

const fetcher = async (slug: string) => {
    const res = await fetch(`${BASE_API}/${slug}`)
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

const viewPostFetcher = async (slug: string) => {
    const res = await fetch(`${BASE_API}/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ views: 1 })
    })

    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

export const usePostViews = (slug: string) => {
    const { data, error, mutate } = useSWR(`${BASE_API}/${slug}`, () => fetcher(slug));
    const viewPost = () => mutate(viewPostFetcher(slug))
    return {
        views: data?.views,
        isLoading: !error && !data,
        isError: !!error,
        viewPost
    }
}