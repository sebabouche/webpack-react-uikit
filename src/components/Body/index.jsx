import styles from './index.css';

import React from 'react';

import SampleChild from '../SampleChild';
import SampleGravatar from '../SampleGravatar';

export default class Body extends React.Component{
  render() {
    return(
      <div>
        <section className="uk-block" id="section1">
          <h2 className="uk-text-center">Section 1</h2>
          <div className="uk-panel uk-panel-box">
            <h3>UI-Kit working</h3>
          </div>
          <div>{
            this.props.users.map((user, index) => {
              return(
                <SampleChild
                  key={index}
                  profilePic={user.profilePic}
                  firstname={user.firstname}
                  lastname={user.lastname} />
              )
            })
          }</div>
        </section>
        <section className="uk-block uk-block-primary" id="section2">
          <div className="uk-height-viewport">
            <h2 className="uk-contrast uk-text-center">Section2</h2>
            <SampleGravatar />
          </div>
        </section>
        <section className="uk-block uk-block-muted" id="section3">
          <div className="uk-height-viewport">
            <h2 className="uk-text-center">Section3</h2>
          </div>
        </section>
        <section className="uk-block uk-block-primary" id="section4">
          <div className="uk-height-viewport">
            <h2 className="uk-contrast uk-text-center">Section4</h2>
          </div>
        </section>

      </div>
    );
  }
};
