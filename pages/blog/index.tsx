import { allPosts } from "@/.contentlayer/generated"
import { Post } from "@/components/post"
import { IPost } from "@/util/types"
import { compareDesc } from "date-fns"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"

type PostsProps = {
    posts: IPost[]
}

const Posts = ({ posts }: PostsProps) => {
    const router = useRouter();
    const [filteredPosts, setPosts] = useState<IPost[]>(posts);

    useEffect(() => {
        if (!router.isReady) return;

        const { tag } = router.query;
        if (tag && tag != "") {
            console.log(tag)
            setPosts(posts.filter(post => post.tagsAsArray?.includes(tag.toString())));
        }

    }, [router.isReady, router.query]);


    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setPosts(posts.filter(
            post =>
                post.title.toLowerCase().includes(value.toLowerCase()) ||
                post.tags?.toLowerCase().includes(value.toLowerCase())
        ));
    }

    return <div className="my-20">
        <div className="mb-14">
            <h1 className="text-5xl mb-7 font-bold dark:text-neutral-100 text-neutral-900">Blog</h1>
            <h4 className="dark:text-neutral-400 text-lg text-neutral-600">Here you will find my notes and tutorials for my future self, and hopefully also for you.</h4>
        </div>
        <div className="overflow-hidden rounded-lg dark:bg-neutral-800 bg-neutral-200/40 text-neutral-600  mt-4 mb-10">
            <div className="relative">
                <input className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 placeholder:text-neutral-500 focus:outline-none"
                    onChange={e => searchHandler(e)}
                    placeholder="Find anything..." role="combobox" type="text" aria-expanded="false"
                    aria-autocomplete="list" />
                <svg className="pointer-events-none absolute top-4 right-4 h-6 w-6 fill-neutral-500"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                </svg>
            </div>
        </div>

        {
            !filteredPosts.length ?
                <div className="text-center my-3 dark:text-neutral-100 text-neutral-600"> No Posts Found 😥</div> :
                filteredPosts.map((post, key) => <Post post={post} key={key} />)
        }

    </div>
}

export const getStaticProps: GetStaticProps = async () => {
    const posts: IPost[] | any = allPosts.sort((a: IPost | any, b: IPost | any) => compareDesc(new Date(a.date), new Date(b.date)))

    return {
        props: { posts },
    };
};

export default Posts;