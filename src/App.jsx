import { useEffect, useState } from "react";
import MovieFooter from "./components/MovieFooter"
import MovieHeader from "./components/MovieHeader"
import MovieList from "./components/MovieList"

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData('now_playing')
  }, []);

  const fetchMovieData = (id) => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results);
        setMovies(response.results);
      })
      .catch(err => console.error(err));
  };

  const handleMovies = (id) =>{
    console.log(id);
    fetchMovieData(id);
  };
  
  return (
    <>
      <MovieHeader onMovieData={handleMovies}/>
      <MovieList movies={movies}/>
      <MovieFooter/>
    </>
  )
}

export default App