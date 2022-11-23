import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  data: null,
  status: 'loading'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
    }
  }
  //   extraReducers: {}
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);
