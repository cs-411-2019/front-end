import React, { Component } from 'react'
import ReviewFeed from '../../components/ReviewFeed'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './Beers.css'

 class Beers extends Component {
	render() {
		const { value, set } = this.props
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Beer form</h3>
						<Form>
							<FormGroup>
								<Label for="review">Search for a Beer</Label>
								<Input type="textarea" name="text" id="review" />
							</FormGroup>
							{/* TODO, Create Beer seach */}
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						<h3>Your Beers</h3>
						<ReviewFeed 
							icon='beer'
							date='Nov 25'
							title='You Reviewed Bud light'
							review='Tasted like water, except worse'
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Beers;