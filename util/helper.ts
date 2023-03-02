import { readdirSync } from "fs";
import path from "path";

export const POST_PATH = path.join(__dirname, 'posts');

export const getPostPaths = () => readdirSync(POST_PATH).filter(p => /\.mdx?$/.test(p));