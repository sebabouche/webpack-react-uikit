import React from 'react';
import styles from './styles.css';

export default class Navbar extends React.Component {
  render () {
    return (
      <div>
        <nav
          className="uk-navbar"
          id="#top"
          data-uk-sticky="{clsactive: 'uk-navbar-attached', top:-100, animation: 'uk-animation-slide-top'}"
          style={{zIndex: "980"}}
        >
          <div className="uk-navbar-content uk-navbar-center uk-visible-large">
            <ul className="uk-navbar-nav uk-width-1-1 uk-container uk-container-center" data-uk-scrollspy-nav="{closest: 'li', smoothscroll: {offset: 60}}">
              <li><a href="#section1">Section 1</a></li>
              <li><a href="#section2">Section 2</a></li>
              <li><a href="#section3">Section 3</a></li>
              <li><a href="#section4">Section 4</a></li>
              <li><a href="#modal" data-uk-modal className="order">Modal</a></li>
            </ul>
          </div>
          <a className="uk-navbar-toggle uk-hidden-large" href="#offCanvas" data-uk-offcanvas></a>
          <div className="uk-navbar-content uk-navbar-flip uk-hidden-large">
            <ul className="uk-navbar-nav">
              <li><a href="#modal" data-uk-modal className="order">Modal</a></li>
            </ul>
          </div>
        </nav>
        <div id="offCanvas" className="uk-offcanvas">
          <div className="uk-offcanvas-bar">
            <ul className="uk-nav uk-nav-offcanvas" data-uk-scrollspy-nav="{closest: 'li', smoothscroll: {offset: 60}}">
              <li><a href="#section1">Section 1</a></li>
              <li><a href="#section2">Section 2</a></li>
              <li><a href="#section3">Section 3</a></li>
              <li><a href="#section4">Section 4</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
