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
            <img src={this.state.image_url} className="tile" onClick={this.onClick} />
        )
    }
}

export default Tile;