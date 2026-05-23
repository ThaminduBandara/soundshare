
const userReducer =  (users = [], action) => {
  
    switch (action.type ) {
        case 'UPDATEU':
            return users.map((user) => user._id === action.payload._id ? action.payload : user);
        case 'FETCH_ALLU':
            return action.payload;
        case 'CREATEU':
            return [ ...users, action.payload ]; 
        default:
            return users;
    }
}

export default userReducer;