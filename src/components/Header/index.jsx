import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={classNames(styles.background, "uk-height-1-1 uk-cover-background")}>
        <top className="uk-width-large-1-5 uk-width-5-6 uk-container-center uk-position-top uk-text-center uk-block">
          <img className="imageTest" src={require('./images/logo.png')} />
        </top>

        <bottom className="uk-position-bottom uk-container-center uk-width-large-2-3 uk-width-5-6 uk-block uk-margin-large">
          <h1 className="uk-text-center uk-contrast uk-position-bottom uk-heading-large">
            A phrase to enlighten the world.
          </h1>
        </bottom>
      </div>
    );
  }
};
