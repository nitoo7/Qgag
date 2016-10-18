import React from "react"
import { connect } from "react-redux"
import { showGagSection } from "../actions/gagsActions"
var Link = require('react-router').Link
import GoogleLogin from 'react-google-login';
import cookie from 'react-cookie';

require('../style/Header.scss')

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    gags: store.gags.gags,
  };
})

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userProfile: {},
      isSignedIn: false
    }
    this.showGagSection = this.showGagSection.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {




    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = '//apis.google.com/js/client:platform.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'google-login', () => {
      var self = this;
      window.gapi.load('auth2', () => { 
        if (!window.gapi.auth2.getAuthInstance()) {
          gapi.auth2.init({
            client_id: '409775674375-ik77js1a750tvmf63h7iebhfirgt85rh.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin'
          }).then((googleAuth) => {
            self.googleAuth = googleAuth;
            console.log('trying something new ->', googleAuth, googleAuth.isSignedIn.Ab)
            let userDetails = {
              name: googleAuth.isSignedIn.Ab ? googleAuth.currentUser.Ab.w3.ig : '',
              email: googleAuth.isSignedIn.Ab ? googleAuth.currentUser.Ab.w3.U3 : '',
              dp: googleAuth.isSignedIn.Ab ? googleAuth.currentUser.Ab.w3.Paa : ''
            }              
            self.setState({
              userProfile: userDetails,
              isSignedIn: googleAuth.isSignedIn.Ab
            })
          })
        } else {
          window.gapi.auth2.getAuthInstance().then(function(googleAuth){
            console.log('object--->', googleAuth.isSignedIn.Ab)
            let userDetails = {
              name: googleAuth.isSignedIn.Ab ? googleAuth.currentUser.Ab.w3.ig : '',
              email: googleAuth.isSignedIn.Ab ? googleAuth.currentUser.Ab.w3.U3 : '',
              dp: googleAuth.isSignedIn.Ab ? googleAuth.currentUser.Ab.w3.Paa : ''
            }              
            self.setState({
              userProfile: userDetails,
              isSignedIn: googleAuth.isSignedIn.Ab
            })
          })
        }
      })
    });

  }


  showGagSection() {
    this.props.dispatch(showGagSection())
  }

  responseGoogle(response) {
    console.log('HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
    let userDetails = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      dp: response.profileObj.imageUrl
    }  
    this.setState({
      userProfile: userDetails,
      isSignedIn: true
    })
    // var auth2 = gapi.auth2.getAuthInstance();
    // console.log(this.state.userProfile);
  }

  onLogout() {
    var auth2 = gapi.auth2.getAuthInstance();
    var self = this;
    console.log('*****->', auth2);
    if(auth2) {
      auth2.signOut().then(function () {
        console.log('User signed out.', auth2);
        self.setState({
          userProfile: {},
          isSignedIn: false
        })
      });
    }
  }

  render() {

    return (
      <div className="header">
        <Link className="homeTitle" to={`/section`}>QGAG</Link>
        <button className="newPost">New Post</button>
        <GoogleLogin className={!this.state.isSignedIn ? "signIn" : "signIn hide"}
         clientId="409775674375-ik77js1a750tvmf63h7iebhfirgt85rh.apps.googleusercontent.com"
         buttonText=""
         onSuccess={this.responseGoogle}
         onFailure={this.responseGoogle}
         ref="googleButton"
        />
        <div className={this.state.isSignedIn ? "userInfo" : "userInfo hide"}>
          <strong>
            {this.state.userProfile.name ? this.state.userProfile.name : ""}
          </strong>
          <img width="32px" height="32px" src={this.state.userProfile.dp ? this.state.userProfile.dp : ""}></img>
       </div>
       <button onClick={(evt) => this.onLogout() }>Log Out</button>
      </div>      
    );
  }
}
