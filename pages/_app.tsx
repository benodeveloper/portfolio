import '@/styles/globals.css'
import Layout from '@/components/layout'
import { Quicksand } from '@next/font/google'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'


const quicksand = Quicksand({
  weight: ['400', '300', '500', '700'],
  subsets: ['latin'],
  style : 'normal'
})

const app = ({ Component, pageProps }: AppProps) => {
  return  <ThemeProvider attribute="data-mode">
        <main className={quicksand.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
    </ThemeProvider>
}

export default app;