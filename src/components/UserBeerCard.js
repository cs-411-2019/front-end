import React, { Component } from 'react'
import { Popup, Icon, Item, Image, Rating, Button, Form, FormGroup, Label, } from 'semantic-ui-react'
import './BeerCard.scss'
import _ from 'lodash';
import {DF_API_KEY, DF_URL} from '../index'


const beerImage = [
  "https://www.capemaybrewery.com/wp-content/uploads/2017/01/nonic-pale.jpg",
  "https://morebeer-web-8-pavinthewaysoftw.netdna-ssl.com/product_image/morebeer/500x500/27498.png",
  "https://morebeer-web-8-pavinthewaysoftw.netdna-ssl.com/product_image/morebeer/500x500/29067.png",
  "https://images-na.ssl-images-amazon.com/images/I/31TXPcB8cIL.jpg",
  "https://m.media-amazon.com/images/I/71jf66Hy8eL._SR500,500_.jpg",
  "https://www.ikea.com/us/en/images/products/lodrat-beer-glass__0712433_PE728846_S4.JPG",
  "https://www.webstaurantstore.com/uploads/buying_guide/2017/7/american-brown-ale-brown-ale.jpg",
  "https://www.capemaybrewery.com/wp-content/uploads/2013/02/tulip-blonde.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41IEGnUrgvL.jpg",
  "https://foodal.com/wp-content/uploads/2015/08/Stange-Kolsch-German-Beer-Glass.jpg"
]


class UserBeerCard extends Component {
  constructor(props){
		super(props);
  }
    
  render() {
    return(
    <Item.Group className="beerCard">
    <Item>
      <Item.Image size='tiny' src={beerImage[_.random(0, beerImage.length - 1)]} />
      <Item.Content>
        <Item.Header className="reviewTitle">
        {this.props.name}
        </Item.Header>
        <Item.Description className="reviewText">
            You drank this on: {this.props.time}
        </Item.Description>
        <Item.Extra>
        
        </Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
    )
  }
}
export default UserBeerCard;


