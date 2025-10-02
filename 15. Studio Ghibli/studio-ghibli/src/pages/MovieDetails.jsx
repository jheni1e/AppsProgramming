import { useLocation } from 'react-router-dom';
import './index.css';

export default function MovieDetails() {
    const location = useLocation();
    const { movie } = location.state || {};

    if (!movie) return <p>Movie not found!</p>

    return (
        <>
            <div className="m-10 bg-slate-200 text-black w-100 h-50 rounded-lg flex justify-center flex-col">
                <h2>{movie.title}</h2>
                <h3>{movie.original_title}</h3>
                <img src={movie.image} />
                <p>{movie.description}</p>
                <p>{movie.director}</p>
                <p>{movie.release_date}</p>
            </div>
        </>
    );
}