"use client"
import React, { useEffect, useState } from 'react'

function Tracker() {
    const [position, setPosition] = useState({
        x:0,
        y:0
    })
    const [show,setShow]=useState(false)
    useEffect(()=>{
        function handleMouseMove(e:MouseEvent){
            setPosition({
                x:e.pageX,
                y:e.pageY
            })
            setShow(true)
        }
        window.addEventListener('mousemove',handleMouseMove)
        window.addEventListener('scroll',()=>setShow(false))
        return () => {
            window.removeEventListener('mousemove',handleMouseMove)
            window.removeEventListener('scroll',()=>setShow(false))
        };
    },[])
  return (
    show ? (
        <span style={{
        transform:`translate(${position.x}px,${position.y}px)`
    }} className={' absolute hidden lg:block top-0 left-0 z-50 w-12 aspect-square rounded-full border-2 border-secondaryText'}></span>
    ):null
  )
}

export default Tracker