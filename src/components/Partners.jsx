import React from "react";
// import swiggy from "../assets/swiggy.png"
import zomato from "../assets/zomato.png"
import magicpin from "../assets/magicpin.png"
import swiggy from "../assets/swiggy.png"
import chowman from "../assets/Chowman-Logo.png"

export default function Partner(){

    const logo =[swiggy,zomato,magicpin,swiggy,chowman]
    return(
        <>
            <div className="pb-4 pt-1 bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-blue-500">Our <span className="underline decoration-gray-800  underline-offset-8 decoration-2 under text-blue-600">Delivary</span> Partners</h1>
                    <p className="text-xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero?</p>
                    <div
                        style = {{
                            maskImage: "linear-gradient(to right, hsl(0 0% 0% /0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1)90%, hsl(0 0% 0% /0))",
                            WebkitMaskImage: "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1)90%, hsl(0 0% 0% /0))",
                        }}
                        className="max-w-6xl mx-auto mt-1 py-2 flex gap-4 flex-nowrap overflow-hidden"
                    >
                        <div className="flex gap-4 loop-scroll mt-4">
                        <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={swiggy} alt="" />
                                </div>

                                <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={zomato} alt="" />
                                </div>

                                <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={magicpin} alt="" />
                                </div>

                                <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={chowman} alt="" />
                                </div>

                                <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={swiggy} alt="" />
                                </div>

                                <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={zomato} alt="" />
                                </div>

                                <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={magicpin} alt="" />
                                </div>

                                <div className="shadow-blue-200 shadow-lg p-4 w-80 bg-white">
                                    <img src={chowman} alt="" />
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}