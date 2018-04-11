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

          data.allLinks =
            data.allLinks.length !== 0
              ? data.allLinks
              : [
                  {
                    id: 1,
                    description:
                      'Ils filment leur chiot pendant qu’il mange ! Ce qu’il va faire va vous étonner !',
                    url: 'http://www.dailymotion.com/video/x431c4f',
                  },
                  {
                    id: 2,
                    description:
                      'Cette boite à pizza pas comme les autres va vous étonner',
                    url: 'http://www.dailymotion.com/video/x26jfow',
                  },
                ]

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
