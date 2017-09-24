import './styles/tile.css';
import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_url: props.image_url,
            display_name: props.display_name,
            click_location: props.click_location
        }
    }

    onClick = (event) => {
        event.preventDefault();
        const { click_location } = this.state;
        window.location = click_location;
    }


    render() {
        return(
            <div className="tile" onClick={this.onClick}>
            	{this.state.image_url}<br/>
            	{this.state.display_name}<br/>
            	{this.state.click_location}<br/>
            </div>
        )
    }
}

export default Tile;