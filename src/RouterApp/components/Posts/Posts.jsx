import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res=> res.json())
    .then(data => {
      this.setState({
        data
      })
    })
  }

  render () {
    const {data} = this.state;
    return (
      <Container>
        <h1 className="my-5">This is posts page</h1>
        <ul>
          {data.map(({id, title}) =>
            <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
          )}
        </ul>
      </Container>
    );
  }
}

export default Posts;