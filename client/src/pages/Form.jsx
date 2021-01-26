import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import API from '../utils/API';

const Form = ({ type }) => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: '',
    text: '',
    CategoryId: '1',
  });
  const { title, text, CategoryId } = post;

  useEffect(() => {
    (async () => {
      if (id) {
        const { data: post } = await API.getPost(id);
        setPost(post);
      }
    })();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (type === 'add') {
        await API.addPost(post);
      } else {
        await API.editPost(post);
      }

      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await API.deletePost(id);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="form">
      <h2>{type === 'add' ? 'Add a New Post:' : 'Post Details'}</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Post Title Here"
          onChange={handleInputChange}
          value={title}
        />
        <label htmlFor="text">Text:</label>
        <textarea
          name="text"
          id="text"
          placeholder="Post Text Here"
          onChange={handleInputChange}
          value={text}
        ></textarea>
        <label htmlFor="categories">Choose Category:</label>
        <select name="CategoryId" id="categories" onChange={handleInputChange} value={CategoryId}>
          <Categories />
        </select>
        <button type="submit">{type[0].toUpperCase() + type.slice(1)} Post</button>
        {type === 'edit' && (
          <button type="button" className="delete" onClick={handleDelete}>
            Delete Post
          </button>
        )}
      </form>
    </section>
  );
};

export default Form;
