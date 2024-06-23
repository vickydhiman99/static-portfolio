import React, { children } from 'react'

const Section = ({children,id}) =>  (
  <div id={id} >
    <div  className=' dark:bg-[#1e293b] dark:text-white transition ease-in-out duration-400 w-full bg-gray py-16 md:py-20 2xl:py-24'>{children}</div>
    </div>
  )


export default Section