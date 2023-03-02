import '~/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import Layout from '~/components/layout'
import { Roboto } from 'next/font/google'
import { AppProps } from 'next/app'


const roboto = Roboto({
  weight: ['400', '300', '500', '700'],
  subsets: ['latin'],
  style : 'normal'
})

const app = ({ Component, pageProps }: AppProps) => {
  return <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
}

export default app;