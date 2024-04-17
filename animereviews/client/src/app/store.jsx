import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import reviewsReducer from "../features/reviewsSlice"
const store = configureStore({
    reducer:{
        auth: authReducer,
        reviews: reviewsReducer
    }
})

export default store