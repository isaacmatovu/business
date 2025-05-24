"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Default values
  const thumbnailUrl =
    "data:image/jpeg;base64,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";
  const videoTitle = "Product Overview";
  const videoUrl = "https://www.youtube.com/watch?v=Swt-ldvZlts";

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-4xl mx-auto">
      {!isPlaying ? (
        <>
          {/* Thumbnail image */}
          <Image
            src={thumbnailUrl}
            alt="Video thumbnail"
            width={1200}
            height={675}
            className="w-full h-auto aspect-video object-cover"
            priority
          />

          {/* Video button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              className="bg-green-500 hover:bg-green-600 rounded-full p-4 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 text-white fill-white" />
            </button>
          </div>

          {/* Video info at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="text-white font-medium text-lg">{videoTitle}</div>
          </div>
        </>
      ) : (
        <div className="relative">
          {/* Video player */}
          <video ref={videoRef} className="w-full h-auto" controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Close button - now using Tailwind instead of shadcn Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close video"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
