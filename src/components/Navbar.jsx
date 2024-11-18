import React, { useState } from "react";
import imgs from "/crown1.png"
import imgs1 from "/crown2.webp"
import { Menu } from "lucide-react";

export default function Navbar(){
    return(
        <>
            <header className="sticky w-full top-0 mt-2 rounded-3xl bg-blue-200 border-2 border-blue-400 transition-all z-50 backdrop-sepia">
                <div className="max-w-7xl mx-auto">
                    {/* <div className="flex md:hidden items-center justify-between px-4">
                        <div className="flex gap-1 items-center">
                            <img src={imgs1} alt="" className="w-14 pr-2 z-40" />   
                            <h1 className="text-gray-600 text-2xl font-semibol "> <span className="text-red-600 text-3xl font-bold ">Maharaja</span>Bitess</h1> 
                        </div>
                        <div>
                            <Menu/>
                        </div>
                    </div> */}
                    <div className="flex justify-between items-center px-10">
                        <div className="font-semibold flex items-center ">
                            <img src={imgs1} alt="" className="w-14 z-40" />   
                            <h1 className="text-gray-600 text-2xl font-semibol "> <span className="text-red-600 text-3xl font-bold">Maharaja</span>Bitess</h1> 
                        </div>  

                        <div className="flex items-center gap-x-6">
                            <ul className="flex item-center cursor-pointer gap-8 text-black font-bold">
                                <li className="text-center hover:text-blue-500 transition-all mt-2"><a href="#Home">Home</a></li>
                                <li className="text-center hover:text-blue-500 transition-all mt-2"><a href="#Popular">Popular</a></li>
                                <li className="text-center hover:text-blue-500 transition-all mt-2"><a href="#Reviews">Reviews</a></li>
                                <button className="bg-blue-500 px-4 py-2 text-white rounded-lg">Order Now</button>
                            </ul>
                        </div>                      
                    </div>
                </div>
            </header>
        </>
    )
}