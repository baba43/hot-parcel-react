import React from 'react';

class CounterWidget extends React.Component {
  render() {
    return <div>Counter: {this.props.counter}</div>;
  }
}

export default CounterWidget;
