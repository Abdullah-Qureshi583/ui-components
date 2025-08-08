// IN this we have to add module by importing them to use
"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// When adding the module also import it
import {
  Scrollbar,
  Autoplay,
  FreeMode,
  EffectCoverflow,
  Mousewheel,
  Virtual,
  Navigation,
  Pagination,
} from "swiper/modules";

// Add the css of that module you are going to use
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";

const slides = [
  "/carouselImages/image1.jpg",
  "/carouselImages/image2.jpg",
  "/carouselImages/image3.jpg",
  "/carouselImages/image4.jpg",
  "/carouselImages/image5.jpg",
];

const Carousels = () => {
  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <Swiper
        //   modules={[Mousewheel]}
        modules={[
          Scrollbar,
          Autoplay,
          FreeMode,
          EffectCoverflow,
          Mousewheel,
          Virtual,
          Navigation,
          Pagination,
        ]}
        //   loop={true}
        //   allowSlideNext={false}
        //   allowSlidePrev={false}
        //   allowTouchMove={false}

        navigation={{
          enabled: true,
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          hideOnClick: false,
          clickable: true,
        }}
        // pagination={true}

        // ========================
        //   Add the Scrollbar
        //   scrollbar={{
        //     hide: true, //false to show
        //     draggable: true, // to drag with scrollbar
        //   }}

        // ========================
        // AutoPlay
        //   autoplay={{
        //     delay: 500,
        //     disableOnInteraction: false, // false to stop on moving after interaction
        //     // reverseDirection: true, // true to move in reverse direction
        //     stopOnLastSlide: false, // true to animate again
        //     pauseOnMouseEnter: true, //stop on hover
        //   }}
        // ========================
        // To make smaller side images
        effect="coverflow"
        coverflowEffect={{
          depth: 100,
          modifier: 1,
          rotate: 0, // removed rotation
          stretch: 0,
          scale: 0.7, // reduced scale for side slides
          slideShadows: false, // removed shadows for cleaner look
        }}
        // ========================
        //   Move with animation slowly
        //   freeMode={{
        //     enabled: true,
        //     momentum: true, // to mave with animation
        //     snapToSlide: true,
        //   }}

        // ========================
        //   mousewheel={{
        //     enable: true,
        //     eventsTarget: ".swiperContainer", // set the body when want scroll according to the body
        //     forceToAxis:true, //true to just move when scroll in x axis
        //     // invert: true, // for opposite direction
        //   }}

        // ========================
        //   for animation continuously
        //   Not Working
        //   virtual={{
        //     enabled: true,
        //     addSlidesAfter: 1,
        //     addSlidesBefore: 1,
        //     slides: slides,
        //     renderSlide: (slide, index) => (
        //       <SwiperSlide key={index} virtualIndex={index}>
        //         {slide}
        //       </SwiperSlide>
        //     ),
        //   }}

        // virtual={{
        //   slides: ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"],
        // }}


        // navigation={true}
        //   mousewheel={{ forceToAxis: true }}
        centeredSlides={true}
        slidesPerView={2}
        // spaceBetween={10}
        //   autoplay={true}
        //   onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        //   onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-ful h-[300px]"
      >
        {slides.map((text, index) => (
          <SwiperSlide
            key={index}
            className={`flex items-center justify-center transition-all duration-500 rounded-lg 
           text-white `}
          >
            <Image
              src={text}
              width={500}
              height={500}
              className="object-cover h-full"
              alt="Picture of the author"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousels;
