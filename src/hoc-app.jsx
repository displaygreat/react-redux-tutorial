import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import LoadingHOC from './loading-hoc';
// const AppLink = (props) => ({
//   render: () => (
//     <Link {...props} activeClassName='active' />
//   )
// })

// class HocApp extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <nav>
//             <AppLink to="/">Home</AppLink>
//             <AppLink to="/portfolio">Portfolio</AppLink>
//             <AppLink to="/contacts">Contacts</AppLink>
//           </nav>
//         </Router>
//       </div>
//     );
//   }
// }

class AppComponentUI extends Component {
  render() {
    return (
      <div className="m-5 d-flex justify-content-center">{this.props.data.title}</div>
    );
  }
}

const AppComponent = LoadingHOC('data')(AppComponentUI) 

class HocApp extends Component {
  state = {
    data: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => this.updateState(data))
  }
  
  updateState = (data) => {
    window.setTimeout(() => {
      this.setState({data})
    }, 3000)
  }

  render() {
    return (
      <AppComponent data={this.state.data}/>
    );
  }
}

export default HocApp;