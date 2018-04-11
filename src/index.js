import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
/*
// 1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// 2
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// 4
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
)
registerServiceWorker()
*/

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjftrnaxe0j5n0164kd8cvhlt',
})

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
)

render(ApolloApp(App), document.getElementById('root'))
registerServiceWorker()
