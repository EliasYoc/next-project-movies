import Poster from "@/app/_components/ui/Poster";
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { TheShowImage } from "@/app/_services/tmdb/types";

export default async function PostersPanel({
  postersMatrix,
  columnsLength,
}: {
  postersMatrix: TheShowImage[][];
  columnsLength: number;
}) {
  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  return (
    <section className="grid gap-2">
      {postersMatrix.map((row, index) => (
        <div
          key={index}
          className={`grid gap-2 grid-cols-[repeat(${columnsLength},1fr)]`}
        >
          {row.map((poster) => (
            <Poster
              layoutClassName="w-auto"
              key={poster.file_path}
              src={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}${poster.file_path}`}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
