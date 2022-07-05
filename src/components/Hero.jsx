import React from 'react';
import bgImg from '../assets/cyber-bg.png';
import { HiCloudUpload, HiDatabase, HiPaperAirplane, HiServer } from "react-icons/hi";

const Hero = () => {
    return (
        <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1040px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className='text-2xl'>Unique Sequencing & Production</p>
                    <h1 className='py-3 text-4xl md:text-6xl font-bold'>Cloud Management</h1>
                    <p className='text-2xl'>This is our Tech brand.</p>
                    <button className='py-3 px-6 sm:w-[60%] my-2 text-2xl font-medium'>Get Started</button>
                </div>
                <div>
                    <img className="w-[90%]" src={bgImg} alt="/" />
                </div>
                <div className="absolute flex flex-col py-4 md:min-w-[760px] bottom-[-8%] md:bottom-[2%]
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                border border-slate-300 rounded-xl text-center shadow-xl">
                    <p className="font-bold text-slate-600 text-lg">Our Services</p>
                    <div className="flex justify-between flex-wrap px-4">
                        <p className="flex items-center px-3 py-2 gap-1 text-slate-500"><HiCloudUpload className="text-[30px]" />App Security</p>
                        <p className="flex items-center px-3 py-2 gap-1 text-slate-500"><HiDatabase className="text-[30px]" />Database</p>
                        <p className="flex items-center px-3 py-2 gap-1 text-slate-500"><HiServer className="text-[30px]" />Cloud Data</p>
                        <p className="flex items-center px-3 py-2 gap-1 text-slate-500"><HiPaperAirplane className="text-[30px]" />API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero