import React, { Component } from 'react'
import ReviewCard from '../../components/ReviewCard'
import {Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText, FormControl, ControlLabel } from 'reactstrap';
import './Login.scss'

const DF_API_KEY = process.env.DF_API_KEY;
const DF_URL = process.env.DF_URL;
const userId = 2;

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          userEmail: "",
          userPassword: ""
        };
      }

      validateForm() {
        return this.state.userEmail.length > 0 && this.state.userPassword.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
      }
    

	render() {
		return (          
			<Container>
                <div className="Login">
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup >
                        <Label for="userEmail">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="userEmail" 
                            autoFocus 
                            value={this.state.userEmail} 
                            onChange={this.handleChange}
                            />
                    </FormGroup> 

                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input 
                            type="password" 
                            name="password" 
                            id="userPassword"
                            value={this.state.userPassword}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button block disabled={!this.validateForm()} type="submit">Login</Button>                    
                    </Form>
                </div> 
        </Container>
		)
	}
}

export default Login;