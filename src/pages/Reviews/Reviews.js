import React, { Component } from 'react'
import ReviewCard from '../../components/ReviewCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Accordion, Icon } from 'semantic-ui-react'
import {DF_API_KEY, DF_URL} from '../../index'

import './Reviews.css'


 class Reviews extends Component {
	constructor(props){
		super(props);
		this.state = {
			usersBeerReviews: [],
			userBarReviews: [],
		}
	}


	getUsersBeerReviews(){
		return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_BeerReviewReadAllByUser(${localStorage.getItem('userId')})`, {
		 method: 'GET',
		 headers: {
		   'Accept': 'application/json',
		   'Content-Type': 'application/json',
		   'X-DreamFactory-API-Key': DF_API_KEY,
		 }
	   })
   }

   getUsersBarReviews(){
	return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_BarReviewReadAllByUser(${localStorage.getItem('userId')})`, {
	 method: 'GET',
	 headers: {
	   'Accept': 'application/json',
	   'Content-Type': 'application/json',
	   'X-DreamFactory-API-Key': DF_API_KEY,
	 }
   })
}

   componentDidMount(){
	this.getUsersBeerReviews().then(res => res.json())
	.then(data => {
		this.setState({ usersBeerReviews: data })
	});

	this.getUsersBarReviews().then(res => res.json())
	.then(data => {
		this.setState({ userBarReviews: data })
	});
}

	render() {
		return (
			<Container>			
				<Row>
					<Col xs="12" lg="6">
						<h3>Your Beer Reviews</h3>
						{
						this.state.usersBeerReviews.map(beer => 
							<ReviewCard 
								key={beer.Name}
								icon='beer'
								date={beer.Time}
								title={beer.Name}
								review={beer.Text}
								rating={beer.Overall}
								beerProp={{
									appearance: beer.Appearance,
									aroma: beer.Aroma,
									palate: beer.Palate,
									taste: beer.Taste
								}}
								isBeer
							/>
						)
					}
					</Col>
					<Col xs="12" lg="6">
						<h3>Your Bar/Brewery Reviews</h3>
						{
							this.state.userBarReviews.map(bar => 
								<ReviewCard 
									key={bar.BarReviewId}
									icon='glass martini'
									date={bar.Time}
									title={bar.Name}
									review={bar.Text}
									rating={bar.Overall}
									isBeer={false}
								/>
							)
						}
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Reviews;