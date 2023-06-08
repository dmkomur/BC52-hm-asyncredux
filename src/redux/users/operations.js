import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://647dc90aaf984710854a53f2.mockapi.io/';

export const fetchUsersThunk = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'user/byId',
  async (id, { rejectWithValue }) => {
       try {
      const { data } = await axios.get(`users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteUserThunk = createAsyncThunk(
  'user/delById',
  async (id, { rejectWithValue }) => {
       try {
      await axios.delete(`users/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
export const addUserThunk = createAsyncThunk(
  'user/add',
  async (user, { rejectWithValue }) => {
       try {
      const newUser = await axios.post(`users/`, user);
      return newUser
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)