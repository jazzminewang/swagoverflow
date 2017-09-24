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
