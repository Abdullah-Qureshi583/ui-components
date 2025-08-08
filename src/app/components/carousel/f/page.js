"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla bg-red-400" ref={emblaRef}>
      <div className="embla__container bg-sky-300 flex">
        <div className="embla__slide ">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}
