import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        trailerVedio :{},
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies : null,
        upComingMovies : null,
        showMoreMovies : false,
        showMoreMoviesGenere:null
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
        },
        togeleShowMoreMovies : (state)=>{
            state.showMoreMovies= !state.showMoreMovies
        },
        addshowMoreMoviesGenere: (state,action)=>{
            state.showMoreMoviesGenere = action.payload
        }
    }

})

export const {
  addNowPlayingMovies,
  addTrailerVedio,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  togeleShowMoreMovies,
  addshowMoreMoviesGenere
} = moviesSlice.actions;
export default moviesSlice.reducer
