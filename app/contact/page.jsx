import Form from '@/components/Form';
import {MailIcon, HomeIcon, PhoneCall} from 'lucide-react';

const Contact = () => {
  return (
    <section className='py-[5rem]'>
         <div className='container mx-auto'>
            {/* text and illustration */}
            <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
                {/* text */}
                <div className='flex flex-col justify-between'>
                    <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                        <span className='w-[30px] h-[2px] bg-primary'></span>   
                        Say Hello 👋
                    </div>
                    <h1 className='h1 max-w-md mb-8 max-md:text-[35px]'>Let's Work Together</h1> 
                    <p className='subtitle max-w-[400px]'>Lorem Ipsum dolar, ait amet consectetur adipsicing elit. Placet, nostrum</p>
                </div>
                {/* illustration */}
                <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
            </div>    
            {/* info text and form */}
            <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
                {/* info text */}
                <div className='flex flex-col gap-y-4 xl:gap-y-14  mb-12 xl:mb-24 text-base xl:text-lg'>
                    {/* mail */}
                    <div className='flex items-center gap-x-5'>
                        <MailIcon size={18} className='text-primary' />
                        <div>ammaraliyasir72@gmail.com</div>
                    </div>
                    {/* address */}
                    <div className='flex items-center gap-x-5'>
                        <HomeIcon size={18} className='text-primary' />
                        <div>Street 4#B House No.7 Sangam Town, Islamabad</div>
                    </div>
                    {/* phone */}
                    <div className='flex items-center gap-x-5'>
                        <PhoneCall size={18} className='text-primary' />
                        <div>+92 347 5440768</div>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    </section>
   
  )
}

export default Contact