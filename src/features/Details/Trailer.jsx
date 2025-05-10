import React from "react";
import { getMovieTrailer } from "../../services/apiMovies";
import { useQuery } from "@tanstack/react-query";

function Trailer({ movieId, onSetModal }) {
  const {
    data: trailerKey,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieTrailer", movieId],
    queryFn: () => getMovieTrailer(movieId),
  });

  if (isLoading)
    return <p className="text-white text-center mt-6">Loading trailer...</p>;

  if (error || !trailerKey)
    return <p className="text-white text-center mt-6">No trailer available.</p>;

  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
      <div className="relative w-full max-w-[80rem] aspect-video rounded-xl overflow-hidden shadow-lg m-[2rem]">
        <button
          onClick={() => onSetModal(false)}
          className="absolute top-4 right-3 text-white cursor-pointer"
        >
          <span className="text-5xl">&times;</span>
        </button>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer;
