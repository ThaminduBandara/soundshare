
import axios from "axios";

// // check thiss
// const url = 'http://localhost:3001/api/createpost';

// export  const fetchPosts = () => axios.get(url); 

// export const createPost = (newPost) => axios.post(url,newPost);

// import axios from 'axios';


const API = axios.create({ baseURL: '/api' });


export const fetchPosts = () => API.get('/post'); 


export const createPost = (newPost) => API.post('/createpost', newPost);

export const updatePost = (id, updatedPost) => API.patch(`${'/updatepost'}/${id}`,updatedPost);

export const deletePost = (id) => API.delete(`${`/posts`}/${id}`);



export const fetchUsers = () => API.get('/user'); 

export const createUser = (newUser) => API.post('/createuser', newUser);

export const updateUser = (id, updatedUser) => API.patch(`${'/updateuser'}/${id}`,updatedUser);

export const deleteUser = (id) => API.delete(`${`/users`}/${id}`);