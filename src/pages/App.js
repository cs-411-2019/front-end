import React, {Component} from 'react'
import { Link } from 'react-website'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      userPassword: ""
    };
  }

  render(){
    return(
      <div>
        <Choose>
      <When condition={localStorage.getItem('userId')}>
        <Navigation />
      </When>
      </Choose>
      <div className="container">
        <div>
          <section className="main-content">
            { this.props.children }
          </section>
        </div>
      </div>
    </div>
  )};
} 
 
export default App;