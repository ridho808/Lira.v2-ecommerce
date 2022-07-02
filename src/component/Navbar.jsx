import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import './Navbar.css';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            Navbar : false,
            Scrolly : Boolean
        }
        this.HandleNav = this.HandleNav.bind(this);
    }
    HandleNav(){
        return(
            this.setState({Navbar: !this.state.Navbar})
        )
    }
    componentDidMount(){
        window.addEventListener("scroll",()=>{
            console.log(window.scrollY)
            if(window.scrollY >= 1){
                this.setState({Scrolly : true})
            }else if(window.scrollY === 0){
                this.setState({Scrolly : false})
            }
        })
    }
    componentDidUpdate(){

    }
    render(){
        return(
            <>
                <nav className={this.state.Scrolly ? 
                "fixed top-0 w-full flex flex-col items-center bg-white z-10 p-4" 
                : "fixed top-0 w-full flex flex-col items-center bg-transparent z-10 p-4"}>
                    <div className="flex flex-row w-full justify-between items-center">
                        <h1 className="text-5xl font-bold Logo">LIRA</h1>
                        <ul className="hidden sm:flex flex-row">
                            <li className="text-md p-4 hover:font-bold">
                                <Link to={'/'}>HOME</Link>
                            </li>
                            <li className="text-md p-4 hover:font-bold">
                                <Link to={'/'}>ABOUT</Link>
                            </li>
                        </ul>
                        <button onClick={this.HandleNav} className="flex sm:hidden">
                            {this.state.Navbar ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                        </button>
                    </div>
                    <div className={this.state.Navbar ? "flex" : "hidden" }>
                        <ul className="flex flex-row sm:hidden">
                            <li className="text-md p-4 hover:font-bold">
                                <Link to={'/'}>HOME</Link>
                            </li>
                            <li className="text-md p-4 hover:font-bold">
                                <Link to={'/'}>ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;