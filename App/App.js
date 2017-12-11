import React from 'react';
import CounterWidget from './CounterWidget';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foo: '',
      counter: 0,
    };
    this.onClick = this.onClick.bind(this);
    this.onIncreaseCounter = this.onIncreaseCounter.bind(this);
  }

  onClick() {
    this.setState({ foo: 'clicked' });
  }

  onIncreaseCounter() {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  componentDidMount() {
    this.setState({
      foo: 'baz',
    });
  }

  componentWillUnmount() {
    alert('I knew Dan and Devon lied about hot reloading.');
  }

  render() {
    return (
      <div>
        <h2>Current state: {this.state.foo}</h2>
        <button onClick={this.onClick}>change state</button>
        <button onClick={this.onIncreaseCounter}>counter +1</button>
        <CounterWidget counter={this.state.counter} />
      </div>
    );
  }
}

export { App };
