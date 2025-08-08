// // IN this we have to add module by importing them to use
// "use client";
// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // When adding the module also import it
// import {
//   Scrollbar,
//   Autoplay,
//   FreeMode,
//   EffectCoverflow,
//   Mousewheel,
//   Virtual,
//   Navigation,
//   Pagination,
// } from "swiper/modules";

// // Add the css of that module you are going to use
// import "swiper/css";
// import "swiper/css/mousewheel";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";


// // ========================
// //   Embla Carousel

// import AutoScroll from "embla-carousel-auto-scroll";
// import useEmblaCarousel from "embla-carousel-react";
// const slides = [
//   "Slide 1",
//   "Slide 2",
//   "Slide 3",
//   "Slide 4",
//   "Slide 5",
//   "Slide 6",
//   "Slide 7",
//   "Slide 8",
//   "Slide 9",
//   "Slide 10",
// ];




// const Carousels = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     // Autoplay({ delay: 5000 }),
//     AutoScroll()
//   ]);
//   return (
//     <div  ref={emblaRef} className="flex min-h-screen w-full justify-center items-center">
//       <Swiper
//         //   modules={[Mousewheel]}
//         modules={[
//           Scrollbar,
//           Autoplay,
//           FreeMode,
//           EffectCoverflow,
//           Mousewheel,
//           Virtual,
//           Navigation,
//           Pagination,
//         ]}
//         // loop={true}
//         //   allowSlideNext={false}
//         //   allowSlidePrev={false}
//         // allowTouchMove={false}

//         // navigation={{
//         //   enabled: true,
//         //   //   nextEl: '.swiper-button-next',
//         //   //   prevEl: '.swiper-button-prev',
//         //   hideOnClick: false,
//         //   clickable: true,
//         // }}
//         // pagination={true}

//         // ========================
//         //   Add the Scrollbar
//         //   scrollbar={{
//         //     hide: true, //false to show
//         //     draggable: true, // to drag with scrollbar
//         //   }}

//         // ========================
//         // AutoPlay
//         // autoplay={{
//         //   delay: 1500,
//         //   disableOnInteraction: false, // false to stop on moving after interaction
//         //   // reverseDirection: true, // true to move in reverse direction
//         //   stopOnLastSlide: false, // true to animate again
//         //   pauseOnMouseEnter: true, //stop on hover
//         // }}
//         // ========================
//         // To make smaller side images
//         // effect="coverflow"
//         // coverflowEffect={{
//         //   depth: 100,
//         //   modifier: 1,
//         //   rotate: 0, // removed rotation
//         //   stretch: 0,
//         //   scale: 0.7, // reduced scale for side slides
//         //   slideShadows: true, // removed shadows for cleaner look
//         // }}
//         // ========================
//         //   Move with animation slowly
//         // freeMode={{
//         //   enabled: true,
//         //   momentum: true, // to mave with animation
//         //   snapToSlide: true,
//         // }}
//         // ========================
//         mousewheel={{
//           enable: true,
//           eventsTarget: "body", // set the body when want scroll according to the body
//           // forceToAxis:true, //true to just move when scroll in x axis
//           // invert: true, // for opposite direction
//         }}
//         // ========================
//         //   for animation continuously
//         //   Not Working
//         // virtual={{
//         //   enabled: true,
//         // addSlidesAfter: 1,
//         // addSlidesBefore: 1,
//         // slides: slides,
//         // renderSlide: (slide, index) => (
//         //   <SwiperSlide key={index} virtualIndex={index}>
//         //     {slide}
//         //   </SwiperSlide>
//         // ),
//         // }}

//         // navigation={true}
//         //   mousewheel={{ forceToAxis: true }}
        
//         centeredSlides={false}
//         slidesPerView={4}
//         // slidesPerView={"auto"}
//         // spaceBetween={20}

//         // spaceBetween={10}
//         //   autoplay={true}
//         //   onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         //   onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="w-ful h-[80px] swiperContainer"
//       >
//         {slides.map((text, index) => (
//           <SwiperSlide
//             key={index}
//             className={`flex bg-sky-300 w-[200px]  items-center justify-center transition-all duration-500 rounded-lg 
//             `}
//           >
//             {text}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousels;






"use client";
import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const slides = Array.from({ length: 10 }, (_, i) => `Slide ${i + 1}`);
const DEFAULT_SPEED = 1.2;
const THROTTLE_MS = 150;

export default function EmblaReverseOnWheel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      AutoScroll({
        speed: DEFAULT_SPEED,
        playOnInit: true,
        startDelay: 0,
        direction: "forward",
        stopOnInteraction: false,
      }),
    ]
  );

  const lastChangeRef = useRef(0);

  useEffect(() => {
    if (!emblaApi) return;

    // debug: verify plugin exists
    console.log("Embla plugins:", emblaApi.plugins()); // should include autoScroll

    const root = emblaApi.rootNode();
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastChangeRef.current < THROTTLE_MS) return;
      lastChangeRef.current = now;

      const newDir = e.deltaY < 0 ? "backward" : "forward";

      const currentPlugins = emblaApi.plugins();
      const currentDir =
        currentPlugins?.autoScroll?.options?.direction ?? null;

      if (currentDir === newDir) return;

      // Replace plugin with new direction (keeps current position)
      emblaApi.reInit(
        { loop: true },
        [
          AutoScroll({
            speed: DEFAULT_SPEED,
            playOnInit: true,
            startDelay: 0,
            direction: newDir,
            stopOnInteraction: false,
          }),
        ]
      );
    };

    // Attach only to the carousel root so page scrolling doesn't accidentally flip direction
    document.addEventListener("wheel", handleWheel, { passive: true });
    return () => document.removeEventListener("wheel", handleWheel);
  }, [emblaApi]);

  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div
        ref={emblaRef}
        className="overflow-hidden w-full max-w-4xl"
        style={{ touchAction: "pan-y" }}
      >
        <div className="flex">
          {slides.map((s, i) => (
            <div
              key={i}
              className="flex-[0_0_220px] mx-2 h-28 flex items-center justify-center rounded-lg bg-sky-300"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
