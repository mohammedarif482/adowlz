"use client";

import { useRef, useState } from "react";
import {
  AiFillPlayCircle,
  AiOutlineMuted,
  AiOutlinePauseCircle,
  AiOutlineSound,
} from "react-icons/ai";

export function PortfolioVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className={className}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="block h-full w-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-bone backdrop-blur transition hover:bg-ink/80"
        >
          {playing ? (
            <AiOutlinePauseCircle className="text-xl" aria-hidden />
          ) : (
            <AiFillPlayCircle className="text-xl" aria-hidden />
          )}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-bone backdrop-blur transition hover:bg-ink/80"
        >
          {muted ? (
            <AiOutlineMuted className="text-lg" aria-hidden />
          ) : (
            <AiOutlineSound className="text-lg" aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}
