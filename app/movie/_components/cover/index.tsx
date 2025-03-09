import Image from "next/image";

export default function Cover({
  portraitSrc,
  movieTitle,
  children,
  layoutClassName = "",
  layoutStyle = {},
}: {
  portraitSrc: string;
  movieTitle: string;
  children: React.ReactNode;
  layoutClassName?: string;
  layoutStyle?: React.CSSProperties;
}) {
  const gradientElement = `before:block before:absolute before:bg-gradient-to-t before:from-black before:from-10% before:to-transparent before:to-90% before:inset-0`;
  return (
    <section className={`relative ${gradientElement} min-h-[100vh]`}>
      {portraitSrc && (
        <Image
          className="object-cover"
          src={portraitSrc}
          alt={movieTitle}
          width={780}
          height={439}
          priority
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <div
        style={layoutStyle}
        className={`cover-layout absolute left-0 top-0 w-full h-full p-4 ${layoutClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
