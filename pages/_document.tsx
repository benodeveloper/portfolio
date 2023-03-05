import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-slate-900 bg-slate-50 text-gray-900 dark:text-gray-200 transition-bg'>
        {/* before:contents[""] before:h-28 before:w-28 before:dark:bg-slate-50 before:-z-0 before:absolute before:-right-28 before:-top-28 before:bg-slate-900 before:rounded-full */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
