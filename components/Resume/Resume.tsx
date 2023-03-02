import React from 'react'
import Shuttle from '../../assets/SVG/rocket'
const Resume = () => {
  return (
    <div className='flex flex-col'>
      <Shuttle width={100} height={100} className={`opacity-40 inline-flex`}/>
      <h1 className='text-5xl font-[Encode Sans SC] uppercase text-center w-full'>Resume</h1>
    </div>
  )
}

export default Resume