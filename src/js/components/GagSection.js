import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
require('../style/GagSection.scss')
import response from "../../../mockResponse/response.js"

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
        {
          this.props.gags.map(item => 
          <div>
            <h3 className="gagTitle">{item.title}</h3>
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
