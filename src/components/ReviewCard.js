import React, { Component } from 'react'
import { Feed, Icon, Item, Image, Rating } from 'semantic-ui-react'
import './ReviewCard.scss'

class ReviewCard extends Component {
  
  render() {
    return(
    <Item.Group className="reviewCard">
    <Item>
      <Icon name={this.props.icon}  className="reviewIcon" />
     
      <Item.Content>
        <Item.Header className="reviewTitle">
        {this.props.title}
        <Rating icon='star' defaultRating={this.props.rating} maxRating={5} disabled  style={{margin:'5px'}} />
        </Item.Header>
        <Item.Meta>
          <span className="reviewDate">{this.props.date} </span>
        </Item.Meta>
        <Item.Description className="reviewText">
            {this.props.review}
            <br />
            <Choose>
              <When condition={this.props.isBeer}>
                  Appearance: {this.props.beerProp.appearance}
                  <hr />
                  Aroma: {this.props.beerProp.aroma}
                  <hr />
                  Palate: {this.props.beerProp.palate}
                  <hr />
									Taste: {this.props.beerProp.taste}
              </When>
            </Choose>
        </Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
    )
  }
}
export default ReviewCard;


