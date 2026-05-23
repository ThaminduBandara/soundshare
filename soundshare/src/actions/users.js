

import * as api  from '../api';


export const getUsers = () => async(dispatch) => {
    try {
        const  {data} = await api.fetchUsers();
        dispatch({ type: 'FETCH_ALLU', payload: data });
    } catch (error) {
        console.log(error.message);
    }   
}


export const createUser = (user) => async (dispatch) => {                                
  try { 
    const { data } = await api.createUser(user);
    dispatch({ type: 'CREATEU', payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const login = (userData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userData);
    dispatch({ type: 'LOGIN', payload: data.user });

    localStorage.setItem('profile', JSON.stringify(data.user));
    console.log(data.user);
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
    alert(error.response?.data?.message || 'Login failed');
  }
};


export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};

// export const fetchMe = (userData) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchMe(userData);
//     dispatch({ type: 'FETCH_ME', payload: data.user });

//     localStorage.setItem('profile', JSON.stringify(data.user));
//     console.log(data.user);
//   } catch (error) {
//     console.log(error.response?.data?.message || error.message);
    
//   }
// };



export const updateUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);
    dispatch({ type: 'UPDATEU', payload: data });

    localStorage.setItem('profile', JSON.stringify(data));

  } catch (error) {
    console.log(error.messsage);
  }
};




