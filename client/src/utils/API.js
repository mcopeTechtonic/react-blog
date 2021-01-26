import axios from 'axios';
const url = process.env.API_URL;
const postsUrl = `${url}/api/posts`;
const categoriesUrl = `${url}/api/categories`;

export default {
  getPosts: (categoryId) => {
    // make this more elegant!!!
    let query = '';
    if (categoryId) {
      query = '?CategoryId=' + categoryId;
    }

    return axios.get(`${postsUrl}${query}`);
  },
  getPost: (id) => {
    return axios.get(`${postsUrl}/${id}`);
  },
  addPost: (post) => {
    return axios.post(`${postsUrl}`, post);
  },
  editPost: (post) => {
    return axios.put(`${postsUrl}/${post.id}`, post);
  },
  deletePost: (id) => {
    return axios.delete(`${postsUrl}/${id}`);
  },
  getCategories: () => {
    return axios.get(`${categoriesUrl}`);
  },
  addCategory: (category) => {
    return axios.post(`${categoriesUrl}`, { name: category });
  },
};
