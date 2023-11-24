import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Heddinlist = ({active , toggle , settoggle}) => {
  return (
    <>
       
          <ul className={`list-none flex justify-end items-start flex-1 flex-col gap-4 0 r heddinlist ${toggle? "translate" :null }`}
          >
              {
                navLinks.map((link)=>(
                  <li
                  key={link.id}
                  className={`text-white font-poppins font-medium cursor-pointer text-[16px]
                  `}
                  onClick={()=>{

                    settoggle(!toggle)
                  }}
                  >
                    <Link to={link.id}>
                    {link.title}
                    </Link>

                  </li>
                ))
              }
          </ul>
        
      
    </>
  )
}

export default Heddinlist
