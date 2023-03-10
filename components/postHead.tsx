import { IPost } from "@/util/types"
import { NextSeo } from "next-seo"
import { generatePostOGImage } from "@/util/ogImageGenerator";

type PostHeadProps = {
    post: IPost
}
export const PostHead = ({ post }: PostHeadProps) => {
    const ogImage = generatePostOGImage(post);
    return <>
        <NextSeo
            title={post.title}
            description={post.description ?? undefined}
            canonical={post.url}
            openGraph={{
                url: post.url,
                title: post.title,
                description: post.description ?? undefined,
                images: [
                    {
                        url: ogImage,
                        width: 1200,
                        height: 600,
                        alt: post.title,
                    },
                ],
            }}
        />
    </>
}