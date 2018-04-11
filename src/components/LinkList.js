import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Link from './Link'

const GET_LINKS = gql`
  query AllLinksQuery {
    allLinks {
      id
      description
      url
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <Query query={GET_LINKS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>
          }
          if (error) {
            return <div>Error :(</div>
          }

          return (
            <div>
              {data.allLinks.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList
