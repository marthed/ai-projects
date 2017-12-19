import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';
import TinderContainer from './components/tinder/tinderContainer.jsx';
import styles from './style.css';

const enableTinder = false;

class App extends React.Component {
  render () {
    return (
      <div className="app">
        {!enableTinder && <Overview />}
        {enableTinder && <TinderContainer /> }
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.body.querySelector('.content'));

