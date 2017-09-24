import React, { Component } from 'react';
import Tile from "./tile/Tile"
import "./styles/browse.css"
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

	renderLogoTiles(){

		var output = []
		for (var key in this.state.companies) {
		    var company = this.state.companies[key]
    		var display_name = company.name
    		var img_url = company.logo
			var click_location = `/${company.name}`
	    	output.push(<Tile image_url={img_url} display_name={display_name} click_location={click_location}/>)
		  } 
		  
		return output

	}

	render() {
		return(
			<div>
				<div className="wrapper">
					{this.renderLogoTiles()}
				</div>
			</div>
			)
	}
}

export default Browse;