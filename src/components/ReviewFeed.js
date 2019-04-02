import React, { Component } from 'react'
import { Feed, Icon } from 'semantic-ui-react'

class ReviewFeed extends Component {
  render() {
    return(
      <Feed>
        <Feed.Event>
          <Feed.Label>
              <Icon name={this.props.icon} />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date content={this.props.date} />
            <Feed.Summary content={this.props.title} />
            <Feed.Extra text content={this.props.review} />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}
export default ReviewFeed;
