import React, { Component } from 'react';
import UploadImage from './UploadImage';
import './styles/profile.css';
import Tile from "./tile/Tile"
import fire from '../fire';


class Profile extends Component {
    constructor(){
        super()
        this.state = {
            url: ''
        }
    }

    getStickers() {
        const { url } = this.state;

        const storage = fire.storage();
		const sticker = storage.ref("images/sticker.jpg");
        sticker.getDownloadURL().then(function(url) {
            this.setState({
                url,
            })
            console.log(url)            
        })
    }
    
    render() {
        return(
            <div className="wrapper">
                Upload New Stickers
                <UploadImage />
                Your Stickers
                <div className="flexbox">
                    <Tile image_url="https://ih0.redbubble.net/image.118383261.5113/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg" />
                    <Tile image_url="http://devstickers.com/assets/img/pro/func.png" />
                    {/* {this.getStickers()} */}

                </div>
            </div>
        )
    }
}

export default Profile;