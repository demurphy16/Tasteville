import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Flavors from '../screens/Flavors';
import Foods from '../screens/Foods';
import { getAllFlavors } from '../services/flavors'
import { getAllFoods } from '../services/foods'

export default function MainContainer(props) {
  const [flavors, setFlavors] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorData = await getAllFlavors();
      setFlavors(flavorData);
    }
    const fetchFoods = async () => {
      const foodData = await getAllFoods();
      setFoods(foodData);
    }
    fetchFlavors();
    fetchFoods();
  }, [])

  return (
    <Switch>
      <Route path='/flavors'>
        <Flavors flavors={flavors} />
      </Route>
      <Route path='/foods'>
        <Foods foods={foods} />
      </Route>
    </Switch>
  )
}
