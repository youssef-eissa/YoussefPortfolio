"use client"
import React, { useEffect } from 'react'
import { motion } from "framer-motion"

function Greeting() {
    useEffect(()=>{
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
          const timer = setTimeout(() => {
            if(currentScroll<windowHeight){
              window.scrollTo({top: window.innerHeight,
                behavior: 'smooth'
      })
            }
    }, 1500);
        return () => clearTimeout(timer);
    },[])
  return (
    <section className='h-dvh flex flex-col gap-5 items-center justify-center font-oswald'>
  <motion.h1 initial={{scale:0}} animate={{scale:[0,1.5,1]}} transition={{duration:1,ease:"easeInOut",bounce:1}} className="stroke-text text-xl lg:text-3xl font-bold uppercase sm:text-xl">Hello World</motion.h1>
  <motion.h2  initial={{top:100,opacity:0}} animate={{top:0,opacity:1}} transition={{duration:1,ease:"easeInOut",bounce:1}} className='relative lg:text-xl  sm:text-lg  text-secondaryText'>Powered by Youssef Eissa</motion.h2>

    </section>
  )
}

export default Greeting