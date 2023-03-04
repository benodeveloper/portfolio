import { allPosts } from "@/.contentlayer/generated";
import { IPost } from "@/util/types";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks" 
import Head from "next/head";
import Link from "next/link";


export const getStaticPaths =async () => {
  const paths = allPosts.map(post => post.url)
  return {
    paths,
    fallback: false,
  } 
}

export const getStaticProps =async ({params}:any) => {
  const post = allPosts.find(post => post._raw.flattenedPath == params.slug);
  return {
    props: {
      post
    }
  }
}

const SinglePostPage = ({post}:{post:IPost}):JSX.Element => {
    const MDXContent = useMDXComponent(post.body.code);
    return <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article className="mx-auto max-w-2xl py-16">
      <div className="mb-6 text-center">
        <Link className="text-center text-sm font-bold uppercase text-blue-700" href="/">
          Home
        </Link>
      </div>
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <MDXContent />
    </article>
  </>
}

export default SinglePostPage;

