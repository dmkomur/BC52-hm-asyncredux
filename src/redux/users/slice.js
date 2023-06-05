import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersThunk } from './operations';

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchUsersThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload;
          state.isLoading = false;
                    state.error = null;

      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
          state.error = action.payload;
                  state.isLoading = false;

      });
  },
});

export const userReducer = userSlice.reducer;
