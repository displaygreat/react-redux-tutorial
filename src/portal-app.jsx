import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class MyPortal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }
  
  componentWillUnmount () {
    document.body.appendChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

class PortalApp extends Component {

  state = {
    click: 0,
  }

  handleClicks = () => {
    this.setState(({ click }) => ({
      click: click + 1,
    }))
  }

  render() {
    console.log(this.state.click);
    return (
      <div onClick={this.handleClicks}>
        <h2 className="m-4 text-info">Root</h2>
        <p className="m-4">Clicks: <span className="fs-3 ms-2 text-warning">{this.state.click}</span></p>
        <hr />
        <MyPortal >
          <h2 className="m-4 text-danger">Portal</h2>
          <Button className="m-4" variant="warning">Click</Button>
        </MyPortal>
      </div>
    );
  }
}

export default PortalApp;
