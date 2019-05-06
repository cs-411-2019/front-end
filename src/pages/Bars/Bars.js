import React, { Component } from 'react'
import ReviewCard from '../../components/ReviewCard'
import BarCard from '../../components/BarCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {DF_API_KEY, DF_URL} from '../../index'
import _ from 'lodash'


import './Bars.css'

 class Bars extends Component {

	constructor(props){
		super(props);
		this.state = {
			barSearch: "",
			userBars: [],
			bars: []
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	findBars(event){
		event.preventDefault();
		fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_FindBars(${this.state.barSearch})`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-DreamFactory-API-Key': DF_API_KEY,
			}
		}).then(res => res.json())
		.then(data => {
			console.log(data);
			this.setState({bars : _.uniqBy(data, 'Name')})
		}); 
		
  }

	render() {
		return (
			<Container>
				<Row>
					<Col xs="12" lg="13">
						<Form onSubmit={this.findBars.bind(this)}>
							<FormGroup>
								<Label for="review">Search for a Bar/Brewery</Label>
								<Input type="text" name="barSearch" id="barSearch" onChange={this.handleChange.bind(this)}/>
							</FormGroup>
							<Button>Search Bars</Button>
						</Form>
					</Col>
				</Row>

				<Row>
					<Col xs="12" lg="12">
						{
							this.state.bars.map(bar => 
								<BarCard 
									key={bar.Name}
									barId={bar.BarId}
									phone={bar.phone}
									icon='glass martini'
									date={bar.Time}
									title={bar.Name}
									address={bar.Address}
									city={bar.City}
									state={bar.State}
									zip={bar.PostalCode}
									website={bar.Website}
								/>
							)
						}
					</Col>
				</Row>
				<hr />
				<Row>
					<Col xs="12" lg="12">
						<h3>Your Bars</h3>
						{
							this.state.userBars.map(bar => 
								<BarCard 
									key={bar.Name}
									barId={bar.BarId}
									phone={bar.phone}
									icon='glass martini'
									date={bar.Time}
									title={bar.Name}
									address={bar.Address}
									city={bar.City}
									state={bar.State}
									zip={bar.PostalCode}
									website={bar.Website}
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