import React from 'react'

type props={
    title:string
}

function Heading({title}:props) {
  return (
    <h2 className='font-oswald lg:text-4xl xl:text-6xl text-xl sm:text-3xl uppercase text-mainText'>{title}</h2>
  )
}

export default Heading