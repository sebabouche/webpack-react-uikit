import React, { Component } from 'react';

export default class SampleChild extends Component {
  render() {
    return(
      <div className="uk-grid">
        <div className="uk-width-1-5"><img src={this.props.profilePic} alt="Alt" className="uk-border-circle" /></div>
        <div className="uk-width-4-5">{this.props.firstname} {this.props.lastname}</div>
      </div>
    )
  }
}
