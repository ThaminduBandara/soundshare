
import axios from "axios";

// check thiss
const url = 'http://localhost:3001/api/post';

export  const fetchPosts = () => axios.get(url); 