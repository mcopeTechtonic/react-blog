import { createContext } from 'react';

const CategoriesContext = createContext({
  categories: [],
  getCategories: () => {},
  setCategories: () => {},
});

export default CategoriesContext;
