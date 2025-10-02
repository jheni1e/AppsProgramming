import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMovies();
    }, []);

    const handleNavigate = () => {
        navigate("/");
    }

    const getMovies = async () => {
        const response = await axios.get("https://ghibliapi.vercel.app/films");
        setMovies(response.data);
    }

    const openMovieDetails = () => {
        navigate('/movie', { state: { movie } });
    }

    return (
        <>
            <h1>Movies</h1>
            <ul className="grid grid-cols-2 divide-dashed divide-gray-400">
                {movies.map(movie => (
                    <li
                        key={movie.id}
                        onClick={(() => openMovieDetails(movie))}
                        style={{ cursor: 'pointer', marginBottom: '8px' }}
                        className="font-mono text-lg border-1 border-solid">
                        ▸ {movie.title.replace("'", "")}
                    </li>
                ))}
            </ul>
            <button onClick={handleNavigate} className="text-2xl mt-7">Back</button>
        </>
    );
}