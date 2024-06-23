import React from 'react'
import ExpList from '../generalcomp/ExpList'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'

const Experience = ({ head,
    explist }) => {
    return (
        <Section id="Experience">
            <div className=' mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8'>

            <SectionHead head={head} />
            <h3 className='text-center'>Here is a quick summary of my most recent experiences:</h3>
           
               
                    <div className='flex flex-col-reverse' >
                        {
                            explist.map((element, index) => <ExpList key={index} element={element} />)

                        }
                    </div>
                </div>
         
        </Section>
    )
}

export default Experience