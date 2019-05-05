import React, { Component } from 'react'
import ReviewCard from '../../components/ReviewCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {DF_API_KEY, DF_URL} from '../../index'


import './Bars.css'

 class Bars extends Component {

	constructor(props){
		super(props);
		this.state = {
			reviewType: 'beer',
			isLoaded: false,
			userBarReviews: [],
			beers: []
		}
	}

	getUsersBarReviews(){
		return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_BarReviewReadAllByUser(${localStorage.getItem('userId')})`, {
			method: 'GET',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-DreamFactory-API-Key': DF_API_KEY,
			}
		})
	}

	componentDidMount(){
		this.getUsersBarReviews().then(res => res.json())
		.then(data => this.setState({ userBarReviews: data }));
	}

	render() {
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Bars form</h3>
						<Form>
							<FormGroup>
								<Label for="review">Search for a Bar/Brewery</Label>
								<Input type="text" name="text" id="review"/>
							</FormGroup>
							{/* TODO, Create Beer seach */}
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						<h3>Your Bar Reviews</h3>
						{
							this.state.userBarReviews.map(bar => 
								<ReviewCard 
									key={bar.Name}
									icon='glass martini'
									date={bar.Time}
									title={bar.Name}
									review={bar.Text}
								/>
							)
						}
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Bars;