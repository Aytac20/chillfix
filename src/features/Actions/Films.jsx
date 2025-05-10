import { useQuery } from "@tanstack/react-query";
import { getWatchedMovies } from "../../utils/firestore";
import Movie from "../Home/Movie";
import Error from "../../ui/Error";
import { useAuth } from "../../Hooks/useAuthActions";
import Menu from "../../ui/Menu";
import Loader from "../../ui/Loader";

export default function Films() {
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;
  const {
    data: watched = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["watchedMovies", userId],
    queryFn: () => getWatchedMovies(userId),
    enabled: !!userId,
  });
  const totalFilms = watched.length;
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="h-screen py-[2rem]">
      <div className="px-[3.5rem] lg:hidden">
        <Menu />
      </div>
      {totalFilms === 0 ? (
        ""
      ) : (
        <h2 className="mb-4 text-2xl font-bold tracking-wider !text-[#9fa0ad]">
          Your Movies : {totalFilms}
        </h2>
      )}

      {watched.length === 0 ? (
        <div className="flex h-[40rem] w-full items-center justify-center text-[1.5rem] !text-[#9fa0ad]">
          <span>
            No films available.
            <br /> Start adding some!
          </span>
        </div>
      ) : (
        <ul className="grid w-full grid-cols-2 justify-center gap-4 p-[2rem] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {watched.map((movie) => (
            <li
              key={movie.id}
              className="group relative grid cursor-pointer justify-center"
            >
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
