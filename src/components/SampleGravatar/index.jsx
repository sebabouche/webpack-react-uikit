import React, {propTypes} from 'react';
import md5 from 'md5';

import SampleAvatar from '../SampleAvatar';
import SampleEmail from '../SampleEmail';

export default class SampleGravatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'someone@example.com',
      src: 'http://placehold.it/200x200'
    }
  }

  updateGravatar() {
    this.setState({
      src: `http://gravatar.com/avatar/${md5(this.state.email)}?s=200`
    });
  }

  updateEmail(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <div className="uk-container react-gravatar">
        <h4 className="uk-text-contrast">Avatar for:</h4>
        <SampleAvatar email={this.state.email} src={this.state.src}/>
        <SampleEmail fetchGravatar={this.updateGravatar.bind(this)} handleEmailChange={this.updateEmail.bind(this)}/>
        <p className="uk-text-contrast">Test with s.nicolaidis@me.com</p>
      </div>
    );
  }
}
