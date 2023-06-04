import { allPosts } from "@/.contentlayer/generated"
import { Post } from "@/components/post"
import { IPost } from "@/util/types"
import { compareDesc } from "date-fns"
import { GetStaticProps } from "next"
import Link from "next/link"
import Image from "next/image"
import { hookVisit } from "@/util/slackHooks"
import { useEffect } from "react"

type PostsProps = {
    posts: IPost[]
}


export const getStaticProps: GetStaticProps = async () => {
    const posts: IPost[] | any = allPosts
        .filter(post => post.status == "published")
        .sort((a: IPost | any, b: IPost | any) => compareDesc(new Date(b.publishedAt), new Date(a.publishedAt)))
    return {
        props: { posts },
    };
};

export default function Blog({ posts }: PostsProps) {
    const featuredPost = posts.filter(post => post.featured).pop();
    const otherPosts = posts.filter(post => post.slug != featuredPost?.slug);

    useEffect(() => {
        hookVisit("Blog");
    }, [])

    return <div className="container mx-auto px-4">
        <div className="xl:flex relative lg:pt-14 pt-16 lg:pb-16 pb-16 border-b border-b-[#14141423]">
            <div className="xl:w-1/2 relative">
                <h1 className="lg:text-[82px] md:text-6xl text-5xl lg:leading-[84px] font-bold xl:mb-0 mb-16">Blog</h1>
                <div className="absolute top-24 xl:block -left-52 hidden -z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="402" height="439" fill="none">
                        <path fill="#1F1F1F" d="M200.319 219.5H110.38C49.058 219.5 0 170.419 0 110.432 0 49.081 49.058 0 110.38 0h89.939v219.5h91.301c59.96 0 109.017 49.081 110.38 109.068C402 389.919 351.58 439 291.62 439h-91.301V219.5Z" />
                        <path fill="#1F1F1F" d="M241.2 42.264h54.508c36.794 0 66.773 29.994 66.773 68.168 0 36.81-29.979 66.804-66.773 66.804H241.2V42.264Z" />
                    </svg>
                </div>
            </div>
            <div className="xl:w-1/2 relative">
                {featuredPost && <article className="lg:py-14 py-10">
                    <div className="relative text-sm text-[#666666] font-light xl:max-w-2xl">
                        <Image priority={true} className="z-50 w-full rounded-lg" title={featuredPost?.title} width={612} height={344.7} alt={featuredPost?.title} src={featuredPost.thumbnail} />
                        <Link title={featuredPost?.title} href={featuredPost?.url}>
                            <h2 className="lg:text-5xl text-3xl font-bold mt-10 mb-5 text-jet-black hover:text-[#2165f4]">{featuredPost?.title}</h2>
                        </Link>
                        <div className="flex justify-between">
                            <div className="flex">
                                <span className="mr-2 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="none">
                                        <path fill="#A8A8A8" fillRule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm.656-10.5a.656.656 0 0 0-1.312 0v4.375c0 .362.294.656.656.656h3.5a.656.656 0 0 0 0-1.312H7.656V3.5Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                {featuredPost.readingTime}
                            </div>
                        </div>
                    </div>
                </article>}

            </div>
        </div>

        <div className="lg:flex lg:my-24 my-16">
            <div className="lg:w-2/5">
                <h3 className="text-4xl font-semibold">Recent Posts</h3>
            </div>
            <div className="lg:w-3/5 lg:pt-10">
                {otherPosts.length && otherPosts.map((post, idx) => {
                    return <Post key={idx} post={post} />
                })}
            </div>
        </div>
    </div>
}