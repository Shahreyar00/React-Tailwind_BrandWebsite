import React from 'react';
import { HiCheck } from "react-icons/hi";

const AllInOne = () => {
    return (
        <div name="platforms" className="w-full my-32">
            <div className="max-w-[1040px] mx-auto px-2">
                <h2 className="text-3xl md:text-4xl font-bold text-center">All-In-One Platform</h2>
                <p className="text-2xl py-6 text-gray-500 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                    ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                    nostrum tempore.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Notifications</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Updates</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Maintenance</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Renewal</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Cloud Backup</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Consumption-based</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Data Migration</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <HiCheck className="text-[26px] mr-4 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Elasticity</h3> 
                            <p className="text-lg pt-2 pb-4"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllInOne