import { readFileSync } from "fs";
import { join } from "path";
import { getPostPaths, POST_PATH } from "./helper"
import matter from "gray-matter"

type PostItems = {
    [key: string]: string;
  };

export function getPostBySlug(slug: string): PostItems {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(POST_PATH, `${realSlug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
  
    const items: PostItems = {};
  
    // Ensure only the minimal needed data is exposed
   
        items["slug"] = realSlug;
        items["content"] = content;
        // items["data"] = data;
  
    return items;
  }

export const getAllPosts = () => {
    const slugs = getPostPaths();

    const posts = slugs
    .map((slug) => getPostBySlug(slug))
    return posts;
}