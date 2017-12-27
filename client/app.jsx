import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';
import TinderContainer from './components/tinder/tinderContainer.jsx';
import styles from './style.css';
import Button from './components/button.jsx';

class App extends React.Component {

  state = {
    enableTinder: false
  }

  toggleMode = () => {
    const { enableTinder } = this.state; 
    this.setState({enableTinder: !enableTinder})
  }

  render () {
    const { enableTinder } = this.state;
    return (
      <div className="app">
        {!enableTinder && <Overview />}
        {enableTinder && <TinderContainer /> }
        <Button onChange={this.toggleMode}/>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.body.querySelector('.content'));

