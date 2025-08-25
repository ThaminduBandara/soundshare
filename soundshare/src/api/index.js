
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
