import { SingleBlog } from "./singleBlog"

export const BlogSection = () => {
    return <div className="my-20">
        <h2 className="text-center text-4xl font-bold mb-14">Blog</h2>

        <SingleBlog/>
        <SingleBlog/>

    </div>
}