import { IPost } from "@/util/types"
import Head from "next/head"

type PostHeadProps = {
    post: IPost
}
export const PostHead = ({ post }: PostHeadProps) => {
    return <Head>
        <title>{`${post.title} - by beno developer`}</title>
        <meta name="theme-color" content="#000000" />
        <meta property="og:site_name" content="Medium" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta name="title"
            content={`${post.title} | by beno developer`} />
        <meta property="og:title"
            content={post.title} />
        <meta name="description"
            content={post.description} />
        <meta property="og:description"
            content={post.description} />
        <meta property="og:url"
            content={post.url} />
        <meta property="al:web:url"
            content={post.url} />
        {/* <meta property="og:image"
            content="og:image" /> */}
        <meta property="article:author" content="beno developer" />
        <meta name="author" content="beno developer" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="referrer" content="unsafe-url" />
        <meta property="twitter:title"
            content={post.title} />
        <meta name="twitter:site" content="@beno_developer" />
        <meta property="twitter:description"
            content={post.description} />
        {/* <meta name="twitter:image:src"
            content="img_url" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={post.readingTime} />
        <meta name="twitter:tile:template:testing" content="2" />

        <link rel="search" type="application/opensearchdescription+xml" title="Beno developer" href="/osd.xml" />
    </Head>
}