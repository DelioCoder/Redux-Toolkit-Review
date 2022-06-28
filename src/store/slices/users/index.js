import { createSlice } from "@reduxjs/toolkit";

// axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: ( state, action ) => {
        state.list = action.payload;
    }
  },
});

export const { setUserList } = userSlice.actions;

export const fetchAllUsers = () => ( dispatch ) => {
  axios
    .get(`https://reqres.in/api/users?per_page=12`)
    .then((res) => {
        dispatch(setUserList(res.data.data))
    })
    .catch((err) => console.log(err));
};

export default userSlice.reducer;
