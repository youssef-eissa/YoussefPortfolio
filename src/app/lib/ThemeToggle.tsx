import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { LuSunMoon } from "react-icons/lu";
import { FaSun } from "react-icons/fa";
import { castIcon } from '../utils/cast-icon';




function ThemeToggle() {
  const LuSunMoonIcon = castIcon(LuSunMoon);
  const FaSunIcon = castIcon(FaSun);
    const { theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    if(!mounted) return null

    function toggleTheme() {
  if (theme === 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}
  return (
    <button className='cursor-pointer' onClick={toggleTheme}>
        {theme === 'dark' ? <FaSunIcon color='#FFCC33' className='text-2xl'/> : <LuSunMoonIcon  className='text-2xl text-mainText'/>}
    </button>
  )
}

export default ThemeToggle