import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Flavors from '../screens/Flavors';
import FoodCreate from '../screens/FoodCreate';
import FoodDetail from '../screens/FoodDetail';
import FoodEdit from '../screens/FoodEdit';
import Foods from '../screens/Foods';
import { getAllFlavors } from '../services/flavors'
import { destroyFood, getAllFoods, postFood, putFood } from '../services/foods'

export default function MainContainer(props) {
  const [flavors, setFlavors] = useState([]);
  const [foods, setFoods] = useState([]);
  const history = useHistory();

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

  const handleCreate = async (foodData) => {
    const newFood = await postFood(foodData);
    setFoods(prevState => [...prevState, newFood]);
    history.push('/foods');
  }

  const handleUpdate = async (id, foodData) => {
    const updatedFood = await putFood(id, foodData);
    setFoods(prevState => prevState.map(food => {
      return food.id === Number(id) ? updatedFood : food
    }))
    history.push('/foods');
  }

  const handleDelete = async (id) => {
    await destroyFood(id);
    setFoods(prevState => prevState.filter(food => food.id !== id))
  }

  return (
    <Switch>
      <Route path='/flavors'>
        <Flavors flavors={flavors} />
      </Route>
      <Route path='/foods/:id/edit'>
        <FoodEdit foods={foods} handleUpdate={handleUpdate} />
      </Route>
      <Route path='/foods/new'>
        <FoodCreate handleCreate={handleCreate} />
      </Route>
      {/* Here, we're adding a route for our single food screen */}
      {/* we're passing it "flavors" to use in our drop down form */}
      <Route path='/foods/:id'>
        <FoodDetail flavors={flavors} />
      </Route>
      <Route path='/foods'>
        <Foods
          foods={foods}
          handleDelete={handleDelete}
          currentUser={props.currentUser}
        />
      </Route>
    </Switch>
  )
}
