import React from 'react'

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

import me from '/public/assest/meNew.jpeg'

import Link from 'next/link';
import Image from 'next/image';


function Hero() {
  return (
    <section id='who-am-i' className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
      <div className='dark:bg-secondaryText  lg:h-[650px] lg:grid-cols-[120px_1fr] grid-cols-1 grid p-10 lg:rounded-e-2xl mx-5 rounded-2xl gap-5 lg:gap-0'>
        <div className='flex lg:flex-col justify-between '>
          <Link target='_blank' className='border border-transparent hover:border-[#0a66c2] p-2 w-fit rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0a66c2] text-icon ' href={'https://www.linkedin.com/in/youssef-eissa1812/'}>
            <FaLinkedin className='text-2xl sm:text-3xl lg:text-4xl'  />
            </Link>
             <Link target='_blank' className='border border-transparent hover:border-[#24292e] p-2 w-fit rounded-lg transition-all duration-300 hover:bg-white hover:text-[#24292e] text-icon ' href={'https://github.com/youssef-eissa'}>
            <FaGithub className='text-2xl sm:text-3xl lg:text-4xl'  />
            </Link>
             <Link target='_blank' className='border border-transparent hover:border-[#25d366] p-2 w-fit rounded-lg transition-all duration-300 hover:bg-white hover:text-[#25d366] text-icon ' href={'https://wa.me/201003003433'}>
            <FaWhatsapp className='text-2xl sm:text-3xl lg:text-4xl'  />
            </Link>
        </div>
        <div className='relative rounded-xl overflow-hidden h-[200px] sm:h-[300px] lg:h-full  '>
          <Image fill src={me} alt='me' className='lg:object-cover object-contain ' />
        </div>
      </div>
      <div className='flex flex-col justify-center uppercase  font-oswald gap-3'>
        <h2 className='xl:text-9xl lg:text-5xl sm:text-4xl text-2xl text-center lg:text-left text-mainText'>
        my name is Youssef eissa

        </h2>
        <h3 className='lg:text-4xl xl:text-3xl sm:text-2xl text-base text-center lg:text-left text-secondaryText'>
          I'm a junior Frontend developer.
        </h3>
      </div>
    </section>
  )
}

export default Hero