import FavoritesList from "../features/Actions/FavoritesList";
import Watchlist from "../features/Actions/Watchlist";
import MovieDetails from "../features/Details/MovieDetails";
import Films from "../features/Actions/Films";
import MovieList from "../features/Home/MovieList";
import Error from "../ui/Error";

export const routes = [
  {
    path: "/",
    element: <MovieList />,
    errorElement: <Error />,
  },

  {
    path: "/details/:movieId",
    element: <MovieDetails />,
    errorElement: <Error />,
  },
  {
    path: "/favorites",
    element: <FavoritesList />,
    errorElement: <Error />,
  },
  {
    path: "/watchlist",
    element: <Watchlist />,
    errorElement: <Error />,
  },
  {
    path: "/films",
    element: <Films />,
    errorElement: <Error />,
  },
];
