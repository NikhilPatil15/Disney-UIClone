import { configureStore,  } from "@reduxjs/toolkit";
import userReducer from './features/user'
import movieReducer from './features/movies'

export  const store = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer
    }
})