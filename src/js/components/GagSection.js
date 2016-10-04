import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
require('../style/GagSection.scss')

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

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return (
      <div className="gagSection">
        <div className="gagContainer">
          <h3 className="gagTitle">gag...1</h3>
           <div className="gagImageContainer">
             <img className="gagImage" src="http://www.planwallpaper.com/static/images/latest.jpg" alt="Smiley face"></img>
           </div>
        </div>
        <div className="gagContainer">
          <h3 className="gagTitle">gag...2</h3>
          <div className="gagImageContainer">
            <img className="gagImage" src="http://www.planwallpaper.com/static/images/latest.jpg" alt="Smiley face"></img>
          </div>
        </div>
      </div>
    );
  }
}
