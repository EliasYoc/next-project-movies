import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  src: string;
  average?: number;
  title?: ReactNode;
  releaseDate?: string | null;
  description?: string;
  navigateTo?: Url;
}
export default function Poster({ src, title, navigateTo }: CardProps) {
  const ImageUi = (
    <Image
      priority
      alt={`poster of ${title}`}
      src={src}
      className="absolute w-full h-full object-cover select-none rounded-md"
      width={185}
      height={278}
      // style={{ width: "100%", height: "auto" }}
    />
  );
  return (
    <figure className="rounded-md relative w-[135px] aspect-[2/3] shrink-0 overflow-hidden">
      {navigateTo ? <Link href={navigateTo}>{ImageUi}</Link> : ImageUi}
      {title && (
        <figcaption className="w-full absolute bg-slate-700 p-[.1rem] bottom-0 px-2">
          {title}
        </figcaption>
      )}
    </figure>
  );
}
