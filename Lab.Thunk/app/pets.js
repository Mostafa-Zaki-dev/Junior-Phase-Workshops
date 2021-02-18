import React from 'react'
import {connect} from 'react-redux'
import {List} from './utils'

class Pets extends React.Component {
  render () {
    const {pets} = this.props

    return (
      <div>
        <List
          forEachOfThese={pets}
          doThis={pet => (
            <div key={pet.id}>
              <img src={pet.imageUrl} />
              <p>{pet.name}</p>
            </div>
          )}
          unlessEmpty={() => <div>Where are the pets?!?</div>}
        />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    pets: state.pets
  }
}

const mapDispatch = (dispatch) => {
  // YOUR CODE HERE
}

export default connect(mapState, mapDispatch)(Pets)
