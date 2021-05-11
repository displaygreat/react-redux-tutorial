import React, { Component, createContext } from 'react';

// const LevelThree = ({ title }) => <h1>{title}</h1>;
// const LevelTwo = ({ title }) => <LevelThree title={title} />;
// const LevelOne = ({ title }) => <LevelTwo title={title} />;

// class ContextApp extends Component {
//   render() {
//     return (
//       <LevelOne title="Simple title" />
//     );
//   }
// }

const TitleContext = createContext();

const LevelThree = () => (
  <TitleContext.Consumer>
    { ({ title, subtitle, click }) => (
        <>
          <h1 className="m-4 text-info" onClick={click}>{title}</h1>
          <h2 className="m-3 text-secondary">{subtitle}</h2>
        </>
    ) }
  </TitleContext.Consumer>
)
const LevelTwo = () => <LevelThree />;
const LevelOne = () => <LevelTwo />;

class ContextApp extends Component {
  render() {
    return (
      <TitleContext.Provider value={{ title: 'Title', subtitle: 'Subtitle', click: () => console.log('Hello!') }}>
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}

export default ContextApp;
