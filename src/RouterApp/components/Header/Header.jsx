import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="c-header">
    <Container>
      <nav>
      <ul>
        <li><Link exact to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
    </Container>
  </div>
)

export default Header;
