import React, { Component } from 'react';
import './styles/App.css';
import './styles/welcome_page.css';
import fire from './fire';
import _ from 'lodash';
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

  generate_random_hackers(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    var Hacker = {
      "name" : "",
      "login" : "",
      "profile" : {
        "hackathon_ids_attended" : [""],
        "email" : [""],
        "roles_looking_for" : ["Software Developer"],
        "school" : "Michigan",
        "fun_fact" : "Is l33tHaxor"
      },
      "taken_image_ids" : [""]
    }
    
    var first_names = ["Emma","Liam","Olivia","Noah","Ava","Lucas","Isabella","Mason","Sophia","Logan","Mia","Oliver","Amelia","Ethan","Charlotte","Elijah","Harper","Aiden","Aria","James","Ella"]
    var last_names = ["Smith","Johnson","Williams","Brown","Jones","Miller","Wang","Garcia","Wilson","Cho","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White"]

    var all_hackers = []
    for (var i = 0; i < 100; i++) {
      var this_hacker = JSON.parse(JSON.stringify(Hacker));
      var firs_i = parseInt(Math.random() * first_names.length)
      var sec_i = parseInt(Math.random() * last_names.length)
      this_hacker.name = first_names[firs_i] + " " + last_names[sec_i]
      this_hacker.login = first_names[firs_i] + "." + last_names[sec_i] + "@school.edu"
      this_hacker.profile.email = this_hacker.login
      all_hackers.push(this_hacker)
    }
    console.log(all_hackers)
    

  }
  generate_random_companies(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    var Company = {
      "name" : "",
      "logins" : [""],
      "hackathon_ids_attended" : [""],
      "hackathons_ids_attending" : [""],
      "profile" : {
        "HQ_location" : "",
        "office_locations" : [""],
        "logo" : "hi.img",
        "other_names": [""],
        "roles_looking_for" : ["Software Developer"]
      },
      "swag_image_ids" : [""]

    }
    var companies = ["facebook", "google", "baidu", "yelp", "MLH", "Mhacks", "github", "NSA", "Microsoft"]
    var all_companies = []
    for (var i = 0; i < companies.length; i++) {
      var this_co = JSON.parse(JSON.stringify(Company));
      this_co.name = companies[i]
      this_co.logins = ["l33tHackz@" + companies[i] + ".com"]
      all_companies.push(this_co)
    }
    return all_companies
  }

  make_comp = e => {
    // generate random
   
   var output = []
    // output = generate_random_companies()

    for (var i = 0; i < output.length; i++) {
      fire
      .database()
      .ref('users')
      .push(output[i]);
    }
    
  };

  // update = _.once(this.make_comp);



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

            <button onClick={this.make_comp} > do this</button>
            
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
