import React from 'react';
import './button.css';

export default class Button extends React.Component {
  render () {
    const { onChange, text } = this.props;
    return (
      <div>
        <button className="button" onClick={onChange}>{text}</button>
      </div>
    )
  }
}

Button.defaultProps = {
  text:'',
  onChange: () => {},
}