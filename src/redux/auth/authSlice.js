import { registerThunk, logoutThunk } from "./authOperations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoading: false,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoading = false;
            state.error = '';

        }).addCase(logoutThunk.fulfilled, (state) => {
            state.token = null;
            state.user = initialState;
            state.isLoading = false;
            state.error = '';
        })
    }
}

)

export const authReducer = authSlice.reducer;