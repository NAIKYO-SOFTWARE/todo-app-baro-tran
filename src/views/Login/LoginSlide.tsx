import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  delay: number;
  email: string;
  password: string;
}

const initialState: LoginState = {
  delay: 0,
  email: "",
  password: "",
};

const loginSlide = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSaga: (state, action: PayloadAction<LoginState>) => {
      state.delay = action.payload.delay
    },
    setUse: (state, action: PayloadAction<LoginState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
   
  },
});

const { actions , reducer} = loginSlide
export const { setUse, loginSaga } = actions
export default reducer ;

