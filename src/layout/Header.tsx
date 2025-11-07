import logo from "../assets/shared/logo.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)
    
    function handleToggle(){
        setIsOpen(prev => !prev)
    }

    return (
        <header className="sm:relative flex items-center justify-between m-6 sm:gap-8 sm:m-0 sm:ml-10 lg:justify-between lg:mt-10 lg:ml-16">
            {/* <div className="lg:relative lg:flex lg:items-center" > */}
                <div className="w-10 sm:w-12 ">
                    <img src={logo} alt="" />
                 {/* </div> */}
                {/* <div className="hidden lg:block lg:bg-White opacity-25 lg:w-lg lg:h-px absolute left-40 z-10"></div> */}
            </div>
            <nav aria-label="Desktop/Tab" className="hidden sm:bg-White/5 sm:pr-10 lg:pr-16 sm:pl-20 lg:pl-40 sm:flex items-center backdrop-blur-xs">
                <ul className="flex items-center gap-12">
                    <li>
                        <NavLink 
                            to={'/'}
                            className={({isActive}) =>  isActive ? "border-b border-b-White" : ''}
                        >
                            <span>00</span>
                            <span>HOME</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/destination"}
                            className={({isActive}) =>  isActive /* || location.pathname.startsWith('/destination') */ ? "border-b border-b-White" : ''}
                        >
                            <span>01</span> 
                            <span>DESTINATION</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/crew'}
                            className={({isActive}) =>  isActive ? "border-b border-b-White" : ''}
                        > 
                            <span>02</span>
                            <span>CREW</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/technology"}
                            className={({isActive}) =>  isActive ? "border-b border-b-White" : ''}
                        >
                            <span>03</span>
                            <span>TECHNOLOGY</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
                
            <button 
                onClick={handleToggle}
                className="block z-9 sm:hidden w-6"
            >
                <img src={isOpen? close : hamburger} alt="" />
            </button>

            <nav aria-label="Desktop/Tab" className={`absolute ${isOpen ? "block" : "hidden"} sm:hidden bg-Blue-900/0 backdrop-blur-xl h-dvh w-[256px] top-0 right-0 pl-8`}>
            <ul className="flex flex-col text-left gap-8 mt-[133px]">
                <li>
                        <NavLink 
                            to={'/'}
                            className={({isActive}) =>  isActive ? "border-r border-r-White" : ''}
                        >
                            <span>00</span>
                            <span>HOME</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/destination"}
                            className={({isActive}) =>  isActive ? "border-r border-r-White" : ''}
                        >
                            <span>01</span> 
                            <span>DESTINATION</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/crew'}
                            className={({isActive}) =>  isActive ? "border-r border-r-White" : ''}
                        > 
                            <span>02</span>
                            <span>CREW</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/technology"}
                            className={({isActive}) =>  isActive ? "border-r border-r-White" : ''}
                        >
                            <span>03</span>
                            <span>TECHNOLOGY</span>
                        </NavLink>
                    </li>
            </ul>
        </nav>                
            
        </header>
    )
}