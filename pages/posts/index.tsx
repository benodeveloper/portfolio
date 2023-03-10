import { allPosts } from "@/.contentlayer/generated"
import { Post } from "@/components/post"
import { IPost } from "@/util/types"
import { compareDesc } from "date-fns"
import { GetStaticProps } from "next"

type PostsProps = {
    posts: IPost[]
}

const Posts = ({ posts }: PostsProps) => {
    return <div className="my-20">
        <h2 className="text-center text-4xl font-bold mb-14 dark:text-white text-neutral-800">Blog</h2>
        {posts.map((post, key) => <Post post={post} key={key} />)}
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