import React,{Component} from "react";
import { Navbar,Footer } from "../component/index"
import {Data} from '../component/data';
class About extends Component{
    constructor(props){
        super(props);
        this.state={
            Data : []
        }
    }
    componentDidMount(){
        this.setState({Data : Data})
    }
    render(){
        return(
            <>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <section id="About" className="max-w-[1200px] mx-auto mt-[5em] rounded-2xl bg-white">
                        <div className="flex flex-col justify-evenly">
                            <h1 className="text-center text-[50px] Logo font-bold">LIRA</h1>
                            <p className="text-center w-full mx-auto p-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum ea in sunt! Officia reiciendis asperiores quae eius cumque velit recusandae rem tempora? Corporis, soluta rerum? Doloribus nihil ex dolorem?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt molestias rem reiciendis, totam modi voluptas perferendis nam eum, cum animi? Voluptatibus dolore ut asperiores nisi nulla repellat numquam amet?
                            </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row flex-wrap w-full justify-evenly mx-auto md:w-[70%] lg:w-1/2 xl:w-1/2">
                                {
                                    this.state.Data.map((Respons)=>{
                                        console.log(Respons)
                                        return(
                                            <img key={Respons.id} src={Respons.image} alt="Product" className="object-fill w-[150px] m-3"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </>
        )
    }
}

export default About;