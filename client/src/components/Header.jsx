import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1>Tasteville</h1>
      <Link to='/login'>Login/Register</Link>
      <hr />
    </div>
  )
}
