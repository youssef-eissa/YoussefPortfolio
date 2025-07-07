import React from 'react'
import { bebas } from '../lib/fonts'
import SkillsAndTools from './SkillsAndTools'
import Link from 'next/link'
import Heading from '../lib/Heading'

function About() {
  return (
    <section id='about' className='sm:p-10 p-5 flex flex-col gap-5 items-center '>
      <Heading title='about me'/>
        <div className='grid lg:grid-cols-2 lg:gap-10 w-full gap-5 '>
            <article className='flex flex-col lg:gap-7 sm:gap-4 gap-2'>
                <h3 className='uppercase font-oswald lg:text-3xl xl:text-4xl text-lg sm:text-2xl text-mainText'>who am i ?</h3>
                <p className={`lg:text-2xl xl:text-3xl text-base sm:text-xl ${bebas.className} font-bold`}>
                    I'm a passionate junior frontend developer with a solid foundation in
building responsive, user-friendly web applications. Proficient in
<b> React.Js</b> and <b>Next.Js</b>, I specialize in crafting dynamic, scalable user
interfaces with a focus on performance and usability. <br className='hidden sm:block'/> <br/> With hands-on
experience in modern styling tools like Tailwind CSS and CSS
Modules, I bring clean, visually appealing designs to life. I'm
committed to delivering high-quality, user-focused solutions—
whether working independently or as part of a team—while
continuously learning and staying up-to-date with the latest in
frontend development.
                </p>
            </article>
            <SkillsAndTools/>
        </div>
        <div className='flex items-center justify-center gap-5 w-full'>
          <Link className='xl:text-2xl lg:text-xl sm:text-lg text-xs font-oswald font-bold text-white lg:bg-secondaryText bg-mainText p-3 rounded uppercase hover:bg-mainText transition-all duration-300' href={'mailto:youssefeissa1812@gmail.com'}>Email Me</Link>
            <Link download className='xl:text-2xl lg:text-xl sm:text-lg text-xs font-bold text-white lg:bg-secondaryText bg-mainText p-3 rounded uppercase font-oswald hover:bg-mainText transition-all duration-300' href={'/Youssef_Eissa.pdf'}>download my resume</Link>
        </div>
    </section>
  )
}

export default About