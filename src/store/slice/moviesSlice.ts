import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVedio :{},
        popularMovies:null,
        topRatedMovies : null,
        upComingMovies : null
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies :(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies :(state,action)=>{
            state.upComingMovies = action.payload;
        },
        addTrailerVedio : (state,action)=>{
            state.trailerVedio = action.payload
        }
    }

})

export const {addNowPlayingMovies,addTrailerVedio,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer
