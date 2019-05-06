import React, { Component } from 'react'
import ReviewCard from '../../components/ReviewCard'
import BeerCard from '../../components/BeerCard'
import UserBeerCard from '../../components/UserBeerCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import _ from 'lodash';

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
			beerSearch: "",
			userBeers: [],
			beers: [],
		};
	}

	  beerForm(event){
			this.setState({
				[event.target.id]: event.target.value
			});
	  }

	  findBeers(event){
			event.preventDefault();
			fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FindBeer(${this.state.beerSearch})`, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'X-DreamFactory-API-Key': DF_API_KEY,
				}
			}).then(res => res.json())
			.then(data => {
				this.setState({beers : _.uniqBy(data, 'Name')})
			}); 
			
	  }

	  userBeers(){
		fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_DrinksReadAll(${localStorage.getItem('userId')})`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-DreamFactory-API-Key': DF_API_KEY,
			}
		}).then(res => res.json())
		.then(data => {
			this.setState({userBeers : _.uniqBy(data, 'Name')})
		}); 
  }

  componentDidMount(){
	  this.userBeers();
  }
	  
	render() {
		return (
			<Container>
				<Row>
					<Col xs="12" lg="12">
						<Form onSubmit={this.findBeers.bind(this)}>
							<FormGroup>
								<Label for="beerSearch">Search for a Beer</Label>
								<Input type="text" name="beerSearch" id="beerSearch" onChange={this.beerForm.bind(this)}/>
							</FormGroup>
							<Button>Search Beers</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						{
							this.state.beers.map(beer => 
								<BeerCard 
									key={beer.Name}
									beerId={beer.BeerTypeId}
									icon='beer'
									name={beer.Name}
									abv={beer.ABV}
									availability={beer.Availability}
								/>
							)
						}
						
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						<h3>Your Beers</h3>
						{
							this.state.userBeers.map(beer => 
								<UserBeerCard 
									key={beer.Name}
									beerId={beer.BeerTypeId}
									icon='beer'
									name={beer.Name}
									time={beer.Time}
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