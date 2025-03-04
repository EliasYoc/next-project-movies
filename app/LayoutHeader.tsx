"use client";
import dynamic from "next/dynamic";
import cinema from "../app/_lotties/cinema.json";
import Link from "next/link";
// funciona importar asi pero aqui solo estoy importando desde el header, y cada vez que quiero agregar un lottie en otro componente tengo que repetir el mismo dynamic
const LottiePlayer = dynamic(() => import("./_components/lottiePlayer"), {
  ssr: false,
  loading: () => (
    <div className="bg-stone-700 w-[50px] h-[50px] rounded-lg"></div>
  ),
});

export default function LayoutHeader() {
  return (
    <header className="fixed top-0 w-full flex text-3xl  p-3 z-10">
      <Link className="flex gap-2 items-center" href="/">
        <LottiePlayer size={50} alternatelyLoop lottieJson={cinema} />
        <h1>Movies</h1>
      </Link>
    </header>
  );
}
