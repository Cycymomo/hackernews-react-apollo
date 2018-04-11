import React, { Component } from 'react'

import LinkList from './LinkList'
import CreateLink from './CreateLink'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <LinkList />
        </div>
        <br />
        <br />
        <div>
          <CreateLink />
        </div>
      </div>
    )
  }
}

export default App
