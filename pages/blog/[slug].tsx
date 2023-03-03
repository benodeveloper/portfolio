import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { getPostPaths, POST_PATH } from '~/util/helper';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { IPost } from '~/util/types';



type SinglePostPageProps = {
    source: MDXRemoteSerializeResult;
    frontMatter: IPost;
}

const SinglePostPage = ({source, frontMatter}:SinglePostPageProps):JSX.Element => {
 
    return <>
        <article>
            <h1>{frontMatter.title}</h1>
            <div>
            <MDXRemote {...source} />
            </div>
        </article>
    </>
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postFilePath = params ? path.join(POST_PATH, `${params.slug}.mdx`) : "";
    
    const source = readFileSync(postFilePath);

    const { content, data } = matter(source);
    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ['anchor'],
                },
              },
            ],
          ],
          format: 'mdx',
        },
        scope: data,
      });
    return {
        props: {
          source: mdxSource,
          frontMatter: data,
        },
      };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostPaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default SinglePostPage;