import React, { Component } from 'react'
import { Popup, Icon, Item, Image, Rating, Button, Form, FormGroup, Label, Input } from 'semantic-ui-react'
import './BeerCard.scss'
import _ from 'lodash';
import {DF_API_KEY, DF_URL} from '../index'


const barImage = [
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


class BarCard extends Component {
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


  submitBarReview(event){
    
    fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FavoriteBeersCreate(${localStorage.getItem('userId')}, ${this.props.beerId})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  }).then(res => res.json()).then(date => {
        console.log(data);
        this.setState({ showReview: false })
      });
  }
  
  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handeReview(){
    this.setState({ showReview: true })
  }

  handleTried(){
    fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_VisitedCreate(${localStorage.getItem('userId')}, ${this.props.barId})`, {
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
    <Item.Group className="barCard">
    <Item>
      <Item.Image size='tiny' src={barImage[_.random(0, barImage.length - 1)]} />
      <Item.Content>
        <Item.Header className="reviewTitle">
        {this.props.title}
        <Rating 
          icon='heart' defaultRating={0} maxRating={1}  style={{fontSize: '30px'}}
        />
        </Item.Header>
        <Item.Description className="reviewText">
            {this.props.phone}
            <br />
            {this.props.address}, {this.props.city} {this.props.state}, {this.props.zip}
            <br />
            <a href={this.props.website} targe="_blank">{this.props.website}</a>

            <Choose>
            <When condition={this.state.showReview}>
            <Form onSubmit={this.submitBarReview.bind(this)}>
            
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
            content={<p>Hope you had a good time :D </p>}
            trigger={
              <Button primary floated='right' onClick={this.handleTried.bind(this)}>
                I've visited here.
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
export default BarCard;


