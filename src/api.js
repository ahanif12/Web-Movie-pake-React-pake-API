import axios from 'axios'
const Key = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL
export const getDataMovieList = async() => {
    const movieList = await axios.get(`${baseUrl}/movie/popular?api_key=${Key}`)
   return movieList.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${Key}`)
    return search.data
}