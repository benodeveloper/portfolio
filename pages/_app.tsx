import '~/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import Layout from '~/components/layout'
import { Quicksand } from 'next/font/google'
import { AppProps } from 'next/app'


const quicksand = Quicksand({
  weight: ['400', '300', '500', '700'],
  subsets: ['latin'],
  style : 'normal'
})

const app = ({ Component, pageProps }: AppProps) => {
  return <main className={quicksand.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
}

export default app;