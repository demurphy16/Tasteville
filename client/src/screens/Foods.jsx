import React from 'react';
import { Link } from 'react-router-dom';

export default function Foods(props) {
  return (
    <div>
      <h3>Foods</h3>
      {
        props.foods.map(food => (
          <p key={food.id}>{food.name}</p>
        ))
      }
      <Link to='/foods/new'><button>Create</button></Link>
    </div>
  )
}
