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
        <div className="mb-14">
            <h1 className="text-5xl mb-7 font-bold dark:text-neutral-100 text-neutral-900">Blog</h1>
            <h4 className="dark:text-neutral-400 text-lg text-neutral-600">Here you will find my notes and tutorials for my future self, and hopefully also for you.</h4>
        </div>
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