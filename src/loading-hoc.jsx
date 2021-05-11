import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (loadingProps) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render () {
      return (
        isEmpty(this.props[loadingProps]) ? 
        <Spinner className="my-5 mx-auto d-flex " animation="border" variant="warning" /> :
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default LoadingHOC;

