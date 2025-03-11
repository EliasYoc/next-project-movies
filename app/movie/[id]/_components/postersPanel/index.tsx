"use client";
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { TheShowImage } from "@/app/_services/tmdb/types";
import VirtualizedItems from "./VirtualizedItems";

export default function PostersPanel({
  postersMatrix,
  columnsLength,
  tmdbDetailsData,
}: {
  postersMatrix: TheShowImage[][];
  columnsLength: number;
  tmdbDetailsData: Awaited<ReturnType<typeof getTmdbConfiguration>>;
}) {
  return (
    <>
      <VirtualizedItems
        windowVirtualizerOptions={(element) => ({
          count: postersMatrix.length,
          estimateSize: () => 415,
          overscan: 2,
          scrollMargin: element ? element.offsetTop : 0,
        })}
        list={postersMatrix}
        columnsLength={columnsLength}
        srcUrlBase={`${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}`}
      />
    </>
  );
}
