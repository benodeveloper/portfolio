import { readFileSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import path from 'path';
import { getPostPaths, POST_PATH } from '~/util/helper';
import { IPost } from '~/util/types';



const SinglePostPage = ():JSX.Element => {
 
    return <>
        <article>
          single post
        </article>
    </>
}

export default SinglePostPage;