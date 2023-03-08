import { useMDXComponent } from "next-contentlayer/hooks"
import { allPosts } from "@/.contentlayer/generated";
import { PostMetrics } from "@/components/postMetrics";
import { MDXComponents } from "@/util/MDXCustomComponents";
import { IPost } from "@/util/types";
import { usePostViews } from "@/util/usePostViews";
import { useEffect } from "react";
import { LikePostButton } from "@/components/likePostButton";
import { usePollIfInView } from "@/util/usePollIfInView";

export const getStaticPaths = async () => {
  const paths = allPosts.map(post => post.url)
  return { paths, fallback: false, }
}

export const getStaticProps = async ({ params }: any) => {
  const post = allPosts.find(post => post._raw.flattenedPath == params.slug);
  return { props: { post } }
}

const SinglePostPage = ({ post }: { post: IPost }): JSX.Element => {
  const interval = 5000
  const { shouldPoll, intersectionRef } = usePollIfInView(interval)
  const MDXContent = useMDXComponent(post.body.code);
  const { viewPost } = usePostViews(post.slug, {
    // Avoid fetching view count we *know* is stale since increment() mutation
    // returns view count
    revalidateOnMount: false,
    // Only poll when in view
    refreshInterval: shouldPoll ? interval : 0,
    // Override `usePostViews` default dedupingInterval for the polling usecase
    // (refresh interval can never be faster than deduping interval)
    dedupingInterval: interval,
  });

  useEffect(() => {
    viewPost()
  }, [])

  return <>
    {/* <Head>
      <title>{post.title}</title>
    </Head> */}
    <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 font-sans text-base xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3 text-slate-900 dark:text-gray-200">
      <div className="mb-6 relative">
        <h1 className="mb-1 sm:text-4xl text-3xl font-bold">{post.title}</h1>
        <div ref={intersectionRef} className="text-gray-500 text-sm"><PostMetrics post={post} /></div>
        <div className="fixed right-4 bottom-10 shadow-sm px-4 py-2 rounded-full border dark:border-gray-700 border-gray-200 bg-slate-50 dark:bg-slate-900 flex flex-col">
          <LikePostButton slug={post.slug} />
        </div>
      </div>
      <MDXContent components={{ ...MDXComponents }} />
    </div>
  </>
}

export default SinglePostPage;

