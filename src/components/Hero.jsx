import React from "react";
import hero_food from "../assets/hero-food.png"
// import hero_food from "../assets/pizza.webp"
import ps from "../assets/playstore.png"
import as from "../assets/appstore.png"
import time from "../assets/time.png"
import star from "../assets/star.png"
import star_outline from "../assets/star-outline.png"
import fruit from "../assets/fruit.png"
import fruit2 from "../assets/fruit2.png"


export default function Hero(){
    return(
        <>
            <div className="bg-blue-100 h-full pt-10 pb-12" id="Home">
                <div className="flex items-center justify-center max-w-7xl mx-auto relative">
                    <div className="w-1/2 space-y-6 px-10 relative">
                        <div className="flex gap-2">
                            <img src={ps} alt="" className="w-28 h-10" />
                            <img src={as} alt="" className="w-28 h-10" />
                        </div>
                        <h1 className="font-bold text-6xl tracking-normal"> <span className="text-blue-500">Flavors</span> that Bring People Together!</h1>
                        <p className="text-lg text-gray-600 my-3">Discover a World of culinary delights with us. Enjoy Fresh,Healthy, Delicious and wide selection of mouthwatering Dishes.</p>
                        <div className="flex gap-3">
                            <button className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-blue-600 hover:scale-110 transition-all z-10
                            ">Order Now</button>
                            <button className="bg-white px-3 py-2 rounded-lg border border-blue-500 text-blue-500 hover:scale-110 tramsition-all">Contact Now</button>
                        </div>
                    </div>
                    <div className="w-1/2 overflow-hidden">
                        <img className="mx-auto spin" src={hero_food} alt="Thali" />
                        <div className="bg-blue-50 gap-2 text-lg flex border-blue-200 border items-center absolute bottom-16 right-14  px-4 py-2 rounded-full">
                            <img src={time} alt="" className="w-12 h-12 " />
                            <p className="leading-4 text-sm font-semibold">Quick Food <br /> Service</p>
                        </div>

                        <div variant="outline" className="bg-blue-50 leading-none text-lg flex flex-col gap-1  border-blue-200 border items-center absolute top-12 right-36 px-4 py-2 rounded-full">
                            <p className="leading-4 text-sm font-semibold">Excellent Rating</p>
                            <div className="flex">
                                <img src={star} alt="star" className="h-4 w-4"/>
                                <img src={star} alt="star" className="h-4 w-4"/>
                                <img src={star} alt="star" className="h-4 w-4"/>
                                <img src={star} alt="star" className="h-4 w-4"/>
                                <img src={star_outline} alt="star" className="h-4 w-4"/>
                            </div>
                        </div>

                        <div className="flex flex-col bg-blue-50 border-blue-200 border px-6 py-2 absolute top-20 left-[42rem] rounded-full items-center">
                            <h1 className="text-blue-500 text-2xl font-bold">200+</h1>
                            <p className="text-sm font-semibold">Daily Customers </p>
                        </div>
                        <img src={fruit} alt="" className="absolute w-32 bottom-[3rem] left-[38rem]"/>
                    </div>
                </div>
                <img src={fruit2} alt="" className="absolute top-[460px] left-16 w-44 z-0" />
            </div>
        </>
    )
}