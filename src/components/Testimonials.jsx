import React, { useRef, useState } from 'react';
import Partner from './Partners'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star, StarHalf } from 'lucide-react';
export default function Testimonial() {

    const testimonial = [
        {
            id: 1,
            Name: "Rajesh Kumar",
            rating: 5,
            location: "Nashik",
            mes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, est.",
        },
        {
            id: 2,
            Name: "Virat Kohli",
            rating: 4,
            location: "Kolkatta",
            mes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, est.",
        },
        {
            id: 3,
            Name: "Suresh Sharma",
            rating: 5,
            location: "Nagpur",
            mes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, est.",
        },
        {
            id: 4,
            Name: "Umesh Yadhav",
            rating: 4,
            location: "Pune",
            mes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, est.",
        },
        {
            id: 5,
            Name: "Shubham Pawar",
            rating: 5,
            location: "Mumbai",
            mes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, est.",
        }
    ]

    return (
        <>
            <div className='pt-16 bg-white h-screen pb-2' id='Reviews'>
                <h1 className="text-4xl font-bold mb-4 text-blue-500 text-center">What Our <span className="underline decoration-gray-800  underline-offset-8 decoration-2 under text-blue-600">Customers</span> Say</h1>
                <div className='max-w-6xl mx-auto py-8 px-4'>
                    <Swiper

                        style={{
                            "--swiper-pagination-color": "#EF4444",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "10px",
                            "--swiper-pagination-bullet-horizontal-gap": "6px"
                        }}

                        modules={[Pagination, Autoplay]}
                        loop={true}
                        speed={600}
                        autoplay={{ delay: 3000 }}
                        slidesPerView={3}
                        spaceBetween={30}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            type: "bullets",
                            clickable: true,
                        }}

                        className="mySwiper h-[240px]"
                    >
                        {
                            testimonial.map((item) => {
                                return <SwiperSlide kay={item.id}>
                                    <div className='border border-gray-400 shadow-md shadow-blue-500 rounded-lg flex flex-col p-4 mt-5'>
                                        {
                                            item.rating === 4 ? (<div className='flex'>
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star color='#FFD700' />
                                            </div>) : (<div className='flex'>
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star fill="#FFD700" color='#FFD700' />
                                                <Star fill="#FFD700" color='#FFD700' />
                                            </div>)
                                        }

                                        <p className='py-3'>{item.mes}</p>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <h3 className='font-semibold text-blue-500 text-lg'>{item.Name}</h3>
                                                <p className='text-sm mt-1 font-semibold'>{item.location}</p>
                                            </div>
                                            <Quote className='text-blue-400' />
                                        </div>
                                    </div>

                                </SwiperSlide>
                            })
                        }

                    </Swiper>
                </div>
                <Partner/>
            </div>
            
        </>
    )
}