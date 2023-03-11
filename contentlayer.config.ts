import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from "reading-time";
import slugify from "slugify"
import { prettyCodeCustomClasses, prettyCodeOptions } from './util/rehypePrettyCode';
import remakeGfm from "remark-gfm"
import { format, parseISO } from 'date-fns';

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
        status: { type: "string" },
        tags: {
            type: "string"
        }
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (post) => slugify(post.title.toLowerCase()),
        },
        tagsAsArray: {
            type: 'list',
            resolve: (post) => post.tags?.toString().split(" | "),
        },
        url: {
            type: 'string',
            resolve: (post) => `/blog/${post._raw.flattenedPath}`,
        },
        readingTime: {
            type: "string",
            resolve: (post) => readingTime(post.body.raw).text
        },
        publishedDate: {
            type: "string",
            resolve: (post) => format(parseISO(post.publishedAt), 'LLLL d, yyyy')
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