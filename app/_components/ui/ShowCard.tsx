import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  src: string;
  average?: number;
  title?: string;
  releaseDate?: string | null;
  description?: string;
  navigateTo?: Url;
}
export default function ShowCard({
  src,
  // average,
  // description,
  // releaseDate = null,
  title,
  navigateTo,
}: CardProps) {
  const ImageUi = (
    <Image
      priority
      alt={`poster of ${title}`}
      src={src}
      className="absolute w-full h-full object-cover select-none rounded-md"
      width={200}
      height={300}
      // style={{ width: "100%", height: "auto" }}
    />
  );
  return (
    <figure className="rounded-md relative w-[200px] h-[300px] shrink-0">
      {navigateTo ? <Link href={navigateTo}>{ImageUi}</Link> : ImageUi}
      <figcaption className="relative text-zinc-50 p-0.5"></figcaption>
    </figure>
  );
}
