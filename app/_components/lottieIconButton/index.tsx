"use client";
import { IconButton } from "@mui/material";
import toPerson from "@/app/_lotties/icons/to-person.json";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { Player } from "@lordicon/react";

const LottiePlayer = dynamic(() => import("@/app/_components/lottiePlayer"), {
  ssr: false,
  loading: () => (
    <div className="bg-stone-700 w-[40px] h-[40px] rounded-lg"></div>
  ),
});
export default function LottieIconButton() {
  const refButton = useRef<Player | null>(null);
  return (
    <IconButton
      onMouseEnter={() => {
        if (!refButton.current?.isPlaying) {
          refButton.current?.playFromBeginning();
        }
      }}
    >
      <LottiePlayer
        onReady={(player) => {
          refButton.current = player;
        }}
        size={40}
        behavior="none"
        lottieJson={toPerson}
      />
    </IconButton>
  );
}
