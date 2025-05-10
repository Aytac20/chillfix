import {
  faHeart as faHeartSolid,
  faEyeSlash as faEyeSlashSolid,
  faClock as faClockSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye as faEyeRegular,
  faHeart as faHeartRegular,
  faClock as faClockRegular,
} from "@fortawesome/free-regular-svg-icons";
import { useFavorites } from "../../Hooks/useFavorites";
import { useWatchedMovies } from "../../Hooks/useWatchedMovies";
import { Spinner } from "react-bootstrap";
import { useWatchlist } from "../../Hooks/useWatchlist";

export default function ActionButtons({ movie, userId }) {
  const {
    isFavorite,
    toggleFavorite,
    isLoading: favLoading,
  } = useFavorites(userId, movie);
  const {
    isWatched,
    toggleWatched,
    isLoading: watchedLoading,
  } = useWatchedMovies(userId, movie);
  const {
    isWatchlist,
    toggleWatchlist,
    isLoading: watchlistLoading,
  } = useWatchlist(userId, movie);

  return (
    <div className="flex gap-3 justify-evenly sm:justify-start w-full">
      <button
        onClick={toggleFavorite}
        disabled={favLoading}
        className="px-[2rem] py-[1rem] flex items-center justify-center bg-[#222433] !rounded-2xl cursor-pointer hover:bg-[#2d3044] transition-all duration-200"
      >
        {favLoading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <FontAwesomeIcon
            icon={isFavorite ? faHeartSolid : faHeartRegular}
            className="text-4xl  sm:text-5xl"
          />
        )}
      </button>

      <button
        onClick={toggleWatched}
        disabled={watchedLoading}
        className="px-[2rem] py-[1rem] flex items-center justify-center bg-[#222433] !rounded-2xl cursor-pointer hover:bg-[#2d3044] transition-all duration-200"
      >
        {watchedLoading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <FontAwesomeIcon
            icon={isWatched ? faEyeRegular : faEyeSlashSolid}
            className="text-4xl  sm:text-5xl"
          />
        )}
      </button>

      <button
        onClick={toggleWatchlist}
        disabled={watchlistLoading}
        className="px-[2rem] py-[1rem] flex items-center justify-center bg-[#222433] !rounded-2xl cursor-pointer hover:bg-[#2d3044] transition-all duration-200"
      >
        {watchlistLoading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <FontAwesomeIcon
            icon={isWatchlist ? faClockSolid : faClockRegular}
            className="text-4xl sm:text-5xl"
          />
        )}
      </button>
    </div>
  );
}
