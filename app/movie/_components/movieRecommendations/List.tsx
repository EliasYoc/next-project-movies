"use client";

import Poster from "@/app/_components/ui/Poster";
import VirtualizedItems from "@/app/_components/virtualizedItems";
import { DiscoverMovies, TmdbDetailsConfig } from "@/app/_services/tmdb/types";
import { useRef } from "react";

export default function List({
  movieData,
  tmdbDetailsData,
}: {
  movieData: DiscoverMovies;
  tmdbDetailsData: TmdbDetailsConfig;
}) {
  const refList = useRef(null);
  const srcUrlBase = `${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[1]}`;
  return (
    <VirtualizedItems
      virtualizerOptions={{
        count: movieData.results.length,
        getScrollElement: () => refList.current,
        estimateSize: () => 135,
        horizontal: true,
        overscan: 2,
        gap: 8,
      }}
      renderChildren={(virtualizer) => (
        <div
          ref={refList}
          className="virtual-container border-2 border-red-400 overflow-y-scroll scrollbar-hidden"
          style={{ height: "205px" }}
        >
          <div
            className="relative h-full"
            style={{ width: `${virtualizer.getTotalSize()}px` }}
          >
            {virtualizer.getVirtualItems().map((virtualColumn) => {
              return (
                <div
                  key={virtualColumn.index}
                  className="absolute top-0 left-0"
                  style={{
                    // width: `${virtualColumn.size}px`,
                    transform: `translateX(${virtualColumn.start}px)`,
                  }}
                >
                  <Poster
                    navigateTo={`/movie/${
                      movieData.results[virtualColumn.index].id
                    }`}
                    title={
                      !movieData.results[virtualColumn.index].poster_path
                        ? movieData.results[virtualColumn.index].title
                        : null
                    }
                    src={
                      !movieData.results[virtualColumn.index].poster_path
                        ? "/assets/image-not-available.jpg"
                        : `${srcUrlBase}${
                            movieData.results[virtualColumn.index].poster_path
                          }`
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    />
  );
}
