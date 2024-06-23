import React from 'react'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'
const Contectme = ({
    head,
    description,
    gmail,
    number,
    content
}) => {
    return (
        <Section id="Contactme">
            <div className=' mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8 bg'>
                <div className='flex flex-col items-center gap-4'>
                    <SectionHead head={head} />
                    <p className='text-normal text-lg md:text-xl max-w-xl text-center'>{description}</p>
                </div>

                <div className='flex flex-col items-center gap-6 md:gap-12'>
                    <div className='flex items-center gap-4 md:gap-5'><i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-8 md:w-8"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></i><h2 className='text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900'>{gmail}</h2></div>
                    <div className='flex items-center gap-4 md:gap-5'><i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-8 md:w-8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></i><h2 className='text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900'>{number}</h2></div>

                    <div className='flex items-center justify-center gap-1'>
                        <p className='text-normal text-sm flex items-center text-center'>{content}</p>
                    </div>
                </div>
            </div>




          



        </Section>
    )
}

export default Contectme