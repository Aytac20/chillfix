import { useNavigate, useSearchParams } from "react-router-dom";
import Movie from "./Movie";
import { getMovies } from "../../services/apiMovies";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../ui/Loader";
import Search from "./Search";
import Filter from "./Filter";
import { useState } from "react";
import MovieCarousels from "./MovieCarousels";
import Menu from "../../ui/Menu";

function MovieList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [genre, setGenre] = useState("");
  const currentPage = Number(searchParams.get("page")) || 1;
  const [minRating, setMinRating] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", currentPage, genre, minRating],
    queryFn: () => getMovies(currentPage, genre, minRating),
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const { movies, totalPages } = data;

  return (
    <div className="flex w-full flex-col gap-[2rem] p-[2rem]">
      <div className="flex w-full items-center justify-between gap-[1rem]">
        <div className="lg:hidden">
          <Menu />
        </div>
        <Search />
        <Filter setGenre={setGenre} setMinRating={setMinRating} />
      </div>
      <div className="grid gap-[2rem]">
        <div className="hidden lg:block">
          <MovieCarousels movies={movies} />
        </div>
        <ul className="grid w-full grid-cols-2 justify-items-center gap-[3rem] p-0 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <li key={movie.id} className="group relative cursor-pointer">
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => navigate(`?page=${page}`)}
      />
    </div>
  );
}

export default MovieList;
