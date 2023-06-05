import { userReducer } from "./users/slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        users: userReducer
    }
})