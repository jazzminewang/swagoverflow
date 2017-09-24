import React, { Component } from 'react';
import UploadImage from './components/UploadImage.js';
import fire from './fire.js';
const database = fire.database();

export default class Company extends Component {
    constructor() {
        super();
        this.state = {
            companies: {}
        }
    }

    componentDidMount() {
        database.ref('companies').once('value').then(snapshot => {
            const companies = snapshot.val();
            this.setState(
                {companies}
            )
        })
    }

    render() {
        const { company } = this.props;
        return(
            <div>
                {company}'s stickers
            </div>

        )
    }
}