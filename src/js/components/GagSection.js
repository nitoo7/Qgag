import React from "react"
import { connect } from "react-redux"
import { showGagPage } from "../actions/gagsActions"
import { fetchGags } from "../actions/gagsActions"
var Link = require('react-router').Link

require('../style/GagSection.scss')
import response from "../../../mockResponse/response.js"

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
    this.showGag = this.showGag.bind(this);
  }

  showGag(item) {
    this.props.dispatch(showGagPage(item))
  }

  render() {

    return (
      <div className="gagSection">
        <div className="gagContainer">
        {
          this.props.gags.map(item => 
          <div className="gagItem">
          <Link className="gagTitle" to={`/post/` + item._id}>{item.title}</Link>
            <div className="gagImageContainer">
              <img className="gagImage" src={item.image} alt="Smiley face"></img>
            </div>          
          </div>
          )
        }
        </div>
      </div>
    );
  }
}
