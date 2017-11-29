import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';


class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Overview />
        <h1> Hello World! </h1>
        <p>Hej, funkar det att ladda om?</p>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.body.querySelector('.content'));

console.log('It works!');

