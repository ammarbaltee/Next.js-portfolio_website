import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const ServicesItem = ({ services }) => {
  return (
    <li className="relative flex w-full flex-1 flex-col items-center text-center rounded-2xl group duration-[1200ms] transition-all">
      <BackgroundGradient className="w-full h-full p-10 flex flex-col items-center shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-2xl group-hover:bg-primary group-hover:text-white">
        <div className="rounded-full p-5 bg-primary absolute -top-8 group-hover:bg-[#3F4554]">
          <Image
            src={services.icon}
            width={28}
            height={28}
            alt={services.title}
            priority
          />
        </div>
        <h4 className="h4 mt-6 group-hover:text-white">{services.title}</h4>
        <p className="text-white text-lg mt-4 group-hover:text-white">{services.description}</p>
      </BackgroundGradient>
    </li>
  );
};

export default ServicesItem;
