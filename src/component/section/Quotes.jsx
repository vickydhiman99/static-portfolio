import React, { useEffect, useState } from 'react'
import Section from '../generalcomp/Section'
import SectionHead from '../generalcomp/SectionHead'

const Quotes = ({
    head,
    heading,
    list
}) => {
    const [cureent, setCurrent] = useState(0)
    // console.log(cureent)

    useEffect(() => {
        const interval = setInterval(() => {
            if (cureent == list.length - 1) {
                setCurrent((prev) => (list.length - 1) - prev)

            } else {
                setCurrent((prev) => prev + 1)
            }
        }, 10000);

        return () => {
            // console.log('clean')
            clearInterval(interval);
        };
    },);


    const changeSlide = (key) => {
        // console.log('j33')
        switch (key) {
            case "prev":
                console.log(key)
                if (cureent == 0) {
                    setCurrent((prev) => (list.length - 1) - prev)

                } else {
                    setCurrent((prev) => prev - 1)
                }
                break;
            case "next":
                // console.log(key)
                if (cureent == list.length - 1) {
                    setCurrent((prev) => (list.length - 1) - prev)

                } else {
                    setCurrent((prev) => prev + 1)
                }
                break;

            default:
                break;
        }
    }
    // const myInterval = setInterval(changeSlide("next"), 1000);
    return (
        <Section id="Quotes">
            <div className=' mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8'>
                <SectionHead head={head} />
                <h3 className='text-normal text-lg md:text-xl max-w-xl text-center self-center' >{heading}</h3>

                <div className='flex  max-md:flex-col md:max-lg:flex-wrap items-center'>



                    <div className='text-6xl md:block hidden' onClick={() => changeSlide("prev")} ><i className="fa-solid fa-arrow-left"></i></div>
                    {

                        list.map((i, index) => {
                            return (
                                <div key={index} className={`${cureent == index ? '' : 'hidden'} rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3`}>
                                    <img className='h-40 w-40 rounded-full object-cover' src={i.image} alt={i.image} srcSet="" />
                                    <p className='text-normal text-base'><q>{i.line}</q></p>
                                    <div className='flex w-full flex-col gap-1'>
                                        <h4 className='text-lg md:text-xl w-full text-center font-semibold text-gray-900'>{i.bywhom}</h4>
                                        <p className='text-normal text-sm w-full text-center'>{i.profession}</p>
                                    </div>
                                </div >

                            )
                        })
                    }
                    <div className='text-6xl md:block hidden' onClick={() => changeSlide("next")} ><i className="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>

        </Section>
    )
}

export default Quotes