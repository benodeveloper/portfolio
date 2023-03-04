import { readFileSync } from "fs";
import { join } from "path";
import { getPostPaths, POST_PATH } from "./helper"
import { IPost } from "./types";



export function getPostBySlug(slug: string): IPost {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(POST_PATH, `${realSlug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
  
    const post: IPost = {
      slug: realSlug,
      title: realSlug,
      description: realSlug,
    };
  
    return post;
  }

export const getAllPosts = () => {
    const slugs = getPostPaths();

    const posts = slugs
    .map((slug) => getPostBySlug(slug))
    return posts;
}