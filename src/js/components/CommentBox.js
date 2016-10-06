import React from "react"
import { connect } from "react-redux"
import { fetchGags } from "../actions/gagsActions"
import Header from "../components/Header.js"
import GagSection from "../components/GagSection.js"
import CommentBox from "../components/CommentBox.js"
require('../style/CommentBox.scss')

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
  
  componentWillMount() {
    this.props.dispatch(fetchGags())
  }

  render() {
    const { user, gags , displayGagPage, gagInfo} = this.props;

    return (
     <div className="commentBox">
       <div className="avatar">
       <img src="http://accounts-cdn.9gag.com/media/default-avatar/1_0_100_v0.jpg"></img>
       </div>
       <div className="textArea">
         <input className="textContent" type="text"></input>
       </div>
     </div>
    );
  }
}
