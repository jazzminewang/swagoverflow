import React, { Component } from 'react';
import UploadImage from './UploadImage.js';
import fire from '../fire.js';
import './styles/company.css';

const database = fire.database();

export default class Company extends Component {
  constructor() {
    super();
    this.state = {
      companies: {},
    };
  }

    componentDidMount() {
        database.ref('companies').once('value').then(snapshot => {
            const companies = snapshot.val();
            this.setState(
                {companies}
            )
        })
    }

    renderStickers() {
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
        const { company } = this.props;
        console.log(company);
        return(
            <div className="wrapper">
                {company}'s stickers
                <UploadImage />
            </div>

        )
    }
}
