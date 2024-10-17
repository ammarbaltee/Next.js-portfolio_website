import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight'; 
import { Button } from './ui/moving-border';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className="p-4 md:pt-20 relative z-10 w-full text-center">
            <h1 className="head_text text-center max-md:text-[35px] dark:text-white">Innovative Frontend Solutions
            <br className="max-md:hidden" />
            <span className="text-primary text-center dark:#A1A1AA"> for Modern Web </span>
            </h1>
            <div className="max-w-2xl mx-auto text-center"> 
                <p className="desc">
                I’m Ammar Yasir, a passionate frontend developer and WordPress specialist based in Pakistan. I’m dedicated to helping businesses and individuals bring their ideas to life through effective digital solutions.
                </p>
            </div>
              {/* Social Links Section */}
            <div className="mt-4 flex gap-6 justify-center">
                <Link href="https://github.com/ammarbaltee" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile">
                    <FaGithub className="text-3xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/ammar-yasir-354181106/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
                    <FaLinkedin className="text-3xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                </Link>
                <Link href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Twitter">
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