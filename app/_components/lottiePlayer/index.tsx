"use client";
// como Player usa document entonces este componente debe estar en el client con dynamic()
import { Player } from "@lordicon/react";
import { useEffect, useRef, useState } from "react";

import { AnimationDirection } from "@lordicon/react/dist/interfaces";

interface LottieIconProps {
  onHover?: (player: Player | null) => void;
  onComplete?: (player: Player | null) => void;
  alternatelyLoop?: boolean;
  alternately?: boolean;
  hover?: boolean;
  touch?: boolean;
  lottieJson: unknown;
  size?: number;
  state?: string;
}
export default function LottiePlayer(props: LottieIconProps) {
  if ("alternatelyLoop" in props && "alternately" in props) {
    throw new Error(
      "You can't use both alternatelyLoop and alternately at the same time"
    );
  }
  const {
    onHover,
    onComplete,
    alternatelyLoop = false,
    alternately = false,
    hover = false,
    lottieJson: icon,
    size = 96,
    state,
    // touch = false,
  } = props;

  const playerRef = useRef<Player>(null);
  const [loops, setLoops] = useState(1);
  const [direction, setDirection] = useState<AnimationDirection>(-1);

  useEffect(() => {
    playerRef.current?.play();
  }, [direction]);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div
      onMouseOver={() => {
        if (onHover) onHover(playerRef.current);
        if (hover) {
          playerRef.current?.play();
        }
      }}
    >
      <Player
        state={state}
        ref={playerRef}
        size={size}
        icon={icon}
        direction={direction}
        onComplete={() => {
          if (onComplete) onComplete(playerRef.current);
          if (alternately) {
            if (loops === 3) {
              playerRef.current?.pause();
              setLoops(1);
              return;
            }
            setLoops(loops + 1);
          }
          if (alternatelyLoop || alternately) {
            if (direction === 1) {
              setDirection(-1);
            } else {
              setDirection(1);
            }
          }
        }}
      />
    </div>
  );
}
