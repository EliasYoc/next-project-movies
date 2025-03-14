"use client";
import { getTmdbConfiguration } from "@/app/_services/tmdb/configuration";
import { TheShowImage } from "@/app/_services/tmdb/types";
import Poster from "@/app/_components/ui/Poster";
import WindowVirtualizedItems from "@/app/_components/windowVirtualizedItems";

export default function PostersPanel({
  postersMatrix,
  columnsLength,
  tmdbDetailsData,
}: {
  postersMatrix: TheShowImage[][];
  columnsLength: number;
  tmdbDetailsData: Awaited<ReturnType<typeof getTmdbConfiguration>>;
}) {
  const srcUrlBase = `${tmdbDetailsData.images.secure_base_url}${tmdbDetailsData.images.poster_sizes[2]}`;
  return (
    <>
      <WindowVirtualizedItems
        renderItems={(virtualizer) =>
          virtualizer.getVirtualItems().map((virtualItem) => {
            return (
              <div
                key={virtualItem.key}
                className={`absolute top-0 left-0 w-full grid gap-2 border-2 border-red-400`}
                data-index={virtualItem.index}
                ref={virtualizer.measureElement}
                style={{
                  gridTemplateColumns: `repeat(${columnsLength},1fr)`,
                  // virtualizer.measureElemen se encarga de calcular el tamaño de cada item, y no necesita el height
                  // height: `${virtualItem.size}px`,
                  transform: `translateY(${
                    virtualItem.start - virtualizer.options.scrollMargin
                  }px)`,
                }}
              >
                {postersMatrix[virtualItem.index].map((poster) => (
                  <Poster
                    title={virtualItem.index + 1}
                    layoutClassName={`w-auto`}
                    key={poster.file_path}
                    src={`${srcUrlBase}${poster.file_path}`}
                  />
                ))}
              </div>
            );
          })
        }
        windowVirtualizerOptions={(element) => ({
          count: postersMatrix.length,
          estimateSize: () => 415,
          overscan: 2,
          scrollMargin: element ? element.offsetTop : 0,
          gap: 8,
        })}
      />
    </>
  );
}
