import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap'
import { Button } from 'semantic-ui-react'
import StatTile from '../../components/StatTile'
import ReviewCard from '../../components/ReviewCard'
import Map from '../../components/Map'
import './Home.scss'
import {DF_API_KEY, DF_URL} from '../../index'
import _ from 'lodash'


const bar =[{
	barId: 1,
	name: 'test',
	lat: 40.7885644,
	lng: -86.1386529
}]

export default class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			stats: [],
			userLocation: {},
			loading: true
		};
	}

	

	getUsersStats(){
		return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_UserStats(${localStorage.getItem('userId')})`, {
		 method: 'GET',
		 headers: {
		   'Accept': 'application/json',
		   'Content-Type': 'application/json',
		   'X-DreamFactory-API-Key': DF_API_KEY,
		 }
	   })
   }

	componentDidMount(){

		navigator.geolocation.getCurrentPosition(
			position => {
			  const { latitude, longitude } = position.coords;
			  console.log(latitude);
			  console.log(longitude);
	  
			  this.setState({
				userLocation: { lat: latitude, lng: longitude },
				loading: false
			  });
			},
			() => {
			  this.setState({ loading: false });
			}
		  );

		this.getUsersStats().then(res => res.json())
		.then(data => {
			console.log(data);
			this.setState({ stats: data[0] })
			});
	}


	render() {
		const { value, set } = this.props
		return (
			<Container>
				<Row>
					<Col xs="12" lg="8">
					<Choose>
						<When condition={!this.state.loading}>
							<h3>Map</h3>
							<Map
								containerElement={<div style={{ height: `400px` }} />}
								mapElement={<div style={{ height: `100%` }} />}
								center={this.state.userLocation}
								zoom={13}
								bars={bar}
							/>
						</When>
						<Otherwise>
							<p>Loading... Please make sure location is enabled</p>
						</Otherwise>
					</Choose>
					
					</Col>
					<Col xs="12" lg="4">
						<h3>Your Stats</h3>
						<StatTile 
							stat={this.state.stats.DrinksCount ? this.state.stats.DrinksCount : 0} 
							stat2={this.state.stats.FavoriteBeersCount ? this.state.stats.FavoriteBeersCount : 0}
							text = "Beers tried"
							text2="Favorite Beers"
							icon="fas fa-beer"
							link="/beers"
							id="beers-tried"
						/>

						<StatTile 
							stat={this.state.stats.DrinksCount ? this.state.stats.DrinksCount : 0}
							stat2={this.state.stats.FavoriteBarsCount ? this.state.stats.FavoriteBarsCount : 0}
							text = "Bars Visited"
							text2="Favorite Bars"
							icon="fas fa-store-alt"
							link="/bars"
							id="bars-visited"
						/>
					
						<StatTile 
							stat={this.state.stats.FriendsCount ? this.state.stats.FriendsCount : 0}
							text = "Friends"
							icon="fas fa-users"
							id="friends"
							link="/buddies"
						/>

						<StatTile 
							stat={this.state.stats.BarReviewsCount ? this.state.stats.BarReviewsCount : 0}
							stat2={this.state.stats.BeerReviewsCount ? this.state.stats.BeerReviewsCount : 0}
							text="Bar Reviews"
							text2="Beer Reviews"
							icon="far fa-sticky-note"
							id="reviews"
							link="/reviews"
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" lg="8">
						<h3>History</h3>
						<ReviewCard 
							icon='beer'
							date='Nov 25'
							title='You Reviewed Bud light'
							review='Tasted like water, except worse'
						/>
					</Col>
					<Col xs="12" lg="4">
					<h3>Recommended</h3>
					<StatTile 
							style={ {backgroundColor: '#333', borderColor: '#333' }}
							stat={0} 
							text = "Recommended Beer"
							icon="fas fa-beer"
							link="/beers"
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}