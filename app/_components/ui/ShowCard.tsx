import Image from "next/image";

interface CardProps {
  src: string;
  average?: number;
  title?: string;
  releaseDate?: string | null;
  description?: string;
  navigateTo?: string;
}
export default function ShowCard({
  src,
  // average,
  title,
}: // releaseDate = null,
// description,
// navigateTo,
CardProps) {
  return (
    <figure className="rounded-md relative w-[200px] h-[300px] shrink-0">
      <Image
        alt={`poster of ${title}`}
        src={src}
        className="absolute w-full h-full object-cover select-none rounded-md"
        width={200}
        height={300}
        // style={{ width: "100%", height: "auto" }}
      />
      <figcaption className="relative text-zinc-50 p-0.5"></figcaption>
    </figure>
  );
}
