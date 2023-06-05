import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://647dc90aaf984710854a53f2.mockapi.io/';

export const fetchUsersThunk = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
