import { GetStaticProps } from "next/types";
import { allPosts } from 'contentlayer/generated'
import { IPost } from "@/util/types";
import { compareDesc } from "date-fns";
import { Post } from "@/components/post";

type HomeProps = {
  posts: IPost[]
}

const Home = ({ posts }: HomeProps): JSX.Element => {
  return <>
    <div className="my-20">
      <div className="mb-14">
        <h1 className="text-5xl mb-7 font-bold dark:text-neutral-100 text-neutral-900">Posts</h1>
      </div>
      {posts.map((post, key) => <Post post={post} key={key} />)}
    </div>
  </>
}
export const getStaticProps: GetStaticProps = async () => {
  const posts: IPost[] | any = allPosts
    .filter(post => post.status == "published")
    .sort((a: IPost | any, b: IPost | any) => compareDesc(new Date(a.date), new Date(b.date)))
  return {
    props: { posts },
  };
};

export default Home;
