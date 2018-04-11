import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const CREATE_LINK_MUTATION = gql`
  mutation createLink($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      id
      url
      description
    }
  }
`

class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  }

  render() {
    return (
      <Mutation mutation={CREATE_LINK_MUTATION}>
        {createLink => (
          <div>
            <div className="flex flex-column mt3">
              <input
                className="mb2"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
                type="text"
                placeholder="A description for the link"
              />
              <input
                className="mb2"
                value={this.state.url}
                onChange={e => this.setState({ url: e.target.value })}
                type="text"
                placeholder="The URL for the link"
              />
            </div>
            <button
              onClick={() =>
                createLink({
                  variables: {
                    description: this.state.description,
                    url: this.state.url,
                  },
                })
              }
            >
              Submit
            </button>
          </div>
        )}
      </Mutation>
    )
  }
}

export default CreateLink
