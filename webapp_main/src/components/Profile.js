import React, { Component } from 'react';
import UploadImage from './UploadImage';
import './styles/profile.css';
import Tile from "./tile/Tile"


class Profile extends Component {
    render() {
        return(
            <div className="wrapper">
                Upload New Stickers
                <UploadImage />
                Your Stickers
                <div className="flexbox">
                    <Tile image_url="https://ih0.redbubble.net/image.118383261.5113/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg" />
                    <Tile image_url="http://devstickers.com/assets/img/pro/func.png" />
                    

                </div>
            </div>
        )
    }
}

export default Profile;