import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersThunk, fetchUser, deleteUserThunk } from './operations';

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null, currentUser: null },
  extraReducers: builder => {
    builder
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload;
      }).addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
       }).addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.users = state.users.filter(el => el.id !== action.payload)
       })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const userReducer = userSlice.reducer;
