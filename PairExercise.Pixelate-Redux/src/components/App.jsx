import React from 'react'
import store, {addRow, pickColor, colorize} from '../store'
import Table from './Table.jsx'

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

  handleColorChange (event) {
    store.dispatch(pickColor(event.target.value))
  }

  render () {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={this.handleAddRowClick}>Add a row</button>
          <select onChange={this.handleColorChange}>
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
        <Table grid={this.state.grid} />
      </div>
    )
  }
}