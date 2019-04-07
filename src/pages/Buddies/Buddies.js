import React, { Component } from 'react'
import FriendCard from '../../components/FriendCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './Buddies.css'



 class Buddies extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Friends form</h3>
						<Form>
							<FormGroup>
								<Label for="review">For a friend by username</Label>
								<Input type="textarea" name="text" id="review"/>
							</FormGroup>
							{/* TODO, Create Beer seach */}
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						<h3>Your Friends</h3>
						<FriendCard 
							profileName='glass-cheers'
							gender='male'
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Buddies;