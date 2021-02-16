import React from 'react';
import ReactDOM from 'react-dom';
import store, { increment } from './store'; // imported for you already
import { Provider, connect } from 'react-redux';

/* 
class Counter extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.functionToCallWhenWeWantToUnsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.functionToCallWhenWeWantToUnsubscribe();
  }

  clickHandler() {
    const action = increment();
    store.dispatch(action);
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.state.count}</h1>
          <button onClick={this.clickHandler}>Increment</button>
        </div>
      </div>
    );
  }
}
 */

const mapStateToProps = (state) => {
  console.log('Mapping state to props :', state);
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('Mapping dispatch to props :', dispatch);
  return {
    increment: () => dispatch(increment()),
  };
};

const Counter = (props) => {
  console.log('Counter props >>', props);
  const { count, increment } = props;
  console.log('Counter count >>', count);
  console.log('Counter increment >>', increment);
  return (
    <div id="container">
      <div id="counter">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
);
