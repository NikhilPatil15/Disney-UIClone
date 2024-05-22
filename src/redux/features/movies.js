import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommended:null,
    newDisney:null,
    orignals:null,
    trending:null
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommended = action.payload.recommended
            state.newDisney = action.payload.newDisney
            state.orignals = action.payload.orignals
            state.trending = action.payload.trending
        }
    }
})

export const { setMovies } = movieSlice.actions
export default movieSlice.reducer