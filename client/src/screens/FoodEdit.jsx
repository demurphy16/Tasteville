import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FoodEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const foodItem = props.foods.find(food => food.id === Number(id));
      setFormData({
        name: foodItem.name
      })
    }
    if (props.foods.length){
      prefillForm();
    }
  }, [props.foods])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
    }}>
      <h3>Edit Food</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
