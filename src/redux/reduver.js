const initialeState = {
  users: []
};
const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "add_user":
      return { ...state, users: [...state.users, action.payload] };
    case "delete_user":
      return {
        ...state,
        users: [...state.users.filter((user) => user.code !== action.payload)]
      };
    case "edit_user":
      return {
        ...state,
        users: [
          ...state.users.filter((user) => user.code !== action.payload.code),
          action.payload
        ]
      };
    default:
      return { ...state };
  }
};
export default reducer;
