import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-r dark:to-slate-900 dark:from-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
