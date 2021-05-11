import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './NewsList.css';

const NewsList = ({ author, created_at, num_comments, title, points, url }) => (
    <ListGroup.Item className="c-news-list">
      <a className="title" href={url}>{title}</a>
      <span className="description">{`${points} points`}</span>
      <span className="description">{`${num_comments} comments`}</span>
      <span className="description">{new Date(created_at).toLocaleDateString()}</span>
      <span className="description">{author}</span>
    </ListGroup.Item>
)

export default NewsList;
