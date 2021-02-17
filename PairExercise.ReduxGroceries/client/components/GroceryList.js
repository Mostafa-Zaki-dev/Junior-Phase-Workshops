import React from 'react';
import GroceryItem from './GroceryItem';
import { connect } from 'react-redux';
import { toggleGrocery } from '../store';

const GroceryList = (props) => {
  // console.log('GroceryList props >>>', props);
  return (
    <ul>
      {props.groceries.map((grocery) => (
        <GroceryItem
          key={grocery.id}
          {...grocery}
          toggleGrocery={() => props.toggleGrocery(grocery.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({ groceries: state.groceries });

const mapDispatchToProps = (dispatch) => ({
  toggleGrocery: (groceryId) => dispatch(toggleGrocery(groceryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);
