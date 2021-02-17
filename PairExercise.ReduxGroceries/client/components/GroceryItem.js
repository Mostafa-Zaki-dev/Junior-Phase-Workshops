import React from 'react';

const GroceryItem = ({ toggleGrocery, bought, text }) => {
  return (
    <li
      onClick={toggleGrocery}
      style={{
        textDecoration: bought ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
  );
};

export default GroceryItem;
