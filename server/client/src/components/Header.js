import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <a className='left brand-logo' href='/'>
              Node Email Blaster
            </a>
            <ul className='right'>
              <li><a href="/">Login with Google</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

