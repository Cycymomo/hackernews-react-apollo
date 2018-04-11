import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <a href={this.props.link.url}>{this.props.link.description}</a>
      </div>
    )
  }
}

export default Link
