import React from 'react';
import { HiCheck } from "react-icons/hi";

const Pricing = () => {
    return (
        <div name="pricing" className="w-full text-white my-24">
            <div className="w-full h-[700px] bg-slate-900 absolute mix-blend-overlay"></div>

            <div className="max-w-[1040px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-2xl md:text-4xl">Pricing</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white py-5">The right price for your research.</h3>
                    <p className="text-2xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                        laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
                        voluptatum iste.
                    </p>
                </div>

                <div className="grid md:grid-cols-3">
                    <div className="bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative">
                        <span className="uppercase font-medium px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Standard</span>
                        <div>
                            <p className="text-3xl font-bold py-2 flex">$49<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                        </div>
                        <p className="text-2xl py-2 text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <div className="text-2xl">
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 bg-indigo-500 text-white py-2 my-2 cursor-pointer rounded-xl">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative">
                        <span className="uppercase font-medium px-3 py-1 bg-orange-200 text-indigo-900 rounded-2xl text-sm">Professional</span>
                        <div>
                            <p className="text-3xl font-bold py-2 flex">$99<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                        </div>
                        <p className="text-2xl py-2 text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <div className="text-2xl">
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 bg-indigo-500 text-white py-2 my-2 cursor-pointer rounded-xl">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative">
                        <span className="uppercase font-medium px-3 py-1 bg-yellow-200 text-indigo-900 rounded-2xl text-sm">Premium</span>
                        <div>
                            <p className="text-3xl font-bold py-2 flex">$149<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                        </div>
                        <p className="text-2xl py-2 text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <div className="text-2xl">
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-2'><HiCheck className='w-6 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 bg-indigo-500 text-white py-2 my-2 cursor-pointer rounded-xl">Get Started</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing