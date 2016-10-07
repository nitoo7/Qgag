import React from "react"
import { connect } from "react-redux"
import { fetchGags } from "../actions/gagsActions"
import Header from "../components/Header.js"
import GagSection from "../components/GagSection.js"
import GagPage from "../components/GagPage.js"
require('../style/Home.scss')

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

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchGags())
  }

  render() {
    const { user, gags , displayGagPage, gagInfo} = this.props;

    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
