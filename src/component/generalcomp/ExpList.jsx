import React from 'react'

const ExpList = (
    props

) => {
    const { position, time_period, desciption } = props.element

    return (
        <div className='rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-14 md:flex-row md:gap-8' >
            <div className='flex flex-col gap-4 max-md:order-3 md:w-2/4'>
                <h2 className='text-lg md:text-xl font-semibold text-gray-900'>{position}</h2>
                <ul className='flex list-disc flex-col gap-2 md:gap-1'>

                    {
                        desciption.map((element, index) => <li className='text-normal text-base' key={index}>{element}</li>)
                    }
                </ul>
            </div>
            <p className=''>{time_period}</p>
        </div>
    )
}

export default ExpList