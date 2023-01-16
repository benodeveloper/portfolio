import { Link } from "react-daisyui";

export default function Article() {
    return <article>
        <p className="pt-12 mb-3 text-sm font-normal ">April 16, 2020</p>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to
            quickly deploy a static website</a></h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap
            lots of websites and are becoming the basis for a variety of tools that even influence both web
            designers and developers influence both web designers and developers.</p>
        <Link href="/blog/1"
            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
            Continue Reading
            <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </Link>
    </article>
}