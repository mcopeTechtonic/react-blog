import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Posts from './pages/Posts';
import Form from './pages/Form';
import Sidebar from './components/Sidebar';
import CategoriesContext from './utils/CategoriesContext';
import API from './utils/API';

const App = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    API.getCategories()
      .then(({ data: categories }) => setCategories(categories))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Router>
      <Header />
      <div className="container">
        <CategoriesContext.Provider value={{ categories, getCategories, setCategories }}>
          <div>
            <Switch>
              <Route exact path={['/', '/posts']} component={Posts} />
              <Route exact path="/posts/new">
                <Form type="add" />
              </Route>
              <Route exact path="/posts/:id">
                <Form type="edit" />
              </Route>
            </Switch>
            <Sidebar />
          </div>
        </CategoriesContext.Provider>
      </div>
    </Router>
  );
};

export default App;
