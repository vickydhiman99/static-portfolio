import React from 'react'

const Skill = ({logo,label}) => {
  return (
    <div className='flex flex-col items-center justify-between  '>
        <img  height="64" width="64" loading='lazy' src={logo} alt="SkillLogo" srcSet="" />
        <p className='text-normal text-base md:text-lg'>{label}</p>
    </div>
  )
}

export default Skill