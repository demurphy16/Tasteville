import React from 'react'

export default function Foods(props) {
  return (
    <div>
      <h3>Foods</h3>
      {
        props.foods.map(food => (
          <p key={food.id}>{food.name}</p>
        ))
      }
    </div>
  )
}
