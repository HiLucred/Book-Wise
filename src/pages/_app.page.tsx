import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from 'next/font/google'
import { Navbar } from '@/components/NavBar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout } from '@/styles/app'
import { useRouter } from 'next/router'

const nunito = Nunito({ subsets: ['latin'] })
const queryClient = new QueryClient()
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()
  const defaultLayout = router.pathname !== '/login'
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div
          className={nunito.className}
          style={{ width: '98vw', height: '100vh' }}
        >
          {defaultLayout && <Navbar />}
          
          {defaultLayout ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </QueryClientProvider>
    </SessionProvider>
  )
}
