import React, { useContext } from 'react';
import CategoriesContext from '../utils/CategoriesContext';

const Categories = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {categories.map(({ id, name }) => (
        <option value={id} key={id}>
          {name}
        </option>
      ))}
    </>
  );
};

export default Categories;
