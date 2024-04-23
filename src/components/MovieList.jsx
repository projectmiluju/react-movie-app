import MovieCard from "./MovieCard";

export default function MovieList() {

    return (
        <main>
            <section className="max-w-7xl mx auto py-7">
                <div className="flex justifty-normal flex-wrap">
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </div>     
            </section>
        </main>   
    );
}