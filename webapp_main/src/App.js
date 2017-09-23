import React, { Component } from 'react';
import './styles/App.css';
import './styles/welcome_page.css';
import fire from './fire';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="navbar">
            <div className="navbarLeft">swagoverflow</div>
            <div className="navbarRight">it's lit</div>
          </div>
          <div className="innerContent">

             {
             // convert to Component
             }
              <div className="welcome">
                <p>Good to see you.</p>

              </div>
              <div className="start-company-page">
                <input className="enter-company" placeholder="My Company"></input>
                <button className="next-button"> </button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
