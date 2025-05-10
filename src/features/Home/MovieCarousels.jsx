import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

function MovieCarousels({ movies }) {
  const navigate = useNavigate();
  const handleMovieClick = (movie) => {
    navigate(`/details/${movie.id}`);
  };
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <Carousel indicators={false} className="rounded-2xl">
        {movies.map((movie) => (
          <Carousel.Item
            key={movie.id}
            className="cursor-pointer"
            interval={8000}
            onClick={() => handleMovieClick(movie)}
            aria-label={`Click to view details for ${movie.title}`}
          >
            <div className="relative h-[65vh]">
              <img
                className="h-full w-full rounded-2xl object-cover"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title}
              />
              <div className="bg-opacity-50 absolute inset-0 z-0 rounded-2xl bg-black" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousels;
