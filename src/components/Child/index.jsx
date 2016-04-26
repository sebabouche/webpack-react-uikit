import './css/child.scss';

import React from 'react';

export default React.createClass({
  displayName: 'Child',
  render: function() {
    return(
      <div className="uk-grid child">
        <div className="uk-width-1-3 picture"><img src={this.props.profilePic} alt="Alt" className="uk-border-circle" /></div>
        <div className="uk-width-2-3 infos">{this.props.firstname} {this.props.lastname}</div>
      </div>
    );
  }
});
