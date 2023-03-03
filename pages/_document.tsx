import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-denim'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
