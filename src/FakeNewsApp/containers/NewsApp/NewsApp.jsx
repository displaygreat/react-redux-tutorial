import React, { Component } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import SearchInput from '../../components/SearchInput/SearchInput';
import Title from '../../components/Title/Title';
import { Container, ListGroup } from 'react-bootstrap';
import './NewsApp.css';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

class NewsApp extends Component {
  state ={
    result: {},
    searchQwery: '',
  }

  componentDidMount () {
    const {searchQwery} = this.state;
    this.fetchData(searchQwery);
  }

  fetchData = (searchQwery) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQwery}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error)
  }

  setNews = (result) => {
    this.setState({result})
  }

  handleChange = ({ target: {value} }) => {
    this.setState({
      searchQwery: value,
    })
  }

  getNews = ({key}) => {
    if(key === 'Enter') {
      const {searchQwery} = this.state;
      this.fetchData(searchQwery);
    }
  }

  render() {
    const {searchQwery, result} = this.state;
    const {hits=[]} = result;
    console.log(this.state.searchQwery);
    return (
      <Container className="c-news-app">
        <Title title="Fake News"/>
        <SearchInput onChange={this.handleChange} onKeyPress={this.getNews} value={searchQwery} />
        <ListGroup className="input-search" variant="flush">
          {hits.map(({author, created_at, num_comments, objectID, title, points, url}) => (
            <NewsList
              key={objectID}
              author={author}
              created_at={created_at}
              num_comments={num_comments}
              title={title}
              points={points}
              url={url}
            />
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default NewsApp;
