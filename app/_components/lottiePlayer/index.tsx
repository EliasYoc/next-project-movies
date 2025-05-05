"use client";
// https://lordicon.com/docs/react
// como Player usa document entonces este componente debe estar en el client con dynamic()
import { Player } from "@lordicon/react";
import { useEffect, useRef, useState } from "react";

import { AnimationDirection } from "@lordicon/react/dist/interfaces";

interface LottieIconProps {
  onComplete?: (player: Player | null) => void;
  behavior?: "loop" | "normal" | "alternately" | "alternatelyLoop" | "none";
  lottieJson: unknown;
  size?: number;
  state?: string;
  colorize?: string;
  onReady?: (player: Player | null) => void;
}
export default function LottiePlayer(props: LottieIconProps) {
  const {
    onComplete,
    behavior = "normal",
    lottieJson: icon,
    size = 96,
    state,
    colorize,
    onReady = () => {},
  } = props;

  const playerRef = useRef<Player>(null);
  const [loops, setLoops] = useState(1);
  const activatedDirection = behavior === "alternatelyLoop" ? -1 : undefined;
  const activatedDirection2 = behavior === "alternately" ? -1 : undefined;
  const [direction, setDirection] = useState<AnimationDirection | undefined>(
    activatedDirection || activatedDirection2
  );
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    if (direction) playerRef.current?.play();
  }, [direction]);

  useEffect(() => {
    if (behavior === "loop" || behavior === "normal") {
      // playFromBeginning is not working with direction
      playerRef.current?.playFromBeginning();
    }
  }, [behavior]);

  useEffect(() => {
    if (isPlayerReady) {
      onReady(playerRef.current);
    }
  }, [isPlayerReady, onReady]);

  return (
    <Player
      onReady={() => {
        setIsPlayerReady(true);
      }}
      state={state}
      ref={playerRef}
      size={size}
      icon={icon}
      direction={direction}
      colorize={colorize}
      onComplete={() => {
        if (behavior === "loop") {
          playerRef.current?.playFromBeginning();
          return;
        }
        if (behavior === "alternately") {
          if (loops === 3) {
            playerRef.current?.pause();
            setLoops(1);
            return;
          }
          setLoops(loops + 1);
        }
        if (behavior === "alternatelyLoop" || behavior === "alternately") {
          if (direction === 1) {
            setDirection(-1);
          } else {
            setDirection(1);
          }
        }
        if (onComplete) onComplete(playerRef.current);
      }}
    />
  );
}
