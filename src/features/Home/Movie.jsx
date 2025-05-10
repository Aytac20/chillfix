import { useNavigate } from "react-router-dom";
import "./Movie.css";
function Movie({ movie }) {
  const navigate = useNavigate();
  const handleMovieClick = (movie) => {
    navigate(`/details/${movie.id}`);
  };
  return (
    <div className="movie-container">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/posterPlaceholder.png"
        }
        alt={`${movie.title} movie poster`}
        className="movie-poster"
        width={500}
        height={750}
      />

      <div className="movie-overlay" onClick={() => handleMovieClick(movie)}>
        <div className="flex h-full w-full items-end justify-between p-[1rem] text-[1.3rem]">
          <span className="text-gray-300">
            {new Date(movie.release_date).getFullYear()}
          </span>
          <span className="font-bold text-yellow-500">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
