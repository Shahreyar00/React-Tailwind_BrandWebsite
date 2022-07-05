import React from 'react';
import { HiPhone, HiArrowNarrowRight, HiChip, HiSupport } from "react-icons/hi";
import supportImg from "../assets/support.jpg";

const Support = () => {
    return (
        <div name="support" className="w-full mt-24">
            <div className="w-full h-[600px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
            </div>

            <div className="max-w-[1040px] mx-auto text-white relative">
                <div className="px-4 py-10">
                    <h2 className='text-3xl pt-3 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-4xl font-bold py-4 text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300 text-center'>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. In repudiandae veritatis 
                        ratione error tenetur, voluptates architecto possimus ad! 
                        Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                    <div className="bg-white rounded-xl shadow-2xl" >
                        <div className="p-8">
                            <HiPhone className=" bg-indigo-600 text-white w-[50px] h-[50px] p-2 rounded-lg  mt-[-4rem]" />
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4 cursor-pointer">
                            <p className="flex items-center text-indigo-600">Contact Us <HiArrowNarrowRight className="w-5 ml-2" /></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl" >
                        <div className="p-8">
                            <HiSupport className=" bg-indigo-600 text-white w-[50px] h-[50px] p-2 rounded-lg  mt-[-4rem]" />
                            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4 cursor-pointer">
                            <p className="flex items-center text-indigo-600">Contact Us <HiArrowNarrowRight className="w-5 ml-2" /></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl" >
                        <div className="p-8">
                            <HiChip className=" bg-indigo-600 text-white w-[50px] h-[50px] p-2 rounded-lg  mt-[-4rem]" />
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4 cursor-pointer">
                            <p className="flex items-center text-indigo-600">Contact Us <HiArrowNarrowRight className="w-5 ml-2" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support