import React from "react"
import { connect } from "react-redux"

require('../style/GagSection.scss')
import response from "../../../mockResponse/response.js"

export default class Home extends React.Component {

  render() {

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
