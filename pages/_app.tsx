import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { BaseAppProps, BasePageLayout } from '~/types'
import { Layout } from '~/layouts/mainLayout'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ['400', '300', '500', '700'],
  subsets: ['latin'],
  style : 'normal'
})

const app = ({ Component, pageProps }: BaseAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <main className={roboto.className}>{getLayout(<Component {...pageProps} />)}</main>
}

export default app;