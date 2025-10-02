import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

export default function MovieDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie } = location.state || {};

    if (!movie) return <p>Movie not found!</p>

    const handleNavigate = () => {
        navigate("/movies");
    }

    return (
        <>
            <div className="m-10 flex justify-center flex-col">
                <h2 className="mt-10 mb-5 text-5xl font-bold">{movie.title.replace("'", "")}</h2>
                <h3 className="mb-5 text-2xl">{movie.original_title}</h3>
                <img src={movie.image} alt={movie.title} className="flex self-center mb-5 h-100 w-80"/>
                <p className="flex self-center mb-5 w-120">{movie.description}</p>
                <p className="mb-2 text-2xl">Directed by {movie.director}</p>

                <button onClick={handleNavigate} className="text-2xl mt-7 w-50 flex self-center justify-center">Back</button>
            </div>
        </>
    );
}