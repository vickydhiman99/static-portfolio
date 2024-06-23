import React from 'react'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'

const About = ({ desciption, image, heading, head }) => {
    return (
        <Section id="About">
            
            <div className='  mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8'>
                <SectionHead head={head} />
                <div className='flex w-full flex-col justify-between gap-12 md:flex-row items-center '>
                <div>
                <img className=' rounded-s-lg relative h-[380px] w-[288px]  md:h-[380px] md:w-[300px] lg:h-[400px] lg:w-[320px] md:p-8' loading='lazy' src={image} alt="my photo" srcSet="" />
                </div>
                    <div className='flex max-w-xl flex-col gap-6' >
                        <h1 className='text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900'>{heading}</h1>
                        {desciption.map((i,index)=><p key={index} className='text-normal text-base'> {i} </p>)}
                    </div>
                </div>
            </div>
            
        </Section>
    )
}

export default About