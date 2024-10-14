'use client'
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
    User2, 
    MailIcon, 
    HomeIcon, 
    PhoneCall, 
    GraduationCap, 
    Calendar,
    Briefcase, 
    Section
} from "lucide-react";
import Image from "next/image";
import useWindowSize from '../hooks/useWindowSize';

const InfoData = [
    {
        icon: <User2 size={20}  />,
        text: 'Ammar Yasir',
    },
    {
        icon: <PhoneCall size={20}  />,
        text: '+92 347 5440768',
    },
    {
        icon: <MailIcon size={20}  />,
        text: 'ammaraliyasir72@gmail.com',
    },
    {
        icon: <GraduationCap size={20}  />,
        text: 'Bachelors in Information Technology',
    },
    {
        icon: <HomeIcon size={20}  />,
        text: 'House No.7 Street#4B, Sangam Town, Islamabad',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Arid Agriculture University Rawalpindi',
                qualification: 'Bachelors of Science',
                years: '2016 - 2020',
            },
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Logics Buffer Rawalpindi',
                role: 'Senior WordPress Developer',
                years: '2021 - 2023',
            },
            {
                company: 'BondWest',
                role: 'Frontend Developer',
                years: '2024',
            },
        ],
    },
];

const SkillsData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Developemnt',
            }, 
            {
                name: 'JavaScript, PHP',
            }, 
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            }, 
            {
                imgPath: '/about/wordpress.svg',
            }, 
        ],
    },
];

const About = () => {
    const { width } = useWindowSize();
    const getData = (arr,title) => {
        return arr.find((item) => item.title === title);
    };

  return (
    <section id="about" className='xl:h-[860px] pb-12 xl:py-20'>
        <div className="container mx-auto">
           <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
            About me
            </h2>
            <div className='flex flex-col xl:flex-row'>
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg 
                        containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' 
                        ImgSrc='/about/developer.png'
                    />
                </div>
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                                Personal Info
                            </TabsTrigger >
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>
                                Qualifications
                            </TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                                Skills
                            </TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 xl:mt-8'>
                           <TabsContent value='personal'>
                            <div className='text-center xl:text-left'>
                                <h3 className='h3 mb-4'>
                                    Over 3 Years of Commitment to Unmatched Service Quality
                                </h3>
                                <p className='subtitle max-w-xl mx-auto xl:mx-0'>I create user-friendly websites that use the latest technology to provide enjoyable and interactive experiences for visitors</p>
                                {/* icons */}
                                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                    {InfoData.map((item, index)=> {
                                        return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                            <div className='text-primary'>{item.icon}</div>
                                            <div>{item.text}</div>
                                            </div>
                                    })}
                                </div>
                                {/* languages */}
                                <div className='flex flex-col gap-y-2'>
                                    <div className='text-primary'>Language Skills</div>
                                    <div className='border-b border-border'></div>
                                    <div>English, Urdu</div>
                                </div>
                            </div>
                            </TabsContent>
                            {/* qualification */} 
                            <TabsContent value='qualification'>
                            <div>
                                <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey
                                </h3>
                                {/* experience and education wrapper */}
                                <div className='grid md:grid-cols-2 gap-y-8'>
                                    {/* experince */}
                                    <div className='flex flex-col gap-y-4'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                           <Briefcase /> 
                                           <h4 className='capitalize font-medium'>
                                                {getData(qualificationData, 'experience').title}
                                           </h4>
                                        </div>
                                        {/* list */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getData(qualificationData, 'experience').data.map((item, index)=> {
                                                const {company, role, years} = item;
                                                return (
                                                    <div className='flex gap-x-8 group' key={index}>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>
                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                            <div className='text-base font-medium'>{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* education */}
                                    <div className='flex flex-col gap-y-4'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                           <GraduationCap size={28} /> 
                                           <h4 className='capitalize font-medium'>
                                                {getData(qualificationData, 'education').title}
                                           </h4>
                                        </div>
                                        {/* list */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getData(qualificationData, 'education').data.map((item, index)=> {
                                                const {university, qualification, years} = item;
                                                return (
                                                    <div className='flex gap-x-8 group' key={index}>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>
                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                            <div className='text-base font-medium'>{years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </TabsContent> 
                            {/* skills */} 
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8'>
                                        What I Use Everyday
                                    </h3>
                                    {/*skills */}
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/*skill list */}
                                        <div>
                                            {getData(SkillsData, 'skills').data.map((item, index)=>{
                                                const {name} = item;
                                                return <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                    <div>{name}</div>
                                                </div>
                                            })}
                                        </div>       
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* tools list */}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            {getData(SkillsData, 'tools').data.map((item, index)=>{
                                                const {imgPath} = item;
                                                return <div key={index}>
                                                    <Image src={imgPath} width={48} height={48} alt='' loading={width < 768 ? "lazy" : "eager"} />
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent> 
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
       
  )
}

export default About