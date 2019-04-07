import React, { Component } from 'react'
import ReviewFeed from '../../components/ReviewFeed'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './Bars.css'



 class Bars extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Bars form</h3>
						<Form>
							<FormGroup>
								<Label for="review">Search for a Bar/Brewery</Label>
								<Input type="textarea" name="text" id="review"/>
							</FormGroup>
							{/* TODO, Create Beer seach */}
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						<h3>Your Bar Reviews</h3>
						<ReviewFeed 
							icon='glass martini'
							date='Nov 25'
							title='You Visited '
							review='Nice drinks, friendly people. Would come again!'
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Bars;