'use client'

import ServicesItem from "./ServicesItem";
import { BackgroundGradient } from "./ui/background-gradient";

const servicesDetail =[
    {
        title: 'frontend',
        icon: '/frontend.svg',
        description: 'Creating user-friendly websites that look great and are easy to navigate.',
    },
    {
        title: 'backend',
        icon: '/backend.svg',
        description: 'Developing the server-side logic that powers your website and manages data effectively.',
    },
    {
        title: 'fullstack',
        icon: '/stack.svg',
        description: 'Building complete web solutions by handling both the front-end and back-end development.',
    },
]

const Services = () => {
  return (
    <section id="services" className="container mx-auto py-10 pb-12 xl:py-20 md:gap-28 lg:py-20 xl:flex-row">
        {/* title */}
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Services
        </h2>
        <ul className="mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
        {servicesDetail.map((services) => {
            return (
                <BackgroundGradient>
                    <ServicesItem services={services} />
                </BackgroundGradient>
            );
        })}
        </ul>
    </section>
  )
}

export default Services