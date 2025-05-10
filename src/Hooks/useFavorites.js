import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addFavorites,
  deleteFavorites,
  getFavorites,
} from "../utils/firestore";
import { toast } from "react-toastify";

export function useFavorites(userId, movie) {
  const queryClient = useQueryClient();
  const queryKey = ["favorites", userId];

  const { data: favoriteMovies = [], isLoading } = useQuery({
    queryKey,
    queryFn: () => getFavorites(userId),
    enabled: !!userId,
  });

  const isFavorite = favoriteMovies.some(
    (favMovie) => favMovie.id === movie.id,
  );

  const addMutation = useMutation({
    mutationFn: (movie) => addFavorites(userId, movie),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const removeMutation = useMutation({
    mutationFn: (movie) => deleteFavorites(userId, movie),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const toggleFavorite = () => {
    if (isFavorite) {
      removeMutation.mutate(movie);
      toast.success("Successfully removed from favorite list");
    } else {
      addMutation.mutate(movie);
      toast.success("Successfully added to favorite list");
    }
  };

  return {
    isFavorite,
    toggleFavorite,
    isLoading,
  };
}
