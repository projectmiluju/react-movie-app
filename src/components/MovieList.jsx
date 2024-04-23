import MovieCard from "./MovieCard";

export default function MovieList({movies}) {

    return (
        <main>
            <section className="max-w-7xl mx auto py-7">
                <div className="flex justifty-normal flex-wrap">
                    {
                        movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)
                    }
                </div>     
            </section>
        </main>   
    );
}