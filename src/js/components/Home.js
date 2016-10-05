import React from "react"
import { connect } from "react-redux"
import { fetchGags } from "../actions/gagsActions"
import Header from "../components/Header.js"
import GagSection from "../components/GagSection.js"
import UserProfileSection from "../components/UserProfileSection.js"
require('../style/Home.scss')

@connect((store) => {
  console.log('%%%%%%->', store)
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    gags: store.gags.gags,
  };
})
export default class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchGags())
  }

  fetchTweets() { 
  }

  render() {
    const { user, gags } = this.props;

    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }
    console.log('#####->', gags)

    return (
     <div className="container">
       <Header />
       <GagSection gags={gags} />
       <UserProfileSection />
      </div>
    );
  }
}
