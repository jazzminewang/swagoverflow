import React, { Component } from 'react';
import './styles/App.css';
import './styles/welcome_page.css';
import fire from './fire';
import UploadImage from './components/UploadImage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Company from './Company';
import Browse from './Browse';
import Profile from './Profile';

const Home = (props) => {
  console.log(props)
  return <h1>Home</h1>
}

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />    
      <Route 
        exact path="/welcomeCompany" 
        component={CompanyLogin} />  
      <Route path = "/:company" render={({match}) => (
        <Company company={match.params.company} />
      )} />
      <Route path ="/user/:id" component={Browse} />
      <Route path ="/user/:id/profile" component={Profile} />
      </div>  
  </Router>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire
      .database()
      .ref('messages')
      .orderByKey()
      .limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    });
  }
  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire
      .database()
      .ref('messages')
      .push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear the input
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="navbar">
            <div className="navbarLeft">
              {/* <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.png?v=9c558ec15d8a" className="logo"/> */}
              swagoverflow
            </div>
            <div className="navbarRight btn">Login/Signup</div>
          </div>
          <div className="innerContent">
            {
              // convert to Component
            }
            <div className="welcome">
              <p>Good to see you.</p>
            </div>
            <div className="start-company-page">
              <input className="enter-company" placeholder="My Company" />
              <button className="next-button"> </button>
              <UploadImage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Routes;
