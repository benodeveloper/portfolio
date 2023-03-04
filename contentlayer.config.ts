import {defineDocumentType, makeSource} from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code'
import { prettyCodeOptions } from './util/rehypePrettyCode';

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern:`**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required:true
        }
    },
    computedFields: {
        url:{
            type: 'string',
            resolve: (post)=> `/posts/${post._raw.flattenedPath}`,
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
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
    },
})