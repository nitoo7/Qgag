import React from "react"
import { connect } from "react-redux"
import { fetchGags } from "../actions/gagsActions"
import Header from "../components/Header.js"
import GagSection from "../components/GagSection.js"
import CommentBox from "../components/CommentBox.js"
require('../style/CommentBox.scss')

import io from 'socket.io-client'
var socket = io.connect('https://qgagsocketservices.herokuapp.com/', {reconnect: true});


@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    gags: store.gags.gags,
    displayGagPage: store.gags.displayGagPage,
    gagInfo: store.gags.gagInfo
  };
})

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      textContent: null
    }
    this.fetchChat = this.fetchChat.bind(this);
    this.textConetentChange = this.textConetentChange.bind(this);
  }
  
  componentWillMount() {
    this.props.dispatch(fetchGags())

    socket.on('connect', function (socket) {
        console.log('Connected!');
    });

    var self = this;
    var items = this.state.comments;
    socket.on('CH01', function(msg){
    items.push(msg.msg)
      self.setState({
        comments: items
      })
    });
  }

  fetchChat() {
    console.log('chat enabled.....', this.state.textContent)

    socket.emit('CH01', 'nithin', this.state.textContent);
    this.setState({
      textContent: null
    })
  }

  textConetentChange(e) {
    this.setState({
      textContent: e.target.value
    })
  }

  render() {
    console.log('RErendered..................', this.state.comments)
    const { user, gags , displayGagPage, gagInfo} = this.props;

    return (
     <div className="commentBox">
       <div className="avatar">
       <img src="http://accounts-cdn.9gag.com/media/default-avatar/1_0_100_v0.jpg"></img>
       </div>
       <div className="textArea">
         <input className="textContent" type="text"
         onChange={this.textConetentChange} value={this.state.textContent}>
         </input>
         <button onClick={(evt) => this.fetchChat() }>POST</button>
       </div>
       <ul className="commentsContainer">
       {
         this.state.comments.map((item) => {
           return (<li>{item}</li>);
         })         
       }
       </ul>
     </div>
    );
  }
}
