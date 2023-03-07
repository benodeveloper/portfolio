import { allPosts } from "@/.contentlayer/generated";
import { MDXComponents } from "@/util/MDXCustomComponents";
import { IPost } from "@/util/types";
import { usePostLikes } from "@/util/usePostLikes";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks"

export const getStaticPaths = async () => {
  const paths = allPosts.map(post => post.url)
  return { paths, fallback: false, }
}

export const getStaticProps = async ({ params }: any) => {
  const post = allPosts.find(post => post._raw.flattenedPath == params.slug);
  return { props: { post } }
}

const SinglePostPage = ({ post }: { post: IPost }): JSX.Element => {
  const { likes, isLoading, isError, likePost, currentUserLikes } = usePostLikes(post.slug);
  const MDXContent = useMDXComponent(post.body.code);

  return <>
    {/* <Head>
      <title>{post.title}</title>
    </Head> */}
    <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 font-sans text-base xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3 text-slate-900 dark:text-gray-200">
      <div className="mb-6">
        <h1 className="mb-1 sm:text-4xl text-3xl font-bold">{post.title}</h1>
        <div className="text-gray-500 text-sm">
          <time dateTime={post.publishedAt} className="text-sm">
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
          </time>
          <span className="mx-2 font-bold">.</span>
          <span>{post.readingTime}</span>
          <span className="mx-2 font-bold">.</span>
          <span>
            1,799 views
          </span>
          <span className="mx-2 font-bold">.</span>
          <span> {isError || isLoading ? "..." : likes} likes</span>
          <span className="mx-2 font-bold">.</span>
          <span>1 shares</span>
        </div>
      </div>
      <div>
        <button onClick={() => {
          if (isLoading) return
          likePost()
        }} className={` border  px-4 py-2 rounded-full ${currentUserLikes ? "text-slate-200 border-slate-200 bg-slate-900 " : "text-slate-900 border-slate-900"}`}>Like it</button>
      </div>
      <MDXContent components={{ ...MDXComponents }} />
    </div>
  </>
}

export default SinglePostPage;

