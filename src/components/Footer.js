import React, { Component } from 'react'
import { CardFooter } from 'reactstrap';

const footerStytle = {
  height: '50px',
  marginTop: '-50px'
}


class Footer extends Component {
	render() {
		return (
            <footer className="footer" style={footerStytle}>
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
		)
	}
}



export default Footer;