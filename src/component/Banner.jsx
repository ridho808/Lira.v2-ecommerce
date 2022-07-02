import React,{Component} from "react";
import Picture from '../assets/Carousel-image.jpg'
class Banner extends Component{
    render(){
        return(
            <>
                <div className="max-w-[900px] mx-auto mt-[6em]">
                    <img src={Picture} alt="Img Benner" className="object-cover h-[400px] w-full xl:w-[900px] rounded-[20px] drop-shadow-2xl"/>
                    <h1 className="p-4 text-3xl font-bold">DISCOUNT 67%</h1>
                    <h2 className="pl-4 text-md">Act+ Acre Restorative Mask</h2>
                    <button className="m-4 p-3 text-white rounded-[10px] transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-700 duration-300">BUY NOW</button>
                </div>   
            </>
        )
    }
}

export default Banner;