"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Default values
  const thumbnailUrl = "data:image/jpeg;base64,..."; // your base64 image
  const videoTitle = "Product Overview";
  const videoUrl = "/videos/dancing.mp4"; // Ensure this file exists in public/videos/

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const playPromise = videoRef.current.play();

      playPromise.catch((error) => {
        console.error("Playback failed:", error);
        setIsPlaying(false);
      });
    }
  }, [isPlaying]);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-[90%] max-w-4xl mx-auto aspect-video bg-black ">
      {!isPlaying ? (
        <>
          {/* Thumbnail image */}
          <Image
            src={thumbnailUrl}
            alt="Video thumbnail"
            fill
            className="object-cover"
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
        <div className="relative w-full h-full">
          {/* Video player */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Close button */}
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
