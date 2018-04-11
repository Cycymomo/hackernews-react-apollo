import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

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
