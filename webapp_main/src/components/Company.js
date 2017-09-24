import React, { Component } from 'react';
import UploadImage from './UploadImage.js';
import fire from '../fire.js';
import './styles/company.css';
import Tile from './tile/Tile'

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

    renderStickers(dest_key) {
        var output = []
        
		for (var key in this.state.companies) {
		    var company = this.state.companies[key]
    		var display_name = company.name
    		var img_url = company.logo
			var click_location = `/${key}`
            if (dest_key == key) {
                for(var url in this.state.companies[key].swag){
                    output.push(<Tile image_url={url}/>)        
                }
            }
		  } 
		  
		return output
    }

    render() {
        const { company } = this.props;
        console.log(company);
        return(
            <div className="wrapper">
                Company's stickers
                {this.renderStickers(company)}
                <UploadImage />
            </div>

        )
    }
}
