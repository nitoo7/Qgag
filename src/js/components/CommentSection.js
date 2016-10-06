import React from "react"
import { connect } from "react-redux"
import { fetchGags } from "../actions/gagsActions"
import Header from "../components/Header.js"
import GagSection from "../components/GagSection.js"
import CommentBox from "../components/CommentBox.js"
require('../style/CommentSection.scss')

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

    console.log('#####->', displayGagPage)

    return (
     <div className="commentSection">
       <h3>Comments</h3>
       <CommentBox />
     </div>
    );
  }
}
