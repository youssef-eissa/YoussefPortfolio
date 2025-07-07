"use client"
import { useState,useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { linksTypes } from '../types/links';
import Link from 'next/link';
import { useHash } from '../utils/useHash';
import { scrollToSection } from '../utils/scrollToSection';
import ThemeToggle from '../lib/ThemeToggle';


function Navbar() {
  const {hash,setHash}=useHash()
  const [scroll,setScroll] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
useEffect(() => {
  const handleScroll = () => {
    
    const currentScroll = window.scrollY;
   const diff = Math.abs(currentScroll - scroll);
   if (diff < 50) return; 

      if (currentScroll > scroll ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setScroll(window.scrollY);


    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

    
    const links:linksTypes[]=[
        {
            name:"Who am i ?",
            href:"who-am-i"
        },
        {
          name:"about",
          href:"about"
        },
        {
          name:"portfolio",
          href:"portfolio"
        },
        {
          name:"experience",
          href:"experience"
        }

    ]
    function handleHashChange(hash:string){
      setHash(hash)
      scrollToSection(hash)

    }
  return (
   <AnimatePresence initial={false}>
       <motion.header initial={{y:-100}} animate={{y:showNavbar?0:-100}} transition={{duration:1,ease:"easeInOut",bounce:1}} exit={{y:-100}} className=' fixed z-10 bg-[#ededed] dark:bg-[#0d1b2a] top-0 left-1/2 -translate-x-1/2 rounded-b-2xl border border-mainText border-t-0'>
        <nav className='p-3 flex items-center gap-3  w-fit mx-auto font-oswald'>
          {links.map(link=>{
            const isActive = hash.replace("#","") ===  link.href
            return(
            <Link onClick={()=>handleHashChange(link.href) } style={
              isActive ? {color:"var(--color-secondaryText)"}:{}
            }  key={link.name} className='capitalize text-sm sm:text-lg transition-all ease-in-out duration-300 dark:text-white whitespace-nowrap text-mainText' href={`#${link.href}`}>{link.name}</Link>

            )
          })}
          {/* <ThemeToggle/> */}
        </nav>
    </motion.header>
   </AnimatePresence>
  )
}

export default Navbar