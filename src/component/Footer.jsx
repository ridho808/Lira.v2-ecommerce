import React,{Component} from "react";
import {Link} from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <>
                    <div className="mx-auto max-w-screen mt-[3em] flex flex-col justify-evenly md:flex-row xl:flex-row bg-white">
                        <div className="flex flex-col w-full md:w-[300px]">
                            <h1 className="text-3xl font-bold p-2">LIRA</h1>
                            <p className="p-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius autem quos nam temporibus natus, vero porro delectus repudiandae fuga fugit, nobis nisi non iste praesentium est in eligendi facilis quo.
                            </p>
                        </div>
                        <ul className="flex flex-row">
                            <li className="p-2 font-bold text-blue-500">
                                <Link to={'/'}>HOME</Link>
                            </li>
                            <li className="p-2 ">
                                <Link to={'/'}>ABOUT</Link>
                            </li>
                        </ul>
                        <div className="flex flex-col w-full sm:w-[340px] xl:w-[400px]">
                            <form className="flex flex-col w-full p-2">
                                <label className="font-bold">Email</label>
                                <input type="email" className="rounded-[10px]"/>
                                <label className="font-bold">Feedback</label>
                                <input type="text" className="h-[80px] rounded-[10px]"/>
                                <button className="mt-3 p-2 w-[100px] text-white rounded-[10px] transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-700 duration-300">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center bg-white">

                    </div>
                    <div className="bg-black flex flex-col items-center h-10">
                        <h6 className="text-white text-center">made by DOOLEAN</h6>
                    </div>
            </>
        )
    }
};

export default Footer;