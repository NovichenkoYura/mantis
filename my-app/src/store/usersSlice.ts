import { endpoints } from './../api/endpoints';
import { instance } from './../api/apiConfig';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { notificationMessages } from '../constants/notificationMessages';

interface User {
  login?: string;
  password?: string;
  token: '';
}

const initialState: User = {
  login: '',
  password: '',
  token: ''
};

export const loginThunk = createAsyncThunk(
  'users/loginUsers',
  async ({ login, password }: Pick<User, 'login' | 'password'>, { getState }: any) => {
    const response = await instance.get(endpoints.token);
    const data = await response.data;
    console.log('data', data);
    const dataUser = {} as User;
    data.forEach((profile: User) => {
      if (profile.login === login && profile.password === password) {
        dataUser.login = profile.login;
        dataUser.password = profile.password;
        dataUser.token = profile.token;
      }
    });
    if (!dataUser.login) {
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
    // builder.addCase(loginThunk.pending, (state) => {
    //   state.isFetching = true;
    // });
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
      state.login = action.payload.login;
      state.password = action.payload.password;
    });
    // builder.addCase(loginThunk.rejected, (state) => {
    //   state.isFetching = false;
    // });
  },

  reducers: {}
});

// export const {  } = usersSlice.actions;
export default usersSlice.reducer;
