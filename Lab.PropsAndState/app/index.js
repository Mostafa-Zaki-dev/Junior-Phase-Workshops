import React from 'react';
import ReactDOM from 'react-dom';

// write your Color component here

class Picker extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className="red">red</div>
        </div>
        <div id="colors-list">{/* colors go here */}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);
