import React, { Component } from 'react'
import ReviewFeed from '../../components/ReviewFeed'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './Reviews.css'

 class Reviews extends Component {



	render() {
		const { value, set } = this.props
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Review form</h3>
						<Form>
							<FormGroup>
								<Label for="reviewType">Review Type</Label>
								<Input type="select" name="select" id="reviewType">
									<option>Bar/Brewery</option>
									<option>Beer</option>
								</Input>
							</FormGroup>

							<FormGroup>
								<Label for="review">Review</Label>
								<Input type="textarea" name="text" id="review" />
							</FormGroup>
							{/* TODO, add properties based upon with review type is selected */}
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						<h3>Your Reviews</h3>
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

export default Reviews;