"use client";
import Poster from "@/app/_components/ui/Poster";
import { TheShowImage } from "@/app/_services/tmdb/types";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

export default function VirtualizedItems({
  list,
  columnsLength,
  srcUrlBase,
}: {
  list: TheShowImage[][];
  columnsLength: number;
  srcUrlBase: string;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const virtualizer = useWindowVirtualizer({
    count: list.length,
    estimateSize: () => 415,
    overscan: 5,
    scrollMargin: listRef.current ? listRef.current.offsetTop : 0,
  });
  // console.log(list.length, virtualizer.getTotalSize());
  return (
    <section ref={listRef} className="list">
      <div
        className="relative w-full"
        style={{
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          return (
            <div
              key={virtualItem.key}
              className={`absolute top-0 left-0 w-full grid gap-2 border-2 border-red-400`}
              style={{
                gridTemplateColumns: `repeat(${columnsLength},1fr)`,
                height: `${virtualItem.size}px`,
                transform: `translateY(${
                  virtualItem.start - virtualizer.options.scrollMargin
                }px)`,
              }}
            >
              {list[virtualItem.index].map((poster) => (
                <Poster
                  title={virtualItem.index + 1}
                  layoutClassName={`w-auto`}
                  key={poster.file_path}
                  src={`${srcUrlBase}${poster.file_path}`}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
