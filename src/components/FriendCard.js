import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class FriendCard extends Component {
  render() {
    return(
      <Card>
    <Image src={`https://api.adorable.io/avatars/285/${this.props.profileName}.png`} />
    <Card.Content>
      <Card.Header>{this.props.profileName}</Card.Header>
      <Card.Meta>Gender: {this.props.gender}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='chat'/>
        Send Message
      </a>
    </Card.Content>
  </Card>
    )
  }
}

export default FriendCard;
