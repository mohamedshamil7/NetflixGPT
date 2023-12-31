interface api{
  method:'GET',
  headers:{
    accept: 'application/json',
    Authorization:string
  }
}


export const NetflixLogoURL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const authbgURL = "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const netflixmob = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"

export const API_OPTIONS : api= {

        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjA3Yzc2NzgwMzNkYzY3MjRhOTc4NmFmNzE2YjQzOSIsInN1YiI6IjY0N2M0NDE0MTc0OTczMDBkZTY2YzJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TOu08ijqtkF_tDatViWnT6MduA35RhYQX7bfEmUySc0'
        }
}

export const genere={
now_playing_movies : 'https://api.themoviedb.org/3/movie/now_playing',
popular_movies : 'https://api.themoviedb.org/3/movie/popular',
 top_rated_movies :'https://api.themoviedb.org/3/movie/top_rated',
 upcoming_movies : 'https://api.themoviedb.org/3/movie/upcoming',

}





export const  get_movie_vedios = 'https://api.themoviedb.org/3/movie/'

export const youtube_vedio_embeded = "https://www.youtube.com/embed/"

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const openai_api_key = process.env.REACT_APP_OPENAI_KEY