import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap'
import { Button } from 'semantic-ui-react'
import StatTile from '../../components/StatTile'
import './Home.css'



export default class Home extends Component {
	render() {
		const { value, set } = this.props
		return (
			<Container>
				<Row>
					<Col xs="12" lg="8">Map
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
						User Feed
					</Col>
				</Row>
			</Container>
		)
	}
}