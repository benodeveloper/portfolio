import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en" >
      <Head />
      <body className='dark:bg-neutral-900 bg-slate-50 text-neutral-900 dark:text-neutral-200 transition-bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
