import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const SimpleButton = () => (
  <Button className="my-4" variant="info">
    Simple Button
  </Button>
);

export const Counter = ({ counter }) => {
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>;
};

// Counter.propTypes = {
//   counter: PropTypes.number.isRequired,
//   func: PropTypes.func,
//   number: PropTypes.number,
//   string: PropTypes.string,
// };

// Counter.defaultProps = {
//   func: () => {},
//   number: 0,
//   string: "",
// };

export class SimpleCounter extends Component {
  static propTypes = {
    children: PropTypes.element,
  };
  static defaultProps = {
    children: null,
  };
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }));
  };

  render() {
    const { counter } = this.state;
    const { children, child } = this.props;

    return (
      <Container>
        {child}
        <h3 className="my-4">{counter}</h3>
        {React.cloneElement(children, { counter: this.state.counter })}
        <Button className="my-4" variant="info" onClick={this.handleClick}>
          +1
        </Button>
      </Container>
    );
  }
}
