import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';
import styles from './style.css';
import Button from './components/button.jsx';

class App extends React.Component {

  render () {
    return (
      <div className="app">
        <Overview />
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.body.querySelector('.content'));

