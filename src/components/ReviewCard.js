import React, { Component } from 'react'
import { Feed, Icon, Item, Image } from 'semantic-ui-react'
import './ReviewCard.scss'

class ReviewCard extends Component {
  
  render() {
    return(
    <Item.Group className="reviewCard">
    <Item>
      <Icon name={this.props.icon}  className="reviewIcon" />
     
      <Item.Content>
        <Item.Header className="reviewTitle">{this.props.title}</Item.Header>
        <Item.Meta>
          <span className="reviewDate">{this.props.date} </span>
        </Item.Meta>
        <Item.Description className="reviewText">
            {this.props.review}
        </Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
    )
  }
}
export default ReviewCard;


