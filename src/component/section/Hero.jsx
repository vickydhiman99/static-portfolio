import React from 'react'
import Section from '../generalcomp/Section'

import animationData from '../../lotties/Skb1oA2iyf.json';
import { useState } from 'react';

const Hero = ({ Coloumn, image }) => {
    // let list=Coloumn.social
    const [resultMessage, setResultMessage] = useState('');
    const [Modal, setModal] = useState(false);
    const [Subject, setSubject] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });

        var json = JSON.stringify(object);
        setResultMessage("Please wait...");

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: json,
            });

            const jsonResponse = await response.json();

            if (response.status === 200) {
                setResultMessage(jsonResponse.message);
            } else {
                console.log(response);
                setResultMessage(jsonResponse.message);
            }
        } catch (error) {
            console.log(error);
            setResultMessage("Something went wrong!");
        } finally {
            form.reset();
            setTimeout(() => {
                setResultMessage('');
            }, 5000);
        }
    };

    return (
        <Section id='Hero'>
            <div className='bg-[url(./pics/line.svg)] dark:mix-blend-color-dodge mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:py-0  md:gap-12 md:px-8' >
                <div className='flex flex-col gap-1 md:flex-row'>

                    <div className='hidden md:block w-2/5 flex items-center justify-center md:order-last md:flex-grow md:justify-end'>



                        <lottie-player src="https://lottie.host/372379ed-34d3-4743-81f5-8e58897ca4ef/yfseGhxyuV.json" background="Transparent" speed="1" direction="1" mode="normal" loop autoplay></lottie-player>

                    </div>
                    <div className='flex max-w-3xl md:w-3/5 flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl flex items-center py-2 font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900'>{Coloumn.name}
                                <span className='block w-[3em]'>

                                    {/* <lottie-player src="https://lottie.host/34748da0-5a33-418f-9982-30bdbda0345d/WOVWMk5NRf.json" background="Transparent" speed="1"  direction="1" mode="normal" loop autoplay></lottie-player> */}

                                </span>
                            </h1>
                            <p className='text-normal text-base'> {Coloumn.description} </p>
                        </div>
                        <div className='flex flex-row gap-[1em] items-center'>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                            <p>{Coloumn.location}</p>

                        </div>
                        <div className='flex gap-4 text-2xl'>

                            <a target="_blank " href={Coloumn.social[0]}><i className="fa-brands fa-github"></i></a>
                            <a target="_blank" href={Coloumn.social[1]}><i className="fa-brands fa-twitter"></i></a>
                            <a target="_blank" href={Coloumn.social[2]}><i className="fa-brands fa-linkedin-in"></i></a>
                            {/* <a target="_blank" href={Coloumn.social[3]}><i className="fa-regular fa-envelope"></i></a> */}

                        </div>
                        {/* <a target="_blank" href={Coloumn.social[3]}> */}
                        <button type="button"
                            onClick={() => setModal(true)}
                            className='
                         w-[130px]  font-medium text-white cursor-pointer transition-all duration-[0.3s] ease-[ease] relative inline-block bg-sky-700 shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.5),7px_7px_20px_0px_rgba(0,0,0,0.1),4px_4px_5px_0px_rgba(0,0,0,0.1)] px-[25px] py-2.5 rounded-[5px];
                         rounded-md
                         text-black border-[none] after:absolute after:content-[""] after:w-0 after:h-full after:z-[-1] after:shadow-[-7px_-7px_20px_0px_#fff9,-4px_-4px_5px_0px_#fff9,7px_7px_20px_0px_#0002,4px_4px_5px_0px_#0001] after:transition-all after:duration-[0.3s] after:ease-[ease] after:left-0 after:top-0 hover:text-[#FFE656] hover:after:w-full hover:after:left-auto hover:after:right-0 active:top-0.5'

                        >
                            Hire Me
                        </button>
                        {/* </a> */}
                    </div>

                    {/* <!-- Modal toggle --> */}
                    {/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button> */}

                    {/* <!-- Main modal --> */}

                    <div style={{ display: Modal ? "" : "none" }} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center  md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#808080c2] dark:bg-[rgb(0 0 0 / 89%)]">


                        <div className="flex items-center min-h-screen w-full max-h-full bg-gray-50 dark:bg-gray-900">
                            <div className="container mx-auto">

                                <div className="max-w-md mx-auto my-10 bg-white dark:bg-black p-3 rounded-md shadow-sm">

                                    <button onClick={() => setModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>

                                    <div className="text-center">



                                        {/* <h1 className="my-1 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Us</h1> */}
                                        <p className="text-gray-400 dark:text-gray-400">Fill up the form below to send a message.</p>
                                    </div>
                                    <div className="m-7">
                                        <form onSubmit={handleSubmit} id="form">

                                            <input type="hidden" name="apikey" value="900259a2-decb-4e69-8c7d-d16327087055" />
                                            <input type="hidden" name="subject" value={Subject} />
                                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                                            <div className='flex flex-row gap-[1em]'>
                                                <div className="mb-6">
                                                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                                    <input type="text" name="name" id="name" placeholder="enter name" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                                </div>
                                                <div className="mb-6">
                                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                                    <input type="email" name="email" id="email" placeholder="enter email" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                                </div>
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="Subject" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Subject</label>
                                                <input onChange={(e) => setSubject(e.target.value)} type="text" name="Subject" id="Subject" placeholder="Subject" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                                                <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                            </div>
                                            {/* ... (Repeat htmlFor other form fields) */}
                                            <div className="mb-6">
                                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                                            </div>
                                            <p className={`text-base text-center ${resultMessage ? 'text-green-500' : 'text-gray-400'}`}>
                                                {resultMessage}
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
                <div className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>



            </div>
        </Section>
    )
}

export default Hero