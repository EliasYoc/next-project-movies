//https://developer.themoviedb.org/reference/movie-recommendations
import ShowCard from "@/app/_components/ui/ShowCard";
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { getMovieRecomendations } from "@/app/_services/tmdb/movies";

export default async function MovieRecommendations({
  title,
  className,
  movieId,
}: {
  title?: string;
  className?: string;
  movieId: string;
}) {
  const movieData = await getMovieRecomendations(movieId);

  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  return (
    <section className={`movie-list ${className}`}>
      {title && <h2 className="text-3xl font-semibold">{title}</h2>}
      <div className="scrollbar-hidden flex overflow-x-scroll gap-2">
        {movieData.results.map((movie) => (
          <ShowCard
            navigateTo={`/movie/${movie.id}`}
            key={movie.id}
            title={movie.title}
            src={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
}
