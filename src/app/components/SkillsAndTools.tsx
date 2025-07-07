"use client"
import React, { useState } from 'react'
import { bebas } from '../lib/fonts'
import { motion ,AnimatePresence} from 'framer-motion'


function SkillsAndTools() {

    const skills=["HTML","CSS","JAVASCRIPT","REACT.JS","NEXT.JS","TAILWIND CSS","CSS MODULES","REDUX","REACT QUERY","TYPESCRIPT","problem solving"]

    const tools=["GIT","VS CODE","GITHUB","FIGMA","JIRA"]

    const [currentState, setCurrentState] = useState<"skills"|"tools">("skills")
    const [currentSet, setCurrentSet] = useState<string[]>(skills)
    const tabs=[
        {
            name:"my skills",
            tab:"skills",
        },
        {
            name:"my tools",
            tab:"tools",
        }
    ]
    function changeState(state: "skills" | "tools"){
        setCurrentState(state)
        if(state === "skills"){
            setCurrentSet(skills)
        } else {
            setCurrentSet(tools)
        }
    }
  return (
    <div className='flex flex-col gap-7 items-center'>
        <div className='flex items-center border-mainText gap-5 p-3 border-2 relative rounded'>
            {tabs.map(tab=>{
                return (
                <button key={tab.tab} onClick={()=>changeState(tab.tab.toLowerCase() as "skills"|"tools")} className='lg:text-3xl xl:text-5xl sm:text-lg text-sm font-oswald gap-5 uppercase cursor-pointer '>{tab.name}</button>

                )
            })}
            <AnimatePresence initial={false}>
            <motion.span className='absolute top-1/2 -translate-y-1/2 bg-secondaryText -z-10 w-1/2 h-[calc(100%-10px)] rounded'  initial={{left:0}} animate={{left:currentState === "skills" ? 6 : "calc(50% - 3px)"}}></motion.span>

            </AnimatePresence>
        </div>
        <div className='flex flex-wrap gap-5 w-full'>
            {currentSet.map(skill=>(
                <span key={skill} className={`lg:text-2xl xl:text-3xl sm:text-lg text-sm ${bebas.className} p-3 rounded font-bold bg-secondaryText`}>{skill}</span>
            ))}
        </div>
    </div>
  )
}

export default SkillsAndTools