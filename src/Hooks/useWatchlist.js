import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addWatchlist,
  deleteWatchlistMovie,
  getWatchlist,
} from "../utils/firestore";
import { toast } from "react-toastify";

export function useWatchlist(userId, movie) {
  const queryClient = useQueryClient();
  const queryKey = ["watchlist", userId];
  const { data: watchlist = [], isLoading } = useQuery({
    queryKey,
    queryFn: () => getWatchlist(userId),
    enabled: !!userId,
  });
  const isWatchlist = watchlist.some(
    (watchlistMovie) => watchlistMovie.id === movie.id,
  );
  const addMutation = useMutation({
    mutationFn: (movie) => addWatchlist(userId, movie),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  const removeMutation = useMutation({
    mutationFn: (movie) => deleteWatchlistMovie(userId, movie),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  const toggleWatchlist = () => {
    if (isWatchlist) {
      removeMutation.mutate(movie);
      toast.success("Successfully removed from watchlist");
    } else {
      addMutation.mutate(movie);
      toast.success("Successfully added to watclist");
    }
  };
  return {
    isWatchlist,
    toggleWatchlist,
    isLoading,
  };
}
