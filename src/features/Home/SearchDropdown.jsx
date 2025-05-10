import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiKey = "d8b81bdd49710817a86f48321797d51a";

function SearchDropdown({ query }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const handleMovieClick = (movie) => {
    navigate(`/details/${movie.id}`);
    setMovies("");
  };
  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <div className="absolute top-full left-0 z-20 mt-[2rem] flex max-h-[60vh] min-w-[20rem] overflow-y-auto rounded-2xl bg-[#222433]">
      <ul className="!pl-0">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex w-full cursor-pointer items-center gap-[2rem] rounded-2xl py-[1.5rem] transition-all duration-200 hover:bg-[#2d2f3e]"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "posterPlaceholder.png"
              }
              alt={`${movie.title} movie poster`}
              className="ml-4 h-[8rem] !rounded-2xl sm:h-[10rem]"
            />
            <span className="!text-[1.2rem] sm:!text-[1.5rem] md:!text-[1.8rem]">
              {movie.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchDropdown;
