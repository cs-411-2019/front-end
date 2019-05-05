import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const style = {
  backgroundColor: '#5ab0fd',
  margin: '10px',
  boxShadow: '3px 3px #88888824',
  borderRadius: '13px'
}

const iconStyle = {
 fontSize: '30px',
 paddingRight: '10px'
}

class StatTile extends Component {
	render() {
        return(
          <Card body inverse style={style} id={this.props.id}>

            <CardTitle id="card-title">
            <i className={this.props.icon} style={iconStyle}></i>
            {this.props.stat} {this.props.text} 
            </CardTitle>

            <CardText>{this.props.stat2} {this.props.text2}</CardText>
          
            <a href={this.props.link} style={{color:'white'}} className="small-box-footer stat-link">
                More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </Card>
		)
	}
}
export default StatTile;