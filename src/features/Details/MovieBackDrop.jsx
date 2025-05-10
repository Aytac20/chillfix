import styles from "./MovieDetails.module.css";

function MovieBackDrop({ movie }) {
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div
      className={`${styles.heroContainer} relative h-[35vh] w-auto bg-cover bg-center sm:h-[50vh] md:h-[70vh] lg:rounded-[2rem]`}
      style={{
        backgroundImage: backdropUrl ? `url(${backdropUrl})` : "none",
      }}
    >
      <div
        className={`${styles.gradientOverlay} absolute inset-0 lg:rounded-[2rem]`}
      />
    </div>
  );
}

export default MovieBackDrop;
