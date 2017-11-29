import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render () {
    return (
      <div className="app">
        <h1> Hello World! </h1>
        <p>Hej, funkar det att ladda om?</p>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.body.querySelector('.content'));

console.log('It works!');

