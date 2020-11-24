import React from 'react';
import { Link } from 'react-router-dom';

export default function Foods(props) {
  return (
    <div>
      <h3>Foods</h3>
      {
        props.foods.map(food => (
          <React.Fragment key={food.id}>
            <p>{food.name}</p>
            <Link to={`/foods/${food.id}/edit`}><button>Edit</button></Link>
          </React.Fragment>
        ))
      }
      <Link to='/foods/new'><button>Create</button></Link>
    </div>
  )
}
