import React from 'react'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'
import Skill from '../generalcomp/Skill'
const Skills = ({ head, heading, skills }) => {
    return (
   
        <Section id="Skills" >



            <div className='mx-auto flex w-full max-w-7xl  flex-col gap-6 px-4 md:gap-12 md:px-8'>
                <SectionHead head={head} />
                <h3 className='text-normal text-lg md:text-xl max-w-xl  self-center'>{heading}</h3>

                <div className='grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12'>
                {/* <div className='flex flex-row gap-4 md:flex-row md:gap-8 lg:flex-row lg:gap-12'> */}
                {skills.map((i, index) => <Skill key={index} logo={i.logo} label={i.label} />
                )}
               </div>
            </div>
        </Section>
        
    )
}

export default Skills