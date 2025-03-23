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
    <header className="fixed top-0 w-full h-[56px] flex text-3xl  p-1 z-10 backdrop-blur-2xl bg-[#f7f7f794]">
      <Link className="flex gap-2 items-center" href="/">
        <LottiePlayer size={40} alternatelyLoop lottieJson={cinema} />
        <h1 className="text-2xl">Movies</h1>
      </Link>
    </header>
  );
}
