import React from 'react';

export default class Overview extends React.Component {

  onClick = () => {
    console.log('clicked!');
  }

  render () {
    return (
      <div className="overview">
        <button type="button" onClick={this.onClick}></button>
      </div>
      )
  }
}