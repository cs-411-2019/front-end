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
          userName: "",
          userPassword: ""
        };
      }

      componentWillMount(){
        if(localStorage.getItem('userId')){
          window.location.replace("/home");
        }
      }

      validateForm() {
        return this.state.userName.length > 0 && this.state.userPassword.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      login(){
        return fetch(`${DF_URL}/api/v2/csf441-df/_proc/usp_Login(${this.state.userName}, ${this.state.userPassword})`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-DreamFactory-API-Key': DF_API_KEY,
          }
          })
        }

      handleSubmit = event => {
        event.preventDefault();

        this.login().then(res => res.json())
        .then(data => {
            if(data[0].UserId){
              localStorage.setItem('userId', data[0].UserId );
              window.location.replace("/home");
            }
          });
      }
    

	render() {
		return (          
			<Container>
                <div className="Login">
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup >
                        <Label for="userName">UserName</Label>
                        <Input 
                            type="input" 
                            name="userName" 
                            id="userName" 
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