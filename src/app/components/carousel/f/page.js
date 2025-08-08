"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    // Autoplay({ delay: 5000 }),
    AutoScroll()
  ]);

//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi.slideNodes()); // Access API
//     }
//   }, [emblaApi]);

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container bg-sky-300 h-32 ">
        <div className="embla__slide h-[200px] ">Slide 1</div>
        <div className="embla__slide h-[200px]">Slide 2</div>
        <div className="embla__slide h-[200px]">Slide 3</div>
      </div>
    </div>
  );
}
