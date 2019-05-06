import React, { Component } from 'react'
import { Popup, Icon, Item, Image, Rating, Button, Form, FormGroup, Label, Input } from 'semantic-ui-react'
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
  constructor(props){
		super(props);
		this.state = {
      showReview: false,
      appearance: "",
      taste: "",
      palate: "",
      aroma: "",
      review: "",
      overall: 1
		}
  }
  
  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleRate(event){
    fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FavoriteBeersCreate(${localStorage.getItem('userId')}, ${this.props.beerId})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  }).then(res => res.json()).then(date => {
      });
  }

  handeReview(){
    this.setState({ showReview: true })
  }

  submitBeerReview(event){
    event.preventDefault();
    fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_BeerReviewsCreate(
      ${localStorage.getItem('userId')}, 
      ${this.props.beerId},
      ${this.state.appearance},
      ${this.state.aroma},
      ${this.state.palate},
      ${this.state.taste},
      ${this.state.overall},
      ${this.state.review}
      )`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  }).then(res => res.json()).then(data => {

       this.setState({ showReview: false })
      });
  }

  handleTried(){
    fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_DrinksCreate(${localStorage.getItem('userId')}, ${this.props.beerId})`, {
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

            <Choose>
            <When condition={this.state.showReview}>
            <Form onSubmit={this.submitBeerReview.bind(this)}>
              <Form.Field>
                <label>Appearance</label>
                <input placeholder='Appearance' name="appearance" onChange={e => this.handleChange(e)}/>
              </Form.Field>
              <Form.Field>
                <label>Taste</label>
                <input placeholder='Taste' name="taste" onChange={e => this.handleChange(e)}/>
              </Form.Field>
              <Form.Field>
                <label>Palate</label>
                <input placeholder='Palate' name="palate" onChange={e => this.handleChange(e)}/>
              </Form.Field>
              <Form.Field>
                <label>Aroma</label>
                <input placeholder='Aroma' name="aroma" onChange={e => this.handleChange(e)} />
              </Form.Field>
              <Form.Field>
                <label>Review</label>
                <input placeholder='Review' name="review" onChange={e => this.handleChange(e)}/>
              </Form.Field>
              
              <Form.Field label='Overall' control='select' name="overall" onChange={e => this.handleChange(e)}>
                <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </Form.Field>

              <Button >Submit</Button>
            </Form>
            </When>
          </Choose>
        </Item.Description>
        <Item.Extra>
           <Button primary floated='right' onClick={this.handeReview.bind(this)}>
              Review me! 
              <Icon name='write square' style={{margin:'5px'}}/>
            </Button>
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


