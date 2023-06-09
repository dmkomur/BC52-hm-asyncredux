import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

const token = {
    set (token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
    unset () {axios.defaults.headers.common.Authorization = ""}
}



export const registerThunk = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('users/signup', userData);
            token.set(data.token)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const loginThunk = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('users/login', userData);
            token.set(data.token)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            axios.post('/users/logout')
            token.unset()
        } catch (error) {
        return rejectWithValue(error.message)

        }
    }
)

