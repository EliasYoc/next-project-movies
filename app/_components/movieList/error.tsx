"use client";
// este error era para el slot

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      Error movie list
      <button onClick={reset}>Try again</button>
    </div>
  );
}
