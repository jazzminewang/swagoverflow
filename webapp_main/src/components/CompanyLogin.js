import React, { Component } from 'react';

class CompanyLogin extends Component {

    render() {
        return(
        	<div>
	            <div className="welcome">
	             <p>Good to see you.</p>
	            </div>
	            <div className="start-company-page">
	              <input className="enter-company" placeholder="Best Company" />
	              <button className="next-button"></button>
	            </div>
            </div>
        )
    }
}

export default CompanyLogin;