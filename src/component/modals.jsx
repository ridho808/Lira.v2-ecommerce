import React,{Component} from "react";

class Modals extends Component{
    render (){
        return (
            <>
                <section id="modals" className="fixed flex justify-center items-center h-full inset-0 z-50" data-aos="fade-down">
                    <div className="flex flex-col w-[400px] h-[6    00px] md:w-[700px] md:h-[450px] bg-white rounded-[15px]">
                        <div className="flex flex-col justify-evenly w-full md:flex-row">
                            <img src={this.props.Picture} alt="Product" className="object-cover self-center h-[170px] md:h-[250px] rounded-[15px] m-2 md:self-start md:w-[300px]"/>
                            <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
                            <h1 className="text-xl text-black ml-3 mt-3">{this.props.Title}</h1>
                            <p className="p-3 text-sm">
                                {this.props.description}  
                            </p>
                            <h3 className="font-bold p-4">Price : ${this.props.Price}.00</h3>
                            </div>
                        </div>
                            <div className="flex flex-row justify-evenly w-[300px] mx-auto p-4 md:mt-12 md:w-[500px]">
                                <button onClick={this.props.Buy} className="w-[120px] h-[40px] text-white rounded-[10px] transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-700 duration-300">ADD CARD</button>
                                <button onClick={this.props.Close} className="w-[120px] h-[40px] text-white rounded-[10px] transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-700 duration-300">Close</button>
                            </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Modals;