import React from "react"
import { connect } from "react-redux"
import CommentSection from "../components/CommentSection.js"
import { fetchPost } from "../actions/gagsActions"

require('../style/GagPage.scss')

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    gags: store.gags.gags,
    displayGagPage: store.gags.displayGagPage,
    gagInfo: store.gags.gagInfo,
    fetchPost: store.gags.fetchPost
  };
})


export default class Home extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchPost(window.location.hash.substring(7,31)))
  }

  render() {

    return (
     <div className="GagPage">
        <div className="gagContainer">
          <div className="gagTitleContainer">
            <h3 className="gagTitle">{this.props.gagInfo ? this.props.gagInfo.title: ""}</h3>
          </div>
          <div className="gagItem">
            <div className="gagImageContainer">
              <img className="gagImage" src={this.props.gagInfo ? this.props.gagInfo.image: ""} alt="Smiley face"></img>
            </div>          
          </div>
          <CommentSection />
        </div>      
      </div>
    );
  }
}
