

const loginout = JSON.parse(localStorage.getItem('profile'));

const loginoutReducer = (state = loginout, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    // case 'FETCH_ME':
    //   return action.payload;
    case 'LOGOUT':
      localStorage.removeItem('profile');
      return null;
    default:
      return state;
  }
};

export default loginoutReducer;

