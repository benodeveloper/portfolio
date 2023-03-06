import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from "reading-time";
import slugify from "slugify"
import { prettyCodeCustomClasses, prettyCodeOptions } from './util/rehypePrettyCode';
import remakeGfm from "remark-gfm"

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true
        },
        description: {
            type: 'string',
            description: "the description of the post",
            required: true
        },
        publishedAt: {
            type: 'date',
            description: 'The date of the post',
            required: true
        },
        status: { type: "string" }
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (post) => slugify(post.title),
        },
        url: {
            type: 'string',
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
        readingTime: {
            type: "string",
            resolve: (post) => readingTime(post.body.raw).text
        }
    }
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        //     esbuildOptions(options) {
        //     options.target = "esnext"
        //     return options
        //   }, 
        remarkPlugins: [[remakeGfm]],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions], [prettyCodeCustomClasses]]
    },
})