import React from 'react'

const SectionHead = ({head}) => {
  return (
    <div className='self-center' >
        <div className='flex items-center justify-center rounded-xl bg-[#94a3b8] px-5 py-1'>
            <p className='text-base font-medium'>
                {head}
            </p>
            </div> </div>
  )
}

export default SectionHead