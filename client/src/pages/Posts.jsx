import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from '../utils/API';

const Posts = () => {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let response;

      try {
        if (state?.categoryId) {
          response = await API.getPosts(state.categoryId);
        } else {
          response = await API.getPosts();
        }

        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [state]);

  return (
    <section className="posts">
      <h2>Recent Posts:</h2>
      <ul id="posts">
        {posts.map((post) => {
          const { title, text, id } = post;
          const categoryName = post.Category?.name;

          return (
            <li key={id}>
              <span className="category">
                {categoryName ? 'Category: ' + categoryName : 'Uncategorized'}
              </span>
              <h3>
                <Link to={'/posts/' + id}>{title}</Link>
              </h3>
              <p className="text">{text.substring(0, 300)}</p>
              <p>
                <Link to={'/posts/' + id}>Read more...</Link>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
