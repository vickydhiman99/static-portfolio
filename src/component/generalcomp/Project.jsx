import React from 'react'

const Project = (props) => {
    // console.log(props)
    const { Codelink, Livelink, des, image, name, tech_stack } = props.i
    return (
        <div className='rounded-xl md:even:flex-row-reverse p-2  bg-[#fafaf9] shadow-md dark:bg-gray dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row'>

            <div className='flex items-center justify-center border-gray-100 bg-[#e5e7eb]  dark:bg-[#334155] rounded-lg md:w-1/2 lg:p-4 md:order-last '>
                <img className='shadow-xl' src={image}  alt="" srcSet="" />
            </div>

            <div className='flex flex-col gap-6 p-8 md:w-1/2 lg:p-8 md:order-first'>
                <h2 className='text-lg md:text-xl font-semibold text-gray-900'>{name}</h2>
                <div className='flex flex-col gap-4' >
                    {
                        des.map((i, index) => <p key={index} className='text-normal  text-base'> {i} </p>)
                    }
                </div>

                <div className='flex flex-wrap gap-2'>
                    {
                        tech_stack.map((i, index) => <div className="flex items-center justify-center rounded-xl bg-[#a3a3a3] px-5 py-1" key={index}> <h2 className='text-normal text-sm font-medium ' > {i}</h2> </div>)
                    }
                </div>
                <div className='flex flex-row gap-4'>
                    <a href={Codelink} target='_blank' className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'><i className="fa-solid fa-code"></i></a>
                    <a href={Livelink} target='_blank' className='self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Project