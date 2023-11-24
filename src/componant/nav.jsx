import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Heddinlist from "./Heddinlist"

  

const Navbar = () => {
  const [active , setactive] = useState('')
  const [toggle , settoggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
       <Link
       to="/"
       className="flex items-center gap-2"
       onClick={()=>{
        setactive("")
        window.scroll(0 , 0 )
       }}
       >
       <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            AM10 &nbsp;
            <span className='sm:block hidden'> |clain </span>
          </p>
       </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
        {
          navLinks.map((link)=>(
            <li
            key={link.id}
            className={`
            ${active === link.title?
            'text-white'
            :'text-secondary'
          } hover:text-white text-[18px] font-medium cursor-pointer
            `}
            onClick={()=>{setactive(link.title)}}
            >
                 <Link
                    to={link.id}>
                    {link.title}
                </Link>
            </li>
          ))
        }
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center ">
              <img
              src={
                !toggle? menu : close
              } 
              className="w-[28px] h-[28px]"
              onClick={()=>{settoggle(!toggle)}}
              alt="menu" />
              <div 
            //   className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                <Heddinlist active={active} toggle={toggle} settoggle={settoggle} />
           </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar