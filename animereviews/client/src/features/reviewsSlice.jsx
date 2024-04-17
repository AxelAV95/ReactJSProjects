import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";


export const fetchReviews = createAsyncThunk(
    "/reviews/fetchReviews",
    async () => {
        const { data } = await axios.get("/api/reviews");
        return data;
    }
);

export const deleteReview = createAsyncThunk("/reviews/deleteReview", async(id) =>{
    await axios.delete(`api/reviews/${id}`)
})

const initialState = {
    reviews: null,
    status: "loading",
};

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    extraReducers: (builder) =>{
        builder
            .addCase(fetchReviews.pending, (state) =>{
                state.reviews = []
                state.status = "loading"
            })
            .addCase(fetchReviews.rejected, (state) =>{
                state.reviews = []
                state.status = "error"
            })

            .addCase(fetchReviews.fulfilled, (state,action)=>{
                state.reviews = action.payload
                state.status = "success"
            })

            .addCase(deleteReview.fulfilled, (state, action) =>{
                state.reviews = state.reviews.filter((review) => review._id !== action.meta.arg)
            })
    }
})


export default reviewsSlice.reducer