import Post from "~/components/post"
import { BasePageLayout } from "~/util/types"



const Blog: BasePageLayout = () => {
    return <div className="my-32">
                <h1 className="text-center text-4xl font-bold mb-14">Blog</h1>
                <Post/>
                <Post/>
            </div>
  }
  export default Blog;