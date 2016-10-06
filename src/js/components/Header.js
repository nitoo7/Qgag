import React from "react"
import { connect } from "react-redux"
import { showGagSection } from "../actions/gagsActions"

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
    this.showGagSection = this.showGagSection.bind(this);
  }

  showGagSection() {
    this.props.dispatch(showGagSection())
  }

  render() {

    return (
      <div className="header">
        <div className="homeTitle" onClick={(evt) => this.showGagSection() }>QGAG</div>
        <button className="newPost">New Post</button>
        <button className="signIn">Sign in</button>
      </div>
    );
  }
}
