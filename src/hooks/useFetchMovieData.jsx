import { useEffect, useState } from "react";
export default function useFetchMovieData(movieType) {

    const [movies, setMovies] = useState([]);

    const fetchMovieData = (id) => {
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        let url = ``;
        if (['now_playing', 'popular', 'top_rated'].includes(id)){
        url = `https://api.themoviedb.org/3/movie/${id}?language=ko`
        } else {
        url = `https://api.themoviedb.org/3/search/movie?query=${id}&language=ko`
        }

        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
        }
        };
        
        fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            setMovies(response.results);
        })
        .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchMovieData(movieType)
    }, [movieType]);

    return movies;

}