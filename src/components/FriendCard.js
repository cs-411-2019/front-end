import React, { Component } from 'react'
import { Card, Icon, Image, Popup } from 'semantic-ui-react'
import {DF_API_KEY, DF_URL} from '../index'

class FriendCard extends Component {
  addFriend(){
    fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FriendsCreate(${localStorage.getItem('userId')}, ${this.props.userId})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  }).then(res => res.json())
  }

  

  render() {
    return(
      <Card>
    <Image src={`https://api.adorable.io/avatars/285/${this.props.profileName}.png`} />
    <Card.Content>
      <Card.Header>{this.props.profileName}</Card.Header>
      <Card.Meta>Gender: {this.props.gender}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Choose>
      <When condition={this.props.isFriend}>
        <a>
          <Icon name='chat'/>
          Send Message
        </a>
      </When>
      <Otherwise>
        
        <Popup
            content={<p>Friend added ❤️</p>}
            trigger={
              <a onClick={this.addFriend.bind(this)}>
                <Icon name='add user'/>
                Add Friend
              </a>
            }
            on='click'
            position='top right'
          />
      </Otherwise>
    </Choose>
    </Card.Content>
  </Card>
    )
  }
}

export default FriendCard;
