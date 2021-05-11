import React, { Component } from 'react';

import PropTypes from "prop-types";
import { Container } from 'react-bootstrap';

const SimpleLink = ({ onClick, text }) => (
  <a className="d-block my-4" href="/test" onClick={onClick}>
    {text}
  </a>
);

SimpleLink.propsTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

SimpleLink.defaultProps = {
  onClick: () => {},
  text: 'link'
};

class LinkApp extends Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log('click');
  }

  render () {
    return (
      <Container>
        <SimpleLink onClick={this.handleClick} />
      </Container>
    )
  }
}
export default LinkApp;