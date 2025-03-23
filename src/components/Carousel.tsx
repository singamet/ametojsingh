import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInTransition, setIsInTransition] = useState(false);
  useEffect(() => {
    if (images.length > 1) {
      const clock = setInterval(() => {
        setIsInTransition(true);
        setTimeout(() => {
          setCurrentImageIndex((prev) => {
            if (prev + 1 === images.length) {
              return 0;
            }
            return prev + 1;
          });
          setIsInTransition(false);
        }, 500);
      }, 5000);
      return () => clearInterval(clock);
    }
  }, [images]);
  return (
    <div className="relative h-full w-full opacity-80 lg:w-1/2">
      {images.length > 1 && (
        <button
          className="absolute top-0 left-0 z-10 h-[calc(100%-12px)] w-1/24 cursor-pointer bg-zinc-600 text-white opacity-50 transition-all duration-200 hover:bg-zinc-400 dark:text-black dark:hover:bg-zinc-700 dark:hover:text-zinc-400"
          onClick={() => {
            setCurrentImageIndex((prev) => {
              if (prev === 0) {
                return images.length - 1;
              }
              return prev - 1;
            });
          }}
        >
          <ArrowLeftIcon />
        </button>
      )}
      {images.length > 1 && (
        <button
          className="absolute top-0 right-0 z-10 h-[calc(100%-12px)] w-1/24 cursor-pointer bg-zinc-600 text-white opacity-50 transition-all duration-200 hover:bg-zinc-400 dark:text-black dark:hover:bg-zinc-700 dark:hover:text-zinc-400"
          onClick={() => {
            setCurrentImageIndex((prev) => {
              if (prev + 1 === images.length) {
                return 0;
              }
              return prev + 1;
            });
          }}
        >
          <ArrowRightIcon />
        </button>
      )}
      <img
        src={images[currentImageIndex]}
        alt="Image"
        className="ease transition-all duration-500"
        style={{
          opacity: `${isInTransition ? "0" : "1"}`,
        }}
      />

      {images.length > 1 && (
        <div className="mt-1 flex w-full justify-center gap-4">
          {images.map((image, idx) => (
            <button
              key={image}
              onClick={() => setCurrentImageIndex(idx)}
              className="h-2 w-2 cursor-pointer rounded-full border-2 dark:border"
              style={{
                backgroundColor: `${image === images[currentImageIndex] ? "black" : "white"}`,
                borderColor: `${image === images[currentImageIndex] ? "white" : "black"}`,
              }}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
