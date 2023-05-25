import { useMDXComponent } from "next-contentlayer/hooks"
import { allPosts } from "@/.contentlayer/generated";
import { PostMetrics } from "@/components/postMetrics";
import { MDXComponents } from "@/util/MDXCustomComponents";
import { IPost } from "@/util/types";
import { usePostViews } from "@/util/usePostViews";
import { useEffect } from "react";
import { LikePostButton } from "@/components/likePostButton";
import { usePollIfInView } from "@/util/usePollIfInView";
import { PostHead } from "@/components/postHead";

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
    <PostHead post={post} />
    <div 
    className="relative  pt-48 max-w-5xl mx-auto text-sm"
    >
      <div className="mb-20 relative">
        <h1 className="mb-7 sm:text-5xl text-3xl font-bold">{post.title}</h1>
        <div ref={intersectionRef} className=""><PostMetrics post={post} /></div>
        {/* <div className="fixed right-4 bottom-10 shadow-sm px-4 py-2 rounded-full border dark:border-neutral-700 border-neutral-200 bg-neutral-50 dark:bg-neutral-900 flex flex-col">
          <LikePostButton slug={post.slug} />
        </div> */}
      </div>
      <MDXContent components={{ ...MDXComponents }} />
    </div>
  </>
}

export default SinglePostPage;

