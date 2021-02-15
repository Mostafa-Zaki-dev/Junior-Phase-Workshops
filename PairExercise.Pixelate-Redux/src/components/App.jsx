import React from 'react'
import store, {addRow} from '../store'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }
  
  componentWillUnmount() {
    this.unsubscribe()
  }

  handleAddRowClick() {
    store.dispatch(addRow())
  }
  render () {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={this.handleAddRowClick}>Add a row</button>
          <select>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <table>
          <thead>
          {this.state.grid.map((row, rowIndex ) =>
          <tr key={rowIndex}>
            {row.map((color, cellIndex) => <td key={cellIndex} className={color}></td>)}
          </tr>
          )}
          </thead>
        </table>
      </div>
    )
  }
}