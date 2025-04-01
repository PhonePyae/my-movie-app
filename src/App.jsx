import React, {useState, useEffect} from 'react'
import Search from "./components/search.jsx";
import Spinner from "./components/spinner.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchMovies = async() => {
        setIsLoading(true);
        setErrorMessage(null);
        try{
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS);

            if(!response.ok){
                throw new Error('Fail to fetch movies');
            }

            const data = await response.json();

            console.log(data);

            if(data.Response === 'False'){
                setErrorMessage(data.Error || 'Fail to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
        }catch(err){
            console.log(`Error fetching movies :  ${err}`);
            setErrorMessage('Error fetching movies. Please try again later.  ');
        }finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <div>
            <div className="pattern"/>

            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="Hero Banner" />
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without The Hassle</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                <section className="all-movies">
                    <h2 className="mt-[40px]">All Movies</h2>
                    {isLoading ? (
                       <Spinner />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map((movie) => (
                                <p key={movie.id} className="text-white">{movie.title}</p>
                            ))}
                        </ul>
                    )}
                </section>
            </div>

        </div>
    )
}
export default App
