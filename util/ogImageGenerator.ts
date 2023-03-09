import { IPost } from "./types";

const BASE_URL = "/api/og";

export const generateOGImage = (post: IPost) => {
    const details = {
        title: post.title,
        description: post.description,
        tags: post.tags,
        publiched_at: post.publishedDate,
    }
    return `${BASE_URL}?post=${JSON.stringify(details)}`;
}