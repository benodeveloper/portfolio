import { IPost } from "./types";

const BASE_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/images`;

export const generatePostOGImage = (post: IPost) => {
    const details = {
        title: post.title.replaceAll(" ", "_"),
        description: post.description.replaceAll(" ", "_"),
        tags: post.tags?.replaceAll(" ", "_"),
        publiched_at: post.publishedDate.replaceAll(" ", "_"),
    }
    return [
        `${BASE_URL}`,
        `/title:${details.title}`,
        `_&_description:${details.description}`,
        `_&_tags:${details.tags}`,
        `_&_publiched_at:${details.publiched_at}`,
        '_&_bg:og_image'
    ].join("");
}

export const generateOGImage = () => {

    return [
        `${BASE_URL}`,
        '/og_image.png'
    ].join("");
}