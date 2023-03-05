import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-tr dark:from-slate-900/95 dark:to-slate-900 bg-slate-50 text-gray-900 dark:text-gray-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
