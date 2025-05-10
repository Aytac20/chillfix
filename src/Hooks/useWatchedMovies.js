import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addWatchedMovies,
  deleteWatched,
  getWatchedMovies,
} from "../utils/firestore";
import { toast } from "react-toastify";

export function useWatchedMovies(userId, movie) {
  const queryClient = useQueryClient();
  const queryKey = ["watchedMovies", userId];

  const { data: watchedMovies = [], isLoading } = useQuery({
    queryKey,
    queryFn: () => getWatchedMovies(userId),
    enabled: !!userId,
  });

  const isWatched = watchedMovies.some(
    (watchedMovie) => watchedMovie.id === movie.id,
  );

  const addMutation = useMutation({
    mutationFn: (movie) => addWatchedMovies(userId, movie),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const removeMutation = useMutation({
    mutationFn: (movie) => deleteWatched(userId, movie),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const toggleWatched = () => {
    if (isWatched) {
      removeMutation.mutate(movie);
      toast.success("Successfully removed from watched list");
    } else {
      addMutation.mutate(movie);
      toast.success("Successfully added to watched list");
    }
  };

  return {
    isWatched,
    toggleWatched,
    isLoading,
  };
}
