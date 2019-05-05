import React, { Component } from 'react'
import { Popup, Icon, Item, Image, Rating, Button } from 'semantic-ui-react'
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


class BeerCard extends Component {
  handleRate(){
    return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FavoriteBeersCreate(${localStorage.getItem('userId')}, ${this.props.beerId})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  })
  }

  handleTried(){
    return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_DrinksCreate(${localStorage.getItem('userId')}, ${this.props.beerId})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  })
  }
  
  render() {
    return(
    <Item.Group className="beerCard">
    <Item>
      <Item.Image size='tiny' src={beerImage[_.random(0, beerImage.length - 1)]} />
      <Item.Content>
        <Item.Header className="reviewTitle">
        {this.props.name}
        <Rating 
          icon='heart' defaultRating={0} maxRating={1} 
          onRate={this.handleRate.bind(this)} style={{fontSize: '30px'}}
        />
        </Item.Header>
        <Item.Description className="reviewText">
            {this.props.availability}
        </Item.Description>
        <Item.Extra>
          
          <Popup
            content={<p>Awesome! Happy Drinking 🍻</p>}
            trigger={
              <Button primary floated='right' onClick={this.handleTried.bind(this)}>
                I've tried this. 
                <Icon name='thumbs up outline' style={{margin:'5px'}}/>
              </Button>
            }
            on='click'
            position='top right'
          />
        </Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
    )
  }
}
export default BeerCard;


