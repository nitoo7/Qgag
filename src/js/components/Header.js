import React from "react"
import { connect } from "react-redux"
import { showGagSection } from "../actions/gagsActions"

require('../style/Header.scss')

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
    this.showGagSection = this.showGagSection.bind(this);
  }

  showGagSection() {
    this.props.dispatch(showGagSection())
  }

  render() {

    return (
      <div className="header">
        <h2 onClick={(evt) => this.showGagSection() }>HOME</h2>
      </div>
    );
  }
}
