import React from 'react';

import './index.css';
import { data } from '../../sample_data/data.js';

import Header from '../Header';
import Navbar from '../Navbar';
import Body from '../Body';

export default class App extends React.Component{
  render() {
    return(
      <div className="uk-height-1-1">
        <Header />
        <Navbar />
        <Body users={data.users} />
      </div>
    );
  }
}
