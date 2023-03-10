import '@/styles/globals.css'
import { DefaultSeo } from "next-seo"
import { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { seo } from '@/util/seo'


const inter = Inter({
  weight: ['400', '300', '500', '700'],
  subsets: ['latin'],
  style: ['normal']
})

const app = ({ Component, pageProps }: AppProps) => {
  return <ThemeProvider enableSystem={true} attribute="data-mode">
    <DefaultSeo {...seo} />
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  </ThemeProvider>
}

export default app;
