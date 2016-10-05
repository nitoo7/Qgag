import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
import Header from "../components/Header.js"
import GagSection from "../components/GagSection.js"
import UserProfileSection from "../components/UserProfileSection.js"
require('../style/Home.scss')

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
    this.props.dispatch(fetchTweets())
  }

  fetchTweets() { 
  }

  render() {
    const { user, tweets } = this.props;

    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }
    console.log('#####->', tweets)
    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return (
     <div className="container">
       <Header />
       <GagSection gags={tweets} />
       <UserProfileSection />
      </div>
    );
  }
}
