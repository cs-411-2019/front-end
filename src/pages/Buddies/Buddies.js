import React, { Component } from 'react'
import FriendCard from '../../components/FriendCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Grid } from 'semantic-ui-react'
import {DF_API_KEY, DF_URL} from '../../index'
import _ from 'lodash'

import './Buddies.css'



 class Buddies extends Component {
	constructor(props){
		super(props);

		this.state = {
			buddySearch: [],
			buddies: [],
			userName: ""
		};
	}


	componentDidMount(){
		this.getUserFriends().then(res => res.json())
		.then(data => {
			this.setState({ buddies: data })
		});
	}

	getUserFriends(){
		return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FriendsReadAll(${localStorage.getItem('userId')})`, {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'X-DreamFactory-API-Key': DF_API_KEY,
			}
		  })
	}

	buddyForm(event){
		this.setState({
			[event.target.id]: event.target.value
		});
  	}

	findBuddies(event){
		event.preventDefault();

		fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FindFriend(${this.state.userName}, ${localStorage.getItem('userId')})`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-DreamFactory-API-Key': DF_API_KEY,
			}
		}).then(res => res.json())
		.then(data => {
			this.setState({buddySearch : _.uniqBy(data, 'ProfileName')})
		}); 
		
  }

	render() {
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<h3>Friends form</h3>
						<Form  onSubmit={this.findBuddies.bind(this)}>
							<FormGroup>
								<Label for="userName">For a friend by username</Label>
								<Input type="text" name="text" id="userName" onChange={this.buddyForm.bind(this)}/>
							</FormGroup>
							<Button>Submit</Button>
						</Form>
					</Col>
				</Row>

				<Grid>
					{
						this.state.buddySearch.map(buddy => 
							<Grid.Column mobile={16} tablet={8} computer={4} key={buddy.ProfileName}>
							<FriendCard 	
								userId={buddy.UserId}
								profileName={buddy.ProfileName}
								gender={buddy.Gender}
								isFriend={false}
							/>
							</Grid.Column>
						)
					}
				</Grid>	

				<hr />
				<h3>Your Friends</h3>
				<Grid>
					{
						this.state.buddies.map(buddy => 
							<Grid.Column mobile={16} tablet={8} computer={4} key={buddy.ProfileName}>
							<FriendCard 	
								userId={buddy.UserId}
								profileName={buddy.ProfileName}
								gender={buddy.Gender}
								isFriend
							/>
							</Grid.Column>
						)
					}
				</Grid>	
			</Container>
		)
	}
}

export default Buddies;