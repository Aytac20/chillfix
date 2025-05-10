const apiKey = "d8b81bdd49710817a86f48321797d51a";

export async function getMovies(page = 1, genre = "") {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;

  if (genre) {
    url += `&with_genres=${genre}`;
  }

  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch movies");

  const data = await res.json();

  return {
    movies: data.results.slice(0, 14),
    totalPages: data.total_pages,
  };
}

export async function getMovieById(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
  );

  if (!res.ok) throw new Error("Failed to fetch movie details");

  const data = await res.json();
  return data;
}

export async function getMovieTrailer(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
  );

  if (!res.ok) throw new Error("Failed to fetch movie trailer");

  const data = await res.json();

  const trailer = data.results.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube" &&
      video.official === true,
  );

  return trailer
    ? trailer.key
    : data.results.find((v) => v.site === "YouTube")?.key;
}
