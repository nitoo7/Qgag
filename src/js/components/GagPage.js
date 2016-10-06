import React from "react"
import { connect } from "react-redux"
import CommentSection from "../components/CommentSection.js"

require('../style/GagPage.scss')

export default class Home extends React.Component {

  render() {

    return (
     <div className="GagPage">
        <div className="gagContainer">
          <div className="gagTitleContainer">
            <h3 className="gagTitle">{this.props.gagInfo.title}</h3>
          </div>
          <div className="gagItem">
            <div className="gagImageContainer">
              <img className="gagImage" src={this.props.gagInfo.image} alt="Smiley face"></img>
            </div>          
          </div>
          <CommentSection />
        </div>      
      </div>
    );
  }
}
