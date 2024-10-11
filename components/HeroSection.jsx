import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight'; 
import { Button } from './ui/moving-border';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="head_text text-center dark:text-white">Innovative Frontend Solutions
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center dark:#A1A1AA"> for Modern Web </span>
            </h1>
            <div className="max-w-2xl mx-auto text-center"> 
                <p className="desc">
                I’m Ammar Yasir, a passionate frontend developer and WordPress specialist based in Pakistan. I’m dedicated to helping businesses and individuals bring their ideas to life through effective digital solutions.
                </p>
            </div>
              {/* Social Links Section */}
            <div className="mt-4 flex gap-6 justify-center">
                <Link href="https://github.com/ammarbaltee" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/ammar-yasir-354181106/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                </Link>
                <Link href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                </Link>
            </div>
            <div className="mt-10">
                <Link href='/contact'>
                    <Button borderRadius="1.75rem">
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div> 
    </div>
    
)
}

export default HeroSection;