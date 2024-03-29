import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOut: (state, action) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;



export default userSlice.reducer;
