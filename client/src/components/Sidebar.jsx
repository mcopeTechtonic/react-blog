import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Categories from './Categories';
import CategoriesContext from '../utils/CategoriesContext';
import API from '../utils/API';

const Sidebar = () => {
  const inputRef = useRef();
  const history = useHistory();
  const [categoryId, setCategoryId] = useState('');
  const { getCategories } = useContext(CategoriesContext);

  const viewCategory = (e) => {
    e.preventDefault();
    history.push('/', { categoryId });
  };

  const addCategory = async (e) => {
    e.preventDefault();

    try {
      await API.addCategory(inputRef.current.value.trim());
      inputRef.current.value = '';
      getCategories();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="sidebar">
      <h2>View by Category:</h2>
      <form onSubmit={viewCategory}>
        <label htmlFor="categories">Choose Category:</label>
        <select name="categories" onChange={(e) => setCategoryId(e.currentTarget.value)}>
          <option value="" defaultValue>
            All
          </option>
          <Categories />
        </select>
        <button type="submit">View Category Posts</button>
      </form>
      <h2>Add a Category:</h2>
      <form onSubmit={addCategory}>
        <label htmlFor="category">Category Name:</label>
        <input type="text" id="category" placeholder="Category Name" ref={inputRef} />
        <button type="submit">Add Category</button>
      </form>
    </section>
  );
};

export default Sidebar;
