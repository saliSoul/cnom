'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { partenaires } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Partenaires = () => {
  return (
    <div
      className="w-full flex items-center justify-center bg-cover bg-center py-10"
    >
      <div className="flex flex-col gap-10 max-w-[95%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          
        </div>
      
        <Swiper
          slidesPerView={4}  
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={3000}
          modules={[Autoplay]}
          className="w-full"
        >
          {partenaires.map((Partenaire, index) => (
            <SwiperSlide key={index}>
              <Image
                src={Partenaire.Image}
                alt={Partenaire.name}
                width={Partenaire.width}
                height={Partenaire.height}
                className="object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partenaires;
