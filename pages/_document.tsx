import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en" >
      <Head />
      <body className='dark:bg-gray-900 bg-slate-50 text-gray-900 dark:text-gray-200 transition-bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
