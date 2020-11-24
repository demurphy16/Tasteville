import React from 'react'

export default function Flavors(props) {
  return (
    <div>
      <h3>Flavors</h3>
      {
        props.flavors.map(flavor => (
        <p key={flavor.id}>{flavor.name}</p>
        ))
      }
    </div>
  )
}
