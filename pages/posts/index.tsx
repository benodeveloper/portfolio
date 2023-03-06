import { allPosts } from "@/.contentlayer/generated"
import { IPost } from "@/util/types"
import { compareDesc, format, parseISO } from "date-fns"
import { GetStaticProps } from "next"
import Link from "next/link"

type PostsProps = {
    posts: IPost[]
}

const Posts = ({ posts }: PostsProps) => {
    return <div className="my-20">
        <h2 className="text-center text-4xl font-bold mb-14 dark:text-white text-gray-800">Blog</h2>
        {posts.map((post, key) => {
            return <article key={key} className="mb-12">
                <Link href={post.url}>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
                    <h3 className="text-gray-700 dark:text-gray-300/90 pt-2">{post.description}</h3>
                </Link>
                <div className="text-gray-600 text-sm mt-2 dark:text-gray-400/90">
                    <time dateTime={post.publishedAt} className="text-sm">
                        {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
                    </time>
                    <span className="mx-2 font-bold">.</span>
                    <span>4 min read</span>
                    <span className="mx-2 font-bold">.</span>
                    <span>
                        1,799 views
                    </span>
                    <span className="mx-2 font-bold">.</span>
                    <span> 100 likes</span>
                    <span className="mx-2 font-bold">.</span>
                    <span>1 shares</span>
                </div>
            </article>
        })}
    </div>
}
export const getStaticProps: GetStaticProps = async () => {
    // const posts:IPost[] = [{
    //   title: "title",
    //   description: "description",
    //   slug: "slug"
    // }];
    const posts: IPost[] | any = allPosts.sort((a: IPost | any, b: IPost | any) => compareDesc(new Date(a.date), new Date(b.date)))

    return {
        props: { posts },
    };
};

export default Posts;