import React from "react";
import dish1 from "../assets/dish1.png"
import dish2 from "../assets/dish2.png"
import dish3 from "../assets/dish3.png"
import dish6 from "../assets/dish6.png"
import dish7 from "../assets/dish7.png"
import dish8 from "../assets/dish8.png"
import dish9 from "../assets/dish9.png"
import Card from "./Card";

export default function Popular(){

    const menu = [
        {
            id:1,
            dish:dish1,
            name:"Aloo Gobi",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit odio esse.",
            rating:5,
        },
        {
            id:2,
            dish:dish2,
            name:"Shahi Paneer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit odio esse.",
            rating:4,
        },
        {
            id:3,
            dish:dish3,
            name:"Egyptian Falafel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit odio esse.",
            rating:5,
        },
        {
            id:4,
            dish:dish6,
            name:"Pinapple Delight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit odio esse.",
            rating:4,
        },
        {
            id:5,
            dish:dish8,
            name:"Choole",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit odio esse.",
            rating:5,
        },
        {
            id:6,
            dish:dish9,
            name:"Choclate Delight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit odio esse.",
            rating:5,
        }
    ]
    return(
        <div className="pt-[4rem] pb-10 bg-blue-100" id="Popular">
            <div className="text-center max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-500">Popular <span className="underline decoration-gray-800 decoration-2 under underline-offset-8 text-blue-600">Dishes</span></h1>
                <p className="pt-2 text-xl text-gray-700">Check out our most Popular and Highly Rated Dishes</p>
                <div className="grid grid-cols-3 pt-11 gap-8"> 
                    {
                        menu.map((item)=>{
                            return <Card key={item.id} menu={item}/>
                        })

                    }
                </div>
            </div>
        </div>
    )
}