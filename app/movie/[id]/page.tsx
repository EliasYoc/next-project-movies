import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { getMovieById } from "@/app/_services/tmdb/movies";
import Cover from "../_components/cover";
import MovieRecommendations from "../_components/movieRecommendations";
import PictureTabs from "@/app/movie/[id]/_components/pictureTabs";
import { Suspense } from "react";

export default async function SelectedMovie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovieById(id);

  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });
  const { backdrop_path, title, overview } = movie;
  console.log(tmdbDetailsData);
  return (
    <>
      <Cover
        layoutClassName="flex items-end"
        movieTitle={title}
        portraitSrc={
          !backdrop_path
            ? ""
            : `${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.backdrop_sizes[1]}${backdrop_path}`
        }
      >
        <div className="max-w-[850px] mx-auto">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p>{overview}</p>
        </div>
      </Cover>

      <div className="max-w-[850px] m-auto">
        <MovieRecommendations title="Recomendaciones" movieId={id} />

        <Suspense fallback={<div>Loading tabs...</div>}>
          <PictureTabs id={id} mediaType="movie" />
        </Suspense>
      </div>
    </>
  );
}
