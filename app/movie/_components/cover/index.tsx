import Image from "next/image";

export default function Cover({
  portraitSrc,
  movieTitle,
}: {
  portraitSrc: string;
  movieTitle: string;
}) {
  const gradientElement = `before:block before:absolute before:bg-gradient-to-t before:from-black before:from-10% before:to-transparent before:to-90% before:inset-0`;
  return (
    <section className={`relative ${gradientElement}`}>
      <Image
        src={portraitSrc}
        alt={movieTitle}
        width={780}
        height={439}
        priority
        style={{ width: "100%", height: "auto" }}
      />
      <p>content</p>
    </section>
  );
}
