import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return [
          <li key='1'><Payments /></li>,
            <li style={{margin: '0 10px'}} key='3'>Credits: {this.props.auth.credits}</li>,
          <li key='2'>
            <a href='/api/logout'>Logout</a>
          </li>
          ]
        
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper grey darken-4'>
          <div className='container'>
            <Link
              className='left brand-logo'
              to={this.props.auth ? '/surveys' : '/'}
            >
              Node Email Blaster
            </Link>
            <ul className='right'>{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateTopProps({ auth }) {
  return { auth };
}

export default connect(mapStateTopProps)(Header);
