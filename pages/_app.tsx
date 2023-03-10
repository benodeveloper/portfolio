import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'


const inter = Inter({
  weight: ['400', '300', '500', '700'],
  subsets: ['latin'],
  style: ['normal']
})

const app = ({ Component, pageProps }: AppProps) => {
  return <ThemeProvider enableSystem={true} attribute="data-mode">
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  </ThemeProvider>
}

export default app;
