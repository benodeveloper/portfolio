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
import image from "@/assets/maximalfocus-HakTxidk36I-unsplash.jpg"
import PostViews from "@/components/PostViews";
import SharePostButton from "@/components/SharePostButton";

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
    <header className="h-96 w-full bg-fixed bg-cover bg-no-repeat mt-7 mb-16 relative py-16 flex items-end" style={{backgroundImage:`url(${image.src})`}}>
      <div className="absolute inset-0 bg-black/75 w-full h-full"/>
      <div className="relative container mx-auto px-4 text-white">
      <div className="mb-3 text-sm font-light ">
        {post.tagsAsArray?.map((tag, idx) => <span key={idx} className="tag after:bg-white">{tag}</span>)}
      </div>
        <h1 className="mb-7 sm:text-5xl text-3xl font-bold ">{post.title}</h1>
        <div ref={intersectionRef} className="flex justify-between text-sm font-light">
          <PostMetrics post={post} />
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4">
      <div className="flex">
        <div className="relative max-w-3xl">
          <MDXContent components={{ ...MDXComponents }} />
        </div>
        <div className="mx-16">
          <div className="sticky top-3">
            <LikePostButton slug={post.slug}/>
            <PostViews slug={post.slug} />
            <SharePostButton />
            <div className="mt-16 bg-blue-50 px-10 xl:w-64 py-12 rounded-md">
              <h3 className="mb-4 font-bold">Related Post</h3>
              <ul>
                <li className="text-[#2165f4] mb-1">Post</li>
                <li className="text-[#2165f4] mb-1">Post</li>
                <li className="text-[#2165f4] mb-1">Post</li>
                <li className="text-[#2165f4] mb-1">Post</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SinglePostPage;

