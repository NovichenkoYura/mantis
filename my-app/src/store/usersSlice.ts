import { endpoints } from './../api/endpoints';
import { instance } from './../api/apiConfig';
// import { loginThunk } from './usersSlice';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { instance } from '../api/apiConfig';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { notificationMessages } from '../constants/notificationMessages';
// import { endpoints } from '../api/endpoints';

interface User {
  email?: string;
  password?: string;
  token: '';
}

const initialState: User = {
  email: '',
  password: '',
  token: ''
};

export const loginThunk = createAsyncThunk(
  'users/loginUsers',
  async ({ email, password }: Pick<User, 'email' | 'password'>, { getState }: any) => {
    const response = await instance.get(endpoints.token);
    const data = await response.data;
    console.log('data', data);
    const dataUser = {} as User;
    data.forEach((profile: User) => {
      if (profile.email === email && profile.password === password) {
        dataUser.email = profile.email;
        dataUser.password = profile.password;
        dataUser.token = profile.token;
      }
    });
    if (!dataUser.email) {
      throw new Error('Required');
    }
    return dataUser;
    console.log('dataUser', dataUser);
  }
);

// export const loginThunk = createAsyncThunk(
//   'users/loginUsers',
//   async ({ email, password }: Pick<User, 'email' | 'password'>, { getState }: any) => {
//     const response = await instance.get(endpoints.users);
//     const data = await response.data;
//     const dataUser = {} as User;
//     data.forEach((profile: User) => {
//       if (profile.email === email && profile.password === password) {
//         dataUser.email = profile.email;
//         dataUser.password = profile.password;
//         dataUser.token = profile.token;
//         dataUser.firstName = profile.firstName;
//         dataUser.lastName = profile.lastName;
//         dataUser.id = profile.id;
//       }
//     });
//     if (!dataUser.email) {
//       throw new Error('Required');
//     }
//     return dataUser;
//   }
// );

const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isFetching = false;
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.isFetching = false;
    });
  },

  reducers: {}
});

// export const {  } = usersSlice.actions;
export default usersSlice.reducer;
