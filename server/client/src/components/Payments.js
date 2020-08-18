import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux'
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name='Node Email Blaster'
          description='Purchase 5 credits'
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className='btn amber darken-4' href=''>
            Add Credits
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);
