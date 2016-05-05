import React, {PropTypes} from 'react';
export default class SampleAvatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <p>
          <em>{this.props.email}</em>
        </p>
        <img src={this.props.src} className="img-rounded"/>
      </div>
    );
  }
}

SampleAvatar.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string,
};
