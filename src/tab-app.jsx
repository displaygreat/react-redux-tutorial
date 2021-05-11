import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

const Tab1 = () => (<p style={{ color: 'blue', fontSize: '24px' }}>Text of tab 1</p>);
const Tab2 = () => (<p style={{ color: 'blue', fontSize: '24px' }}>Text of tab 2</p>);
const Tab3 = () => (<p style={{ color: 'blue', fontSize: '24px' }}>Text of tab 3</p>);

const people = ['Alex', 'Max', 'Dan', 'Sam'];

const TABS_BTN = [
  {
    dataName: 1,
    title: 'Tab 1',
    icon: '+',
  },
  {
    dataName: 2,
    title: 'Tab 2',
    icon: '-',
  },
  {
    dataName: 3,
    title: 'Tab 3',
    icon: '*',
  }
]

class TabApp extends Component {
  state = {
    activeTab: 1,
  }

  handleClick = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute('dataName'),
    })
  }

  render () {
    const { activeTab } = this.state;  
    return (
      <Container>
        {TABS_BTN.map(({ dataName, title, icon }) => (
          <Button 
            key={`${dataName}-${title}`}
            className="my-4 me-4"
            variant="info"
            dataName={dataName}
            onClick={this.handleClick}
          >{icon}{title}</Button>
        ))}
        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <div style={{ fontStyle: 'italic' }}>{`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}</div>
        <ul className="my-4">
          {people.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </Container>
    )
  }
}
export default TabApp;