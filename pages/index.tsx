import Posts from "~/components/posts";
import Welcome from "~/components/welcome";

// @see https://github.com/ChangoMan/nextjs-typescript-mdx-blog
const app = () => {
  return <>
    <Welcome/>
    <Posts/>
  </>
}

export default app;
