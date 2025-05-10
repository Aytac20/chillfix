import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../../services/apiMovies";
import Trailer from "./Trailer";
import AboutMovie from "./AboutMovie";
import MovieBackDrop from "./MovieBackDrop";
import Loader from "../../ui/Loader";
import ActionButtons from "./ActionButtons";
import { CiPlay1 } from "react-icons/ci";
import GoBackButton from "../../ui/GoBackButton";
import { useAuth } from "../../Hooks/useAuthActions";

function MovieDetails() {
  const { movieId } = useParams();
  const { currentUser } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieById(movieId),
  });

  if (isLoading) return <Loader />;
  if (error || !movie) return <p>Error loading movie details.</p>;

  return (
    <div className="relative">
      {movie.backdrop_path ? (
        <div className="rounded-[2rem] bg-[#1d1c2c] opacity-70">
          <MovieBackDrop movie={movie} />
        </div>
      ) : (
        <div className="mt-[20rem]"></div>
      )}
      <GoBackButton />
      <div className="sm:p-[5rem] sm:pt-[10rem]">
        <div className="grid translate-y-[-5rem] grid-rows-2 p-[1rem] sm:translate-y-[-20rem] sm:grid-rows-1 lg:translate-y-[-32rem]">
          <div className="grid w-full grid-cols-[2fr_1.4fr] gap-[1rem] sm:grid-cols-1">
            <div className="items-centers flex flex-col justify-center px-[1rem]">
              <p className="text-[2.4rem] leading-relaxed tracking-wider text-white sm:text-[3rem] lg:text-[5rem]">
                {movie.title}
              </p>
              <div className="flex justify-between">
                <p className="text-[1.5rem] text-[#cccdcf] lg:text-[2rem]">
                  {new Date(movie.release_date).getFullYear()}
                  <span className="text-[#4b5466]"> &bull; </span>
                  {movie.runtime} mins
                </p>

                <p className="text-[1.5rem] text-amber-400 lg:text-[2rem]">
                  <strong>{movie.vote_average.toFixed(1)}</strong>/10{" "}
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 pt-2 sm:!gap-[3rem]">
                <ActionButtons movie={movie} userId={currentUser.uid} />
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 !rounded-2xl bg-[#222433] !px-4 py-2 !text-[1.5rem] tracking-wider text-[#cccdcf] transition-all duration-300 hover:bg-[#2d3044] sm:!text-[2rem]"
                >
                  <span>
                    <CiPlay1 />
                  </span>
                  Trailer
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center sm:hidden">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/posterPlaceholder.png"
                }
                alt={`${movie.title} movie poster`}
                className="h-[18rem] border-[1px] border-[#3b3e53] shadow-2xl"
              />
            </div>
          </div>
          <AboutMovie
            movie={movie}
            onSetModal={setOpenModal}
            openModal={openModal}
          />
        </div>
      </div>

      {openModal && (
        <Trailer
          movieId={movie.id}
          onSetModal={setOpenModal}
          openModal={openModal}
        />
      )}
    </div>
  );
}

export default MovieDetails;
