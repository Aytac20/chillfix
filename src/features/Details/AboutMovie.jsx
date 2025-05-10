function AboutMovie({ movie }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-xl p-4 text-[#c1c6cc] sm:p-6">
      <div className="text-[1.5rem] leading-relaxed tracking-wider sm:text-[2rem] md:text-2xl">
        <p>{movie.overview}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {movie.genres?.map((g) => (
          <span
            key={g.id}
            className="rounded-full bg-[#222433] px-4 py-2 text-[1.5rem] sm:text-[2rem]"
          >
            {g.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AboutMovie;
