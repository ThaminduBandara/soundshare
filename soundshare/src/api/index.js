
import axios from "axios";
const API = axios.create({ baseURL: '/api' });


export const fetchPosts = () => API.get('/post'); 

export const createPost = (newPost) => API.post('/createpost', newPost);

export const updatePost = (id, updatedPost) => API.patch(`${'/updatepost'}/${id}`,updatedPost);

export const deletePost = (id) => API.delete(`${`/posts`}/${id}`);




export const fetchUsers = () => API.get('/user'); 

export const createUser = (newUser) => API.post('/createuser', newUser);

export const loginUser = (userData) => API.post('/login', userData);

export const fetchMe = (userData) => API.post('/fetchme', userData);

export const updateUser = (id, updatedUser) => API.patch(`${'/updateuser'}/${id}`,updatedUser);

export const deleteUser = (id) => API.delete(`${`/users`}/${id}`);

export const fetchPostsByCreator = (creator) => API.get(`${`/ownpost`}/${creator}`);
