import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import openai from '../openAi/openAiConfig';

import { addGptMovieResult } from "../../store/slice/gptSlice";
export const GetGptResults =async (searchText : string)=>{
const gptQuery =
" Act as a Movie Recomentation System and suggest some movies for the query :" +
searchText+
". only give me 10 Movies comma seperated like the example result given ahead . Exmaple result : Movie1 ,Movie2 ,Movie3 ,Movie4 ,Movie5 ,Movie6 ,Movie7 ,Movie8 ,Movie9 ,Movie10 ,";
  // const gptResults = await openai.chat.completions.create({
  //           messages:[{role: "user", content:gptQuery}],
  //           model:"gpt-3.5-turbo"
  //       })
        // console.log(gptResults.choices[0]?.message?.content)

        const gptResults = "Kunjikoonan, Meesa Madhavan, Chanthupottu, Kunjikoonan, Tenkasi Pattanam, Pandipada, CID Moosa, Kalyanaraman, Pappy Appacha, Mayamohini."
        // const gptMovies = gptResults.choices[0]?.message?.content?.split(",")
        const gptMovies = gptResults.split(",")
    return gptMovies
}

// export default useGetGptResults

export const useSearchMovies=()=>{
  const dispatch = useDispatch()
  const searchMovies =async (searchText: string) => {
    const gptMovies = await GetGptResults(searchText)
    if(!gptMovies) return null
    const promiseArray = gptMovies.map((movie)=> SearchMoviesInTmdb(movie))
    const tmdbResults = await  Promise.all(promiseArray)
    
    dispatch(addGptMovieResult({movieNames: gptMovies,movieResults : tmdbResults}))
  }
  // console.log(tmdbResults)
  return {searchMovies}
}

export const SearchMoviesInTmdb =async (name:string)=>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+name, API_OPTIONS)
  const json = await data.json()
  return json.results
}