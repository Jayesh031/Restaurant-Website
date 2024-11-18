import React from 'react'
import star from "../assets/star.png"
import { Quote, Star, StarHalf, StarHalfIcon } from 'lucide-react';

export default function Card({ menu }) {

    return (
        <div className="rounded-lg border-blue-500 border-1 flex flex-col items-center relative space-y-4 py-4 px-6 bg-blue-50 hover:shadow-blue-500 hover:shadow-2xl">
            <img src={menu.dish} alt="" className='w-48 h-36 -z-1' />
            <h2 className='text-2xl font-semibold'>{menu.name}</h2>
            <p className='mb-5'>{menu.description}</p>
            <button className='px-3 py-2 bg-blue-500 text-white rounded-lg w-3/4 hover:scale-x-105 hover:font-bold'>Order Now</button>
            <div className='flex gap-1 absolute right-0 top-0 decoration-transparent rounded-full border-none p-2'>
                <div className=''>
                    {
                        menu.rating === 4 ? (<div className='flex '>
                            <Star Size='1px' fill="#FFD700" color='#FFD700' />
                            <Star fill="#FFD700" color='#FFD700' />
                            <Star fill="#FFD700" color='#FFD700' />
                            <Star fill="#FFD700" color='#FFD700' />
                            <StarHalfIcon color='#FFD700'fill="#FFD700" />
                        </div>) : (<div className='flex'>
                            <Star fill="#FFD700" color='#FFD700' />
                            <Star fill="#FFD700" color='#FFD700' />
                            <Star fill="#FFD700" color='#FFD700' />
                            <Star fill="#FFD700" color='#FFD700' />
                            <Star fill="#FFD700" color='#FFD700' />
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}