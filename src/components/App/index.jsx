import './css/app.scss';

import React from 'react';
import Child from '../Child';

const dude = require('./images/profiles/dude.jpg');
const walter = require('./images/profiles/walter.jpg');
const user_data = [
  {
    "id": 0,
    "firstname": "Jeffrey",
    "lastname": "Lebowski",
    "profilePic": dude
  },
  {
    "id": 1,
    "firstname": "Walter",
    "lastname": "Sobchak",
    "profilePic": walter
  }
]

export default React.createClass({
  displayName: 'App',

  render: function() {
    const users = user_data.map(function(user) {
      return(<Child key={user.id} firstname={user.firstname} lastname={user.lastname} profilePic={user.profilePic} />)
    });

    return(
      <div>
        <h2>React components loading!</h2>
        <div className="uk-panel uk-panel-box">
          <h3>UI-Kit working</h3>
        </div>
        <div>{users}</div>
      </div>
    );
  }
})
