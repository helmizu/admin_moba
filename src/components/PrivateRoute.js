import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLogedIn, ...rest }) => (
  <Route
  {...rest}
  render={props =>
    isLogedIn === true ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  }
  />
);


const mapStateToProps = state => ({
  isLogedIn: state.global.isLogedIn
});

export default connect(mapStateToProps)(PrivateRoute);