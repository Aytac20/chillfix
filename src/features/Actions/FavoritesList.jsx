import { useQuery } from "@tanstack/react-query";

import { getFavorites } from "../../utils/firestore";
import Movie from "../Home/Movie";
import Error from "../../ui/Error";
import { useAuth } from "../../Hooks/useAuthActions";
import Menu from "../../ui/Menu";
import Loader from "../../ui/Loader";

const FavoritesList = () => {
  const { currentUser } = useAuth();
  const userId = currentUser?.uid;
  const {
    data: favorites = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["favorites", userId],
    queryFn: () => getFavorites(userId),
    enabled: !!userId,
  });

  const totalFavFilms = favorites.length;

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

      {totalFavFilms === 0 ? (
        ""
      ) : (
        <h2 className="my-[2rem] mb-4 text-2xl font-bold tracking-wider !text-[#9fa0ad]">
          Your Movies : {totalFavFilms}
        </h2>
      )}

      {favorites.length === 0 ? (
        <div className="flex h-[40rem] w-full items-center justify-center text-[1.5rem] !text-[#9fa0ad]">
          <span>
            No films available.
            <br /> Start adding some!
          </span>
        </div>
      ) : (
        <ul className="grid w-full grid-cols-2 justify-center gap-4 p-[2rem] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {favorites.map((movie) => (
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
};

export default FavoritesList;
