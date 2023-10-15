import { useEffect, useState } from 'react';
import './App.css';
import {getDataMovieList, searchMovie} from './api'

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getDataMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])
  console.log(popularMovies);

  const PopularList = () => {
    return popularMovies.map((movie, i) => {
      return(
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img className='movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <div className="movie-date">release :{movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async(q) => {
    if (q.length > 3) {
      const querySearch = await searchMovie(q)
      setPopularMovies(querySearch.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ABU MOVIE MANIA</h1>
        <input 
              placeholder='Cari film kesayangan ...' 
              type="text" 
              className='movie-search' 
              onKeyUp={({target}) => search(target.value)} 
              />
          <div className="movie-container">
            <PopularList />
          </div>
      </header>
    </div>
  );
}

export default App;
