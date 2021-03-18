import { AppProps } from 'next/app'
import { LayoutComponent } from '../component/layout/layout.component'
import { useApollo } from '../lib/apolloClient'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={client}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ApolloProvider>
  )
}

export default MyApp
