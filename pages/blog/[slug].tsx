import { useEffect } from "react";
import { IPost } from "@/util/types";
import PostViews from "@/components/PostViews";
import { PostHead } from "@/components/postHead";
import { usePostViews } from "@/util/usePostViews";
import { allPosts } from "@/.contentlayer/generated";
import { PostMetrics } from "@/components/postMetrics";
import { usePollIfInView } from "@/util/usePollIfInView";
import { useMDXComponent } from "next-contentlayer/hooks"
import SharePostButton from "@/components/SharePostButton";
import { MDXComponents } from "@/util/MDXCustomComponents";
import { LikePostButton } from "@/components/likePostButton";
import image from "@/assets/maximalfocus-HakTxidk36I-unsplash.jpg"
import Link from "next/link";
import slugify from "slugify";

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

  const handleClickScroll = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth',block: "start"});
    }
  };


  return <>
    <PostHead post={post} />
    <header className="h-96 w-full bg-fixed bg-cover bg-no-repeat lg:mb-16 mb-5 relative py-16 flex items-end" style={{backgroundImage:`url(${image.src})`}}>
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
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="relative max-w-3xl">
          <MDXContent components={{ ...MDXComponents }} />
        </div>
        <div className="lg:mx-16 mx-4">
          <div className="sticky top-3">
            <div className="flex flex-row lg:flex-col lg:w-fit w-full justify-between">
              <LikePostButton slug={post.slug}/>
              <PostViews slug={post.slug} />
              {/* <SharePostButton  post={post}  /> */}
            </div>
            <div className="lg:mt-16 mt-5 bg-blue-50 px-10 xl:h-full  py-12 rounded-md">
              <h3 className="mb-4 font-bold">Related Post</h3>
              <ul className="list-disc">
              {post.headlinesAsArray?.map((headline, idx) => {
                const slug = slugify(headline)
                return <li key={idx} className="text-[#2165f4] mb-3 text-xs">
                <span className="cursor-pointer" onClick={() => handleClickScroll(slug)}>{headline}</span>
                </li>
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SinglePostPage;

