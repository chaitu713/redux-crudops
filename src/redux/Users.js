import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      name: "Chaitanya",
      mobile: '7207789204',
      email: 'chayg713@gmail.com'
    },
    {
      id: 2,
      name: "Phani",
      mobile: '8107781391',
      email: 'phanid73@gmail.com'
    },
    {
      id: 3,
      name: "Aravind",
      mobile: '8105665018',
      email: 'aravind.a13@gmail.com'
    },
    {
      id: 4,
      name: "Karunakar",
      mobile: '7207777027',
      email: 'b.karunakar3@gmail.com'
    },
    {
      id: 5,
      name: "Hussain",
      mobile: '7207789204',
      email: 'hussain.a6@gmail.com'
    },
    {
      id: 6,
      name: "KR",
      mobile: '9840289204',
      email: 'kr42.ch@gmail.com'
    },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    editUser: (state, action) => {
      const { id, name, mobile, email } = action.payload;
      console.log(email);
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.mobile = mobile;
        existingUser.email = email;
      }
    },

    deleteUser : (state, action) => {
        const {id} = action.payload;
        const existingUser = state.find((user)=> user.id === id);
        if (existingUser) {
            return state.filter((user) => user.id !== id);
        }
    }

  },
});

export const { addUser, editUser ,deleteUser } = userSlice.actions;
export default userSlice.reducer;
