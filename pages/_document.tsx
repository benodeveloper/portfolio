import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en" >
      <Head />
      <body 
      className='dark:bg-jet-black bg-white text-neutral-900 dark:text-white transition-bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
