// https://developer.themoviedb.org/reference/discover-movie
import ShowCard from "../_components/ui/ShowCard";
import {
  getTmdbConfiguration,
  TmdbConfigDetails,
} from "../_services/tmdb/configuration";
import {
  getMovieList,
  IDiscoverMoviesSeries,
} from "../_services/tmdb/discover";

export default async function movieList() {
  const movieRes = await getMovieList();
  const movieData = (await movieRes.json()) as IDiscoverMoviesSeries;

  const tmbdDetailsRes = await getTmdbConfiguration({ which: "details" });
  const tmdbDetailsData = (await tmbdDetailsRes.json()) as TmdbConfigDetails;

  return (
    <div className="scrollbar-hidden flex overflow-x-scroll gap-2">
      {movieData.results.map((movie) => (
        <ShowCard
          key={movie.id}
          title={movie.title}
          src={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}${movie.poster_path}`}
        />
      ))}
    </div>
  );
}
