import React, { Component } from 'react';
import Tile from "./tile/Tile"
import "./styles/browser.css"
import fire from '../fire';

class Browse extends Component {
	constructor() {
		super();
		this.state = {
			user_id: "",
			companies: {}
		}
		this.getCompanies()
	}
	getCompanies(){
		fire.database().ref('companies').once('value').then(snapshot => {
			const companies = snapshot.val();
			this.setState({ companies: companies})
		})
	}

	render_company_logo_tiles(){

		var output = []
		for (var key in this.state.companies) {
		    console.log(this.state.companies[key])
		    var company = this.state.companies[key]
    		var display_name = company.name
    		var img_url = company.logo_url
	    	var click_location = "./browse/" + company.name
	    	output.push(<Tile image_url={img_url} display_name={display_name} click_location={click_location}/>)
		  } 
		return output

	}

	render() {
		return(
			<div>
			USER BROWSE PAGE
			<br/>
			<div className="wrapper">
			{this.render_company_logo_tiles()}
			</div>
			</div>
			)
	}
}

export default Browse;