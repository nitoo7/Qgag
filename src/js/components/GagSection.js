import React from "react"
import { connect } from "react-redux"
import { showGagPage } from "../actions/gagsActions"
import { fetchGags } from "../actions/gagsActions"

require('../style/GagSection.scss')
import response from "../../../mockResponse/response.js"

@connect((store) => {
  console.log('%%%%%%->', store)
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    gags: store.gags.gags,
  };
})

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.showGag = this.showGag.bind(this);
  }

  showGag(item) {
    console.log('teriggered........',item)
    this.props.dispatch(showGagPage(item))
  }

  render() {

    return (
      <div className="gagSection">
        <div className="gagContainer">
        {
          this.props.gags.map(item => 
          <div>
            <h3 onClick={(evt) => this.showGag(item) } className="gagTitle">{item.title}</h3>
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
