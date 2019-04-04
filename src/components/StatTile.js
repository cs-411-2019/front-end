import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class StatTile extends Component {
	render() {
        return(
          <Card body inverse style={this.props.style}>
            <CardTitle>{this.props.stat}</CardTitle>
            <CardText>{this.props.text}</CardText>
            <div className="icon">
                <i className={this.props.icon}></i>
            </div>
            <a href={this.props.link} className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </Card>
		)
	}
}
export default StatTile;