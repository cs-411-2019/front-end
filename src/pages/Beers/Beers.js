import React, { Component } from 'react'
import ReviewCard from '../../components/ReviewCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './Beers.css'
const DF_API_KEY = process.env.DF_API_KEY;
const DF_URL = process.env.DF_URL;
const userId = 2;
 class Beers extends Component {

	constructor(props){
		super(props);
		this.state = {
			reviewType: 'beer',
			isLoaded: false,
			input: '',
			usersBeerReviews: [],
			beers: []
		}
	}

	getUsersBeerReviews(){
		   return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_BeerReviewReadAllByUser(${userId})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  })
	  }

	  beerForm(event){
		this.setState({input: event.target.value});
	  }

	  findBeers(event){
		return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FindBeer(${this.state.input})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  })
		console.log(event);
		event.preventDefault();
	  }

	componentDidMount(){
		this.getUsersBeerReviews().then(res => res.json())
		.then(data => this.setState({ usersBeerReviews: data }));
	}

	render() {
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Beer form</h3>
						<Form onSubmit={this.findBeers}>
							<FormGroup>
								<Label for="review">Search for a Beer</Label>
								<Input type="text" name="text" id="review" onChange={this.beerForm.bind(this)}/>
							</FormGroup>
							{/* TODO, Create Beer seach */}
							<Button>Search Beers</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						<h3>Your Beers</h3>
						{
							this.state.usersBeerReviews.map(beer => 
								<ReviewCard 
									key={beer.Name}
									icon='beer'
									date={beer.Time}
									title={beer.Name}
									review={beer.Text}
								/>
							)
						}
						
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Beers;