"use client";
import dynamic from "next/dynamic";
import cineBoleto from "../app/_lotties/cine-boleto.json";
// funciona importar asi pero aqui solo estoy importando desde el header, y cada vez que quiero agregar un lottie en otro componente tengo que repetir el mismo dynamic
const LottiePlayer = dynamic(() => import("./_components/lottiePlayer"), {
  ssr: false,
  loading: () => (
    <div className="bg-stone-700 w-[50px] h-[50px] rounded-lg"></div>
  ),
});

export default function LayoutHeader() {
  return (
    <header className="flex gap-2 text-3xl items-center p-4">
      <LottiePlayer size={50} alternatelyLoop lottieJson={cineBoleto} />
      <h1>Movies</h1>
    </header>
  );
}
