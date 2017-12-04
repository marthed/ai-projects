import React from 'react';

export default class Button extends React.Component {
  render () {
    const { onChange, text } = this.props;
    return (
      <div className="button">
        <button onClick={onChange}>{text}</button>
      </div>
    )
  }
}

Button.defaultProps = {
  text:'',
  onChange: () => {},
}