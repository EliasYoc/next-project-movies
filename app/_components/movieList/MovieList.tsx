// https://developer.themoviedb.org/reference/discover-movie
import Poster from "../ui/Poster";
import { getTmdbConfiguration } from "../../_services/tmdb/configuration";
import { getMovieList } from "../../_services/tmdb/discover";

export default async function MovieList({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  const movieData = await getMovieList();

  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  return (
    <section className={`movie-list ${className}`}>
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <div className="scrollbar-hidden flex overflow-x-scroll gap-2">
        {movieData.results.map((movie) => (
          <Poster
            navigateTo={`/movie/${movie.id}`}
            key={movie.id}
            title={!movie.poster_path ? movie.title : null}
            src={
              !movie.poster_path
                ? "/assets/image-not-available.jpg"
                : `${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}${movie.poster_path}`
            }
          />
        ))}
      </div>
    </section>
  );
}
