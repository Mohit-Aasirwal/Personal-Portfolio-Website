import React from 'react'
import Satellite from '../../assets/SVG/satellite'


const Achievements = () => {
  return (
    <div className='h-screen flex bg-secondaryblack'>
      <div className='w-2/3 my-10 flex'>
        <Satellite width={100} height={100} className={`mx-10 opacity-70`}/>
        <h1 className='uppercase font-[Encode Sans SC] text-5xl w-full text-center first-letter:text-6xl'>Achievements</h1>
      </div>
      <div className='specialdiv2 w-1/3 bg-darkblack'></div>
    </div>
  )
}

export default Achievements