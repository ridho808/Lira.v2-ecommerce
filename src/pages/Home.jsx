import React,{Component} from "react";
import { Banner, Footer, Navbar } from "../component";
import {Img1,Img2,Img3,Img4,Img5,Img6} from '../component/image';
import '../pages/home.css'
class Home extends Component{
    render(){
        return (
            <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Banner/>
                <div className="max-w-[976px] mx-auto my-3 flex flex-col items-center flex-wrap justify-between sm:flex-row md:flex-row lg:flex-row">
                    {/* Card 1*/}
                    <div className="w-[17rem] m-3 rounded-[15px] shadow-2xl card" data-aos="fade-up" data-aos-duration="1000">
                        <img src={Img1} alt="Imaegyaye" className="object-cover h-60 w-[400px]"/>
                        <div className="flex flex-col p-4 bg-white">
                            <h1 className="font-bold">SKIN CARE</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores necessitatibus mollitia
                            </p>
                        </div>
                        <button className="w-full h-[40px] text-white  bg-neutral-900 rounded-br-xl rounded-bl-xl ">BUY</button>
                    </div>
                     {/* Card 2*/}
                     <div className="w-[17rem] m-3 rounded-[15px] shadow-2xl card" data-aos="fade-up" data-aos-duration="2000">
                        <img src={Img2} alt="Imaegyaye" className="object-cover h-60 w-[400px]"/>
                        <div className="flex flex-col p-4 bg-white">
                            <h1 className="font-bold">SKIN CARE</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores necessitatibus mollitia
                            </p>
                        </div>
                        <button className="w-full h-[40px] text-white  bg-neutral-900 rounded-br-xl rounded-bl-xl ">BUY</button>
                    </div>
                     {/* Card 3*/}
                     <div className="w-[17rem] m-3 rounded-[15px] shadow-2xl card" data-aos="fade-up" data-aos-duration="3000">
                        <img src={Img3} alt="Imaegyaye" className="object-cover h-60 w-[400px]"/>
                        <div className="flex flex-col p-4 bg-white">
                            <h1 className="font-bold">SKIN CARE</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores necessitatibus mollitia
                            </p>
                        </div>
                        <button className="w-full h-[40px] text-white  bg-neutral-900 rounded-br-xl rounded-bl-xl ">BUY</button>
                    </div>
                     {/* Card 1*/}
                     <div className="w-[17rem] m-3 rounded-[15px] shadow-2xl card" data-aos="fade-up" data-aos-duration="1000">
                        <img src={Img4} alt="Imaegyaye" className="object-cover h-60 w-[400px]"/>
                        <div className="flex flex-col p-4 bg-white">
                            <h1 className="font-bold">SKIN CARE</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores necessitatibus mollitia
                            </p>
                        </div>
                        <button className="w-full h-[40px] text-white  bg-neutral-900 rounded-br-xl rounded-bl-xl ">BUY</button>
                    </div>
                     {/* Card 2*/}
                     <div className="w-[17rem] m-3 rounded-[15px] shadow-2xl card" data-aos="fade-up" data-aos-duration="2000">
                        <img src={Img5} alt="Imaegyaye" className="object-cover h-60 w-[400px]"/>
                        <div className="flex flex-col p-4 bg-white">
                            <h1 className="font-bold">SKIN CARE</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores necessitatibus mollitia
                            </p>
                        </div>
                        <button className="w-full h-[40px] text-white  bg-neutral-900 rounded-br-xl rounded-bl-xl ">BUY</button>
                    </div>
                     {/* Card 3*/}
                     <div className="w-[17rem] m-3 rounded-[15px] shadow-2xl card" data-aos="fade-up" data-aos-duration="3000">
                        <img src={Img6} alt="Imaegyaye" className="object-cover h-60 w-[400px]"/>
                        <div className="flex flex-col p-4 bg-white">
                            <h1 className="font-bold">SKIN CARE</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores necessitatibus mollitia
                            </p>
                        </div>
                        <button className="w-full h-[40px] text-white  bg-neutral-900 rounded-br-xl rounded-bl-xl ">BUY</button>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
            </>
        )
    }
};


export default Home;