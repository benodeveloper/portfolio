import { GetStaticProps } from "next/types";
import { allPosts } from 'contentlayer/generated'
import { IPost } from "@/util/types";
import { compareDesc } from "date-fns";
import { Post } from "@/components/post";
import Head from "next/head";

type HomeProps = {
  posts: IPost[]
}

const Home = ({ posts }: HomeProps): JSX.Element => {
  return <>
    <Head>
      <title>Beno developer | Full stack developer</title>
    </Head>

    <div className="my-20">
      <div className="mb-14">
        <h2 className="text-5xl mb-7 font-bold dark:text-gray-100 text-gray-900">Blog</h2>
        <h4 className="dark:text-gray-400 text-lg text-gray-600">Java, Spring Boot, coding, technology and beyond.</h4>
      </div>
      {posts.map((post, key) => <Post post={post} key={key} />)}
    </div>
  </>
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

export default Home;
