import React, {PropTypes} from 'react';

export default class SampleEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="uk-form">
        <div className="uk-form-row">
          <input
            onChange={this.props.handleEmailChange}
            className="uk-form-control"
            type="text"
          />
          <button onClick={this.props.fetchGravatar} className="uk-button uk-button-success">Fetch</button>
        </div>
      </form>
    );
  }
};

SampleEmail.propTypes = {
  handleEmailChange: PropTypes.func,
  fetchGravatar: PropTypes.func,
};
