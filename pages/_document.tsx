import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en" >
      <Head />
      <body 
      className='text-jet-black overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
