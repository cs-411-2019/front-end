import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap'
import { Button } from 'semantic-ui-react'
import StatTile from '../../components/StatTile'
import ReviewFeed from '../../components/ReviewFeed'
import Map from '../../components/Map'
import './Home.css'



export default class Home extends Component {
	render() {
		const { value, set } = this.props
		return (
			<Container>
				<Row>
					<Col xs="12" lg="8">
					<h3>Map</h3>
					<Map
						containerElement={<div style={{ height: `400px` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
					</Col>
					<Col xs="12" lg="4">
						<h3>Card List</h3>
						<StatTile 
							style={ {backgroundColor: '#333', borderColor: '#333' }}
							stat={0} 
							text = "Beers tried"
							icon="fas fa-beer"
							link="/beers"
						/>

						<StatTile 
							style={ {backgroundColor: '#333', borderColor: '#333' }}
							stat={10}
							text = "Bars Visited"
							icon="fas fa-store-alt"
							link="/beers"
						/>

						<StatTile 
							style={ {backgroundColor: '#333', borderColor: '#333' }}
							stat={10}
							text = "Friends"
							icon="fas fa-users"
							link="/beers"
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" lg="8">
						<h3>History</h3>
						<ReviewFeed 
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