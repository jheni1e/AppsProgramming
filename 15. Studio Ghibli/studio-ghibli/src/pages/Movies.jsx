import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css';
import sticker1 from "../assets/sticker1.gif"
import sticker2 from "../assets/sticker2.gif"
import sticker3 from "../assets/sticker3.gif"

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
        console.log(response.data);
    }

    const openMovieDetails = (movie) => {
        navigate('/movie', { state: { movie } });
    }

    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-col mr-15">
                    <img src={sticker1} className="w-60 h-60 mt-10 mb-40" />
                    <img src={sticker2} className="w-60 h-60" />
                </div>
                <div className="flex flex-col">
                    <h1>Movies</h1>
                    <ul className="grid grid-cols-2 mt-10">
                        {movies.map(movie => (
                            <li
                                key={movie.id}
                                onClick={(() => openMovieDetails(movie))}
                                style={{ cursor: 'pointer', marginBottom: '8px' }}
                                className="font-mono text-lg m-2">
                                ▸ {movie.title.replace("'", "")}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleNavigate} className="text-2xl mt-7 w-50 flex self-center justify-center">Back</button>
                </div>
                <img src={sticker3} className="w-60 h-60 mt-50 ml-15" />
            </div>
        </>
    );
}