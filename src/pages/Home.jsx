import React,{Component} from "react";
import { Banner, Footer, Navbar,Modals } from "../component";
import '../pages/home.css';
import {Data} from "../component/data";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            Info : [],
            modals : [],
            ShowModals:false
        }
        this.CheckID =this.CheckID.bind(this);
        this.CloseModals= this.CloseModals.bind(this);
    }
    componentDidMount(){
        this.setState({Info : Data})
    }
    CheckID(Parameters){
        const Result = [Data[Parameters.currentTarget.id]]
        this.setState({modals : Result,ShowModals : true})
    }
    CloseModals(){
        this.setState({ShowModals:false})
    }
    render(){
        return (
            <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Banner/>
                <section id="Product" className="max-w-[976px] mx-auto my-3 flex flex-col items-center flex-wrap justify-between sm:flex-row md:justify-evenly md:flex-row lg:flex-row">
                    {

                        this.state.Info.map((Result,i)=>{
                            return(
                                <div id={i} onClick={this.CheckID} key={Result.id} className="w-[17rem] m-3 rounded-[15px] shadow-2xl card">
                                    <img src={Result.image} alt="Imaegyaye" className="object-right  w-[400px]"/>
                                    <div className="flex flex-col p-4 bg-white">
                                        <h1 className="font-bold">{Result.Title}</h1>
                                        <h3 className="font-bold text-right">${Result.Price}.00</h3>
                                    </div>
                                    <button className="w-full h-[40px] text-white  bg-neutral-900 rounded-br-xl rounded-bl-xl ">BUY</button>
                                </div>
                            )
                        })
                    }
                </section>
                    {
                        // Modals
                    this.state.ShowModals ?  this.state.modals.map((Respons)=>{
                            console.log(Respons)
                            return( 
                                <Modals Picture={Respons.image} 
                                Title={Respons.Title} 
                                description={Respons.description}
                                Price={Respons.Price}
                                Buy ={this.CloseModals}
                                Close={this.CloseModals}
                                />
                            )
                        }) : null
                    }
            </main>
            <footer>
                <Footer />
            </footer>
            </>
        )
    }
};


export default Home;