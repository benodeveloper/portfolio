import '@/styles/globals.css'
import { DefaultSeo } from "next-seo"
import { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { Poppins } from "next/font/google"
import { ThemeProvider } from 'next-themes'
import { seo } from '@/util/seo'


const poppins = Poppins({
  weight: ['400', '300', '500', '600', '700'],
  subsets: ['latin'],
  fallback: ["Arial", "Times New Roman"],
  style: ['normal']
})

const app = ({ Component, pageProps }: AppProps) => {
  // return <ThemeProvider enableSystem={true} attribute="data-mode">
  return <>
    <DefaultSeo {...seo} />
      <main className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  {/* </ThemeProvider> */}
}

export default app;
