import React, { Component } from 'react'
import ReviewCard from '../../components/ReviewCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './Reviews.css'

const DF_API_KEY = process.env.DF_API_KEY;
const DF_URL = process.env.DF_URL;

 class Reviews extends Component {
	constructor(props){
		super(props);
		this.state = {
			reviewType: 'beer',
			isLoaded: false,
			beerReviews: [],
			barReviews: []
		}
	}

	reviewForm(event) {
		this.setState({reviewType: event.target.value})
	}

	submitReview(event){
		if(this.state.reviewType === 'beer'){
			saveBeerReview();
		} else {
		//	saveBarReview();
		console.log("Bar Review");
		}
		console.log(event);
		event.preventDefault();
	}
	
	  saveBeerReview(event){
		fetch(`${DF_URL}`, {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			"X-DreamFactory-API-Key": DF_API_KEY,
		  },
		  body: JSON.stringify({
			firstParam: 'yourValue',
			secondParam: 'yourOtherValue',
		  })
		})
	  }

	render() {
	
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Review form</h3>
						<Form onSubmit={this.submitReview}>
							<FormGroup>
								<Label for="reviewType">Review Type</Label>
								<Input type="select" name="select" id="reviewType" onChange={this.reviewForm.bind(this)}>
									<option value="beer">Beer</option>
									<option value="bar-brewery">Bar/Brewery</option>
								</Input>
							</FormGroup>

							<Choose>
								<When condition={this.state.reviewType === 'beer'}>
								<FormGroup>
									<Label for="appearance">Appearance</Label>
									<Input type="text" name="appearance" id="appearance" placeholder="Appearance"/>
								</FormGroup>
								<FormGroup>
									<Label for="taste">Taste</Label>
									<Input type="text" name="taste" id="taste" placeholder="Taste"/>
								</FormGroup>
								<FormGroup>
									<Label for="palate">Palate</Label>
									<Input type="text" name="palate" id="appearance" placeholder="Palate"/>
								</FormGroup>
								<FormGroup>
									<Label for="aroma">Aroma</Label>
									<Input type="text" name="aroma" id="aroma" placeholder="Aroma"/>
								</FormGroup>
								</When>
							</Choose>

							<FormGroup>
								<Label for="review">Review</Label>
								<Input type="textarea" name="text" id="review" />
							</FormGroup>

							<FormGroup>
								<Label for="overall">Overall</Label>
								<Input type="select" name="overall" id="overall">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</Input>
							</FormGroup>

							{/* TODO, add properties based upon with review type is selected */}
							<h3>{this.state.reviewType}</h3>
							<Button >Submit</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="6">
						<h3>Your Beer Reviews</h3>
						<ReviewCard 
							icon='beer'
							date='Nov 25'
							title='You Reviewed Bud light'
							review='Tasted like water, except worse'
						/>
					</Col>
					<Col xs="12" lg="6">
						<h3>Your Bar/Brewery Reviews</h3>
						<ReviewCard 
							icon='glass martini'
							date='Nov 25'
							title='You Reviewed Bud light'
							review='Just a little bar review'
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Reviews;