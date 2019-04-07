import React, { Component } from 'react'
import ReviewFeed from '../../components/ReviewFeed'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './Reviews.css'

 class Reviews extends Component {
	constructor(props){
		super(props);
		this.state = {reviewType: 'beer'}
	}

	reviewForm(event) {
		this.setState({reviewType: event.target.value})
	}

	render() {
	
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Review form</h3>
						<Form>
							<FormGroup>
								<Label for="reviewType">Review Type</Label>
								<Input type="select" name="select" id="reviewType" onChange={this.reviewForm.bind(this)}>
									<option value="beer">Beer</option>
									<option value="bar-brewery">Bar/Brewery</option>
								</Input>
							</FormGroup>

							<FormGroup>
								<Label for="review">Review</Label>
								<Input type="textarea" name="text" id="review" />
							</FormGroup>
							{/* TODO, add properties based upon with review type is selected */}
							<h3>{this.state.reviewType}</h3>
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="6">
						<h3>Your Beer Reviews</h3>
						<ReviewFeed 
							icon='beer'
							date='Nov 25'
							title='You Reviewed Bud light'
							review='Tasted like water, except worse'
						/>
					</Col>
					<Col xs="12" lg="6">
						<h3>Your Bar/Brewery Reviews</h3>
						<ReviewFeed 
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