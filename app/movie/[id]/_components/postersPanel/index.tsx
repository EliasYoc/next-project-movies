import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { TheShowImage } from "@/app/_services/tmdb/types";
import VirtualizedItems from "./VirtualizedItems";

export default async function PostersPanel({
  postersMatrix,
  columnsLength,
}: {
  postersMatrix: TheShowImage[][];
  columnsLength: number;
}) {
  const tmdbDetailsData = await getTmdbConfiguration({ which: "details" });

  return (
    <>
      <VirtualizedItems
        list={postersMatrix}
        columnsLength={columnsLength}
        srcUrlBase={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}`}
      />
    </>
  );
}
