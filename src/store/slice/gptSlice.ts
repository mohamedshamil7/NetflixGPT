import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch :false,
        movieNames:[],
        movieResults: []
    },
    reducers:{
        toggleGptSearchView :(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult :(state,action)=>{
            const{movieNames , movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {toggleGptSearchView,addGptMovieResult} = gptslice.actions
export default gptslice.reducer