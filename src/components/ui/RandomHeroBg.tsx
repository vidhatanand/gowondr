"use client";

import { useState, useEffect } from "react";

interface RandomHeroBgProps {
  images: string[];
}

export function RandomHeroBg({ images }: RandomHeroBgProps) {
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    setImage(images[Math.floor(Math.random() * images.length)]);
  }, [images]);

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
    </>
  );
}
